import React from 'react';
import styles from './login.module.css';

const Login = () => {
  return (
    <div className={styles.box}>
      <form  className={styles.formContainer} action="/login">
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input className={styles.input} type="email" id="email" name="email" />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input className={styles.input} type="password" id="password" name="password" />
        <button type="submit" className={styles.button}>
          Login
        </button> 
      </form>

    </div>
  );
};

export default Login;