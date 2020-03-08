(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyBG-JTEatQGl7crnowv5fD7MuHSTpVwhpw",
        authDomain: "myexperiment-169dd.firebaseapp.com",
        databaseURL: "https://myexperiment-169dd.firebaseio.com",
        projectId: "myexperiment-169dd",
        storageBucket: "myexperiment-169dd.appspot.com",
        messagingSenderId: "382700959515",
        appId: "1:382700959515:web:b61b2a07505b9e712ac5be"
    };
    firebase.initializeApp(firebaseConfig);
})();

firebase.auth().onAuthStateChanged(function (user) {
    let signInDiv = document.querySelector('#displayName');
    let regDiv = document.querySelector('#withoutRegister');
    document.querySelector('#displayName');
    if (user) {
        uid = user.uid;
        window.user = user;
        document.querySelector('#displayName a').innerHTML = user.displayName;
        if (signInDiv) signInDiv.style.display = 'block';
        if (regDiv) regDiv.style.display = 'none';
    } else {
        uid = null;
        if (signInDiv) signInDiv.style.display = 'none';
        if (regDiv) regDiv.style.display = 'block';
    }
});

function logOut() {
    firebase.auth().signOut();
}

function getData() {
    console.log("%c # ","background: orange", "4444")
    console.log("%c # ","background: orange", " firebase.database()=", firebase.database())
    console.log("%c # ","background: orange", "firebase.database().ref('voting')", firebase.database().ref('voting'))
    console.log("%c # ","background: orange", "firebase.database().ref('voting').child(author)", firebase.database().ref('voting').child(author))
    firebase.database().ref('voting').child(author)
        .on('value', res => {
            console.log("res", res)
        })
}

function sapeCompilation(compilation){
    console.log("2222 compilation=", compilation)
    console.log("%c # ","background: red", "firebase=", firebase)

    firebase.database().ref('olimpiada').child(author).set({ 'v': compilation })
        .then(
            res => {
                console.log("%c # ", "background: green")
                that.dirty = false;
            },
            err => console.log("%c # ", "background: red", "el=", err)
        )
}