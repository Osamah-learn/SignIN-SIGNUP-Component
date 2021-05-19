 import firebase from "firebase"
 
 
 
 
 
 
 
 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCFJfEtF-H3uN2DseE9A-ns2G0mXCKCWGA",
  authDomain: "login-4f11b.firebaseapp.com",
  projectId: "login-4f11b",
  storageBucket: "login-4f11b.appspot.com",
  messagingSenderId: "413601819356",
  appId: "1:413601819356:web:86ea2803c602d83253a219"
};
// Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);

export default fire;