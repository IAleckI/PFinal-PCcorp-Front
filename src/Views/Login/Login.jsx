import React, { useState } from 'react';
import styles from "./login.module.css";
import { GoogleLogin, responseGoogle } from 'react-google-login';

const Login = () => {
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
        
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      /></div>

      </form>
    </div>
  );
};

export default Login;