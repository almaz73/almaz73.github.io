new Vue({
    el: '#vue-root',
    data: function data() {
        return {
            isLogged: false,
            loggedMail: '',
            dirty: false,
            works: [
                { site: 'daniyar', name: 'Сайт Данияра', vote: '' },
                { site: 'anton', name: 'Сайт Антон' },
                { site: 'damir', name: 'Сайт Дамира' },
                { site: 'daniyar2', name: 'Второй сайт Данияра - квест' },
                { site: 'amir', name: 'Сайт Амира' },
                { site: 'nazirbek', name: 'Сайт Назирбек' },
                { site: 'gdana', name: 'Сайт Жданы' },
                { site: 'timur', name: 'Сайт Тимура' },
            ]
        };
    },

    methods: {
        logOut() {
            firebase.auth().signOut();
        },
        autorization() {
            let that = this;
            let firebase = app_firebase;
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    uid = user.uid;
                    that.getVotes()
                } else {
                    uid = null;
                    window.location.replace("login.html")
                }
            })
        },
        change() {
            this.dirty = true;
            this.$forceUpdate();
        },
        getVotes() {
            let author = this.loggedMail.replace('@', '').replace('.', '')
            firebase.database().ref('voting').child(author)
                .on('value', res => {
                    let obj = res.val()
                    this.works.map(el => {
                        let existElement = obj.v.find(item => item.site === el.site)
                        if (existElement) el.vote = existElement.vote;
                    })


                })
        },
        getState() {
            let that = this
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    that.loggedMail = user.email;
                    that.isLogged = true;
                    that.getVotes()
                } else {
                    that.loggedMail = null;
                    that.isLogged = false;
                }

            })
        },
        save() {
            let that = this;
            let obj = [];
            this.works.forEach(el => el.vote && obj.push({ site: el.site, vote: el.vote }))
            let author = this.loggedMail.replace('@', '').replace('.', '')

            firebase.database().ref('voting').child(author).set({ 'v': obj })
                .then(
                    res => {
                        console.log("%c # ", "background: green")
                        that.dirty = false;
                    },
                    err => console.log("%c # ", "background: red", "el=", err)
                )


        }
    },
    mounted() {
        this.getState()
    }
})