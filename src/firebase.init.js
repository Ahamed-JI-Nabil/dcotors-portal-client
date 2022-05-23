// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1F01LDpDpYWMiP-Q0gjfSiiT6l6RWbXg",
    authDomain: "doctors-protal-de337.firebaseapp.com",
    projectId: "doctors-protal-de337",
    storageBucket: "doctors-protal-de337.appspot.com",
    messagingSenderId: "95340760381",
    appId: "1:95340760381:web:5bb25330400abe7f810954"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth