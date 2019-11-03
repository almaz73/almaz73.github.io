function init() {
    
    var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    // Setup Firebase
    var config = {
        apiKey: "AIzaSyBG-JTEatQGl7crnowv5fD7MuHSTpVwhpw",
        authDomain: "myexperiment-169dd.firebaseapp.com",
        databaseURL: "https://myexperiment-169dd.firebaseio.com",
        projectId: "myexperiment-169dd",
        storageBucket: "myexperiment-169dd.appspot.com",
        messagingSenderId: "382700959515",
        appId: "1:382700959515:web:b61b2a07505b9e712ac5be"
    }
    firebase.initializeApp(config)

    var usersRef = firebase.database().ref('users')
    console.log("%c # ","background: orange", "usersRef=", usersRef)

    // create Vue app
    var app = new Vue({
        // element to mount to
        el: '#app',
        // initial data
        data: {
            newUser: {
                name: 'qqq',
                email: 'qw@qq.rr'
            },
            users: null
        },
        // firebase binding
        // https://github.com/vuejs/vuefire
        firebase: {
            users: usersRef
        },
        // computed property for form validation state
        computed: {
            validation: function () {
                return {
                    name: !!this.newUser.name.trim(),
                    email: emailRE.test(this.newUser.email)
                }
            },
            isValid: function () {
                var validation = this.validation
                return Object.keys(validation).every(function (key) {
                    return validation[key]
                })
            }
        },
        // methods
        methods: {          
            addUser: function () {
                if (this.isValid) {
                    usersRef.push(this.newUser)
                    this.newUser.name = ''
                    this.newUser.email = ''
                }
            },
            removeUser: function (user) {
                usersRef.child(user['.key']).remove()
            }
        },
        mounted() {
            alert(2)
        }
    })

}