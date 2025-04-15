import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDFdcAvOjIbmpvKmuIz6SFOmY1ruBzuPO0",
    authDomain: "online-resume-builder-29426.firebaseapp.com",
    projectId: "online-resume-builder-29426",
    storageBucket: "online-resume-builder-29426.firebasestorage.app",
    messagingSenderId: "462551668688",
    appId: "1:462551668688:web:e4ed5d4a7a1c4230d34bd5",
    measurementId: "G-7PTZE4KH6B"
};

const app = initializeApp(firebaseConfig);

let dateP = document.getElementById('date')
const date = new Date()

const day = date.getDate()
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const month = monthNames[date.getMonth()]
const year = date.getFullYear()

dateP.innerText = `${day} ${month} ${year}`;