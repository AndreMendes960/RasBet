import {useState } from "react"
import {useRef} from 'react'
import { sendRegistar } from "../EventAPI";


function Registar() {

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const handleSubmit = (event) => 
    {
        const enteredName = nameInputRef.current.value
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value
        console.log(enteredName)

        sendRegistar(enteredName, enteredEmail, enteredPassword)

        event.preventDefault()
    }

return (
     <form onSubmit={handleSubmit}>
         EFETUAR REGISTO
         <label>
          Name:
          <input type="text" id="name" ref={nameInputRef}/>
        </label>
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
  
export default Registar;
  