import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFdcAvOjIbmpvKmuIz6SFOmY1ruBzuPO0",
  authDomain: "online-resume-builder-29426.firebaseapp.com",
  projectId: "online-resume-builder-29426",
  storageBucket: "online-resume-builder-29426.appspot.com",
  messagingSenderId: "462551668688",
  appId: "1:462551668688:web:e4ed5d4a7a1c4230d34bd5",
  measurementId: "G-7PTZE4KH6B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (location.pathname.endsWith("index.html")) {
      location.href = './Dashboard/index.html';
    }
  } else {
    if (location.pathname.endsWith("Dashboard/index.html")) {
      location.href = './index.html';
    }
  }
});

    
function clickSign(){
    let email = document.getElementById('Semail')
    let password = document.getElementById('Spass')
    let name = document.getElementById('Sname')
    
    if(email.value == "" || password.value == "" || name.value == ""){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!"
        });
    } else{
      createUserWithEmailAndPassword(auth, email.value, password.value, name.value)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          title: "Good job!",
          text: "Signed Up Successfully",
          icon: "success"
        }).then(() => {
          location.href = './Dashboard/index.html';
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
    }
}
window.clickSign = clickSign

function login() {
  let loginEmail = document.getElementById('l-email');
  let loginPassword = document.getElementById('l-pass');

  if (loginEmail.value === "" || loginPassword.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please complete all fields!"
    });
  } else {
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
      .then((userCredential) => {
        Swal.fire({
          title: "Good job!",
          text: "Logged In Successfully",
          icon: "success"
        }).then(() => {
          location.href = './Dashboard/index.html';
        });
      })
      .catch((error) => {
        console.log(error.code, error.message);
        Swal.fire({
          icon: "error",
          title: "Invalid Credentials OR Account Not found",
          text: "Please check your email and password."
        });
      });
  }
}
window.login = login

function toggleForm(formType) {
  const signupForm = document.getElementById('signup-form');
  const signinForm = document.getElementById('signin-form');
  const buttons = document.querySelectorAll('.sign');

  if (formType === 'signup') {
    signupForm.classList.remove('hidden');
    signinForm.classList.add('hidden');
    buttons[0].classList.add('active');
    buttons[1].classList.remove('active');
  } else {
    signupForm.classList.add('hidden');
    signinForm.classList.remove('hidden');
    buttons[0].classList.remove('active');
    buttons[1].classList.add('active');
  }
}
window.toggleForm = toggleForm