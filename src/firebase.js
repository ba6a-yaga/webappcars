import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCXcsY23mkoP4Hy_t7CBaGO85sMHJv4faI",
    authDomain: "cars-d572a.firebaseapp.com",
    databaseURL: "https://cars-d572a.firebaseio.com",
    projectId: "cars-d572a",
    storageBucket: "cars-d572a.appspot.com",
    messagingSenderId: "405494411865"
}

firebase.initializeApp(config)

export default firebase