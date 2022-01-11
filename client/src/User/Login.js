import {useState } from "react"
import {useRef} from 'react'
import { sendLogin } from "../EventAPI";
import PropTypes from 'prop-types';

function Login({setToken}) {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const handleSubmit = (event) => 
    {
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value

        sendLogin( enteredEmail, enteredPassword).then(response => setToken(response.token))

        event.preventDefault()
    }

return (
     <form onSubmit={handleSubmit}>
         Efetuar LOGIN
        <label>
          Email:
          <input type="text" id="Email" ref={emailInputRef}/>
        </label>
        <label>
          Password:
          <input type="text" id="Password" ref={passwordInputRef}/>
        </label>
        <input type="submit" value="Submit" />
     </form>
    );
}
  

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };

export default Login;