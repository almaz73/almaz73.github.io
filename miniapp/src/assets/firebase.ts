
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyBG-JTEatQGl7crnowv5fD7MuHSTpVwhpw",
//     authDomain: "myexperiment-169dd.firebaseapp.com",
//     databaseURL: "https://myexperiment-169dd.firebaseio.com",
//     projectId: "myexperiment-169dd",
//     storageBucket: "myexperiment-169dd.appspot.com",
//     messagingSenderId: "382700959515",
//     appId: "1:382700959515:web:b61b2a07505b9e712ac5be"
// };

var firebaseConfig = {
    apiKey: "AIzaSyBMpMVOZdxN-lWLiczbc9wcpTty7cC_6Xg",
    authDomain: "iamwaitingforyou-73.firebaseapp.com",
    databaseURL: "https://iamwaitingforyou-73-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "iamwaitingforyou-73",
    storageBucket: "iamwaitingforyou-73.firebasestorage.app",
    messagingSenderId: "576527778879",
    appId: "1:576527778879:web:059f06122df2b01d9a248a",
    measurementId: "G-62LMJM4Z24"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Получение ссылки на базу данных
const database = getDatabase(app);

export {database}