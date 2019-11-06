new Vue({
    el: '#vue-div',
    data: function data() {
        return {
            nameAuthor: localStorage.getItem('NAME_AUTHOR'),
            comment: "",
            tableData: []
        };
    },

    methods: {
        changeName() {
            localStorage.setItem('NAME_AUTHOR', this.nameAuthor)
        },
        saveText() {
            firebase.database().ref('guest').push({
                author: this.nameAuthor,
                comment: this.comment, 
                date: new Date().getTime()
            }).then(
                res => this.showComments(),
                err => console.warn('ERROR = ', err)  
            )          
        },
        showComments(){
            this.comment='';
            let dbRef = firebase.database().ref('guest').limitToLast(50);
            dbRef.on('value', snap => {
                let obj = snap.val();    
                this.tableData=[];
                Object.keys(obj).map(el => {
                    let author = obj[el].author;
                    let comment = obj[el].comment;
                    let date = obj[el].date;
                    this.tableData.push({author, comment, date})
                    this.tableData.sort((a,b)=>b.date-a.date);
                })
            })
        }
    },
    mounted() {
       this.showComments();
    }
})