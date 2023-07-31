import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp ({

apiKey: "aAIzaSyBXOXiD0ojuRBw3mk-P8N1D8vLgGDhrJ6M",
authDomain: "reactproject-9c9b5.firebaseapp.com",
projectId: "reactproject-9c9b5",
storageBucket: "reactproject-9c9b5.appspot.com",
messagingSenderId: "853297079847",
appId: "a1:853297079847:web:ac17bdf28bcbf49a36d002",

});

// Firebase storage reference
const storage = getStorage(app);
export default storage;