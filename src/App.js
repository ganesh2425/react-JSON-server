import React, { Component } from 'react'
import firebase from './firebase';
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

export class App extends Component {
  handleChange=(e)=>{
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }
  configureCaptcha =()=>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit =(e)=>{
    e.preventDefault();
    this.configureCaptcha()
    const phoneNumber = this.state.mobile
    console.log(phoneNumber)
    
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log("OTP has been sent")
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log("SMS not sent")
    });
  }
  render() {
    return (
      <>
      <h2>Login Form</h2>
      <form onSubmit={this.onSignInSubmit}>
        <div id='sign-in-button'></div>
      <input type='number' name='mobile' placeholder='Mobile number' required onChange={this.handleChange}/>
      <button type='submit'>Submit</button>
      </form>

      <h2>OTP Form</h2>
      <form>
      <input type='number' name='otp' placeholder='OTP number' required onChange={this.handleChange}/>
      <button type='submit'>Submit</button>
      </form> 
      </>
    )
  }
}

export default App
