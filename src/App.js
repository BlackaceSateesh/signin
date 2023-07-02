import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { gsap } from "gsap";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAGavqhEgnKdm8acAtQPdSZRvUzpaErcy4",
  authDomain: "loginregister-84927.firebaseapp.com",
  projectId: "loginregister-84927",
  storageBucket: "loginregister-84927.appspot.com",
  messagingSenderId: "52476715201",
  appId: "1:52476715201:web:ae6268ef4a916ec2f9b440"
};

const app = initializeApp(firebaseConfig);
// if (initializeApp.apps.length <0 ){
//   initializeApp.initializeApp(firebaseConfig);
// }

function App() {

  const [register, setRegister]= useState({
    name: "",
    email:"",
    username:"",
    password:"",
  });

  const signUpEventHandler = () =>{
alert()
  }
  const registerData = (event) =>{
    setRegister(event.target.value)
  }
  console.log(register)

  return (
    <>
      <div className="app-main">
        <div className="container">
    
          <Login />
          <Register registerData={registerData} signUpEventHandler={signUpEventHandler} />
        </div>
      </div>
    </>
  );
}

export default App;
