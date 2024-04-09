// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdrkHCnRgmmN68Rj7m8-6bfutn5oVWunA",
    authDomain: "b9-a9-real-state-538e0.firebaseapp.com",
    projectId: "b9-a9-real-state-538e0",
    storageBucket: "b9-a9-real-state-538e0.appspot.com",
    messagingSenderId: "16266979324",
    appId: "1:16266979324:web:57b3672e9e00648865b479"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
 export default auth ;