new Vue({
    el: '#vue-root',
    data: function data() {
        return {
            isLogged: false,
            loggedMail: '',
            dirty: false,
            isAssessment: false,
            oldWorks: [],
            works: [
                { site: 'daniyar', name: 'Сайт Данияра' },
                { site: 'daniyar2', name: 'Второй сайт Данияра - квест' },
                { site: 'daniyar4', name: '4 сайт Данияра ' },
                { site: 'anton', name: 'Сайт Антона' },
                { site: 'damir', name: 'Сайт Дамира' },
                { site: 'damir2', name: 'Второй сайт Дамира' },
                { site: 'amir', name: 'Сайт Амира' },
                { site: 'nazirbek', name: 'Сайт Назирбек' },
                { site: 'gdana', name: 'Сайт Жданы (2)' },
                { site: 'timur', name: 'Сайт Тимура' },
                { site: 'timur2', name: 'Сайт Тимура' },

                { site: 'dima', name: 'Сайт Дмитрия' },
                { site: 'amirLatypov', name: ' Сайт Латыпова Амира' },
                { site: 'kamil', name: ' Сайт Камиля' },

                { site: 'danil', name: 'Сайт Данила' },
                { site: 'danil2', name: 'Второй сайт Данила' },
                { site: 'elvina', name: 'Сайт Эльвины' },
                { site: 'rafael', name: 'Сайт Рафаэля' },
                { site: 'egor', name: 'Сайт Егора' }

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
        changeShow() {
            this.isAssessment = !this.isAssessment
            if (this.isAssessment) {
                this.works.sort((a, b) => {
                    return b.rating - a.rating
                })
            } else {
                this.works = JSON.parse(JSON.stringify(this.oldWorks))
            }
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

                    this.$forceUpdate();
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
        getAllVotes() {
            firebase.database().ref('voting').on('value', snap => {
                let votes = snap.val()

                let sites = {};
                Object.keys(votes).forEach(el => {
                    let node = votes[el].v;
                    node.forEach(item => {
                        let nameSite = item.site;
                        if (sites[nameSite]) {
                            let old = sites[nameSite];
                            sites[nameSite] = { count: old.count + 1, sum: old.sum + parseInt(item.vote) }
                        } else {
                            sites[nameSite] = { count: 1, sum: parseInt(item.vote) }
                        }
                    })
                })

                Object.keys(sites).forEach(el => {
                    let author = this.works.find(item => item.site === el)
                    author.rating = Math.ceil(sites[el].sum / sites[el].count * 10) / 10
                })
                this.oldWorks = JSON.parse(JSON.stringify(this.works))
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
        /*  this.getState()
         this.getAllVotes() */
    }
})