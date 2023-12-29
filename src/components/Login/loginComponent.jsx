import React, { useState } from 'react';
import styles from "./loginComponent.module.css";
import { GoogleLogin } from 'react-google-login';

import {useOnState} from "../../utils/hooks/user/login.js"

const Login = () => {
  const clientID = import.meta.env.VITE_GOOGLE_ID
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFormSubmit =  (e) => {
    e.preventDefault();
  
   
  };

  const {onSuccess, onFailure} = useOnState(clientID)

  return (


    <div className={styles.box}>

      
      <form className={styles.formContainer} onSubmit={handleFormSubmit}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit" className={styles.button}>
          Login
        </button>
        <div className={styles.google}>
        <GoogleLogin
        
        clientId={clientID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      /></div>

      </form>
      <button onClick={() => window.history.back()}>go back
      </button>
    </div>
  );
};

export default Login;