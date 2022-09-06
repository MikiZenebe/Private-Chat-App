import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCzqTTOzO-I2Dq3sIj5oRg9LXAMLO0MHB8",
    authDomain: "mikchat-f2b06.firebaseapp.com",
    projectId: "mikchat-f2b06",
    storageBucket: "mikchat-f2b06.appspot.com",
    messagingSenderId: "672688447304",
    appId: "1:672688447304:web:ac9378d606855a48879d7d",
  })
  .auth();
