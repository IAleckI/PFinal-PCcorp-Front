import styles from "./loginComponent.module.css";
import { GoogleLogin } from 'react-google-login';
import {useOnState} from "../../utils/hooks/User/user.js"
import { useState } from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useMutation, useQuery } from '@apollo/client';
import { LOGIN_USER } from '../../utils/graphql/mutations/user/userLogin.js';
import { GET_USER } from '../../utils/graphql/querys/user/getUser.js';






const LoginComponent = () => {
  const clientID = import.meta.env.VITE_GOOGLE_ID
  const facebookAppID = import.meta.env.VITE_FACEBOOK_APP_ID;
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  

 

 
// Example of a mutation
const [loginUser, { loading: loginLoading, error: loginError }] = useMutation(LOGIN_USER, {
  onCompleted: async (data) => {
    // Handle successful login
    // Fetch user data after successful login
    try {
      await getUser();
    } catch (error) {
      console.error("Error fetching user data after login:", error);
    }
  },
});

// Example of a query
const { loading: userLoading, error: userError, data: userData, refetch: getUser } = useQuery(GET_USER, {
  skip: true, // Skip the query by default
});

const handleFormSubmit = (e) => {
  e.preventDefault();

  // Call the login mutation
  loginUser({
    variables: {
      email,
      password,
    },
  });
};
  
  const {onSuccess, onFailure, facebookResponse} = useOnState(clientID)

  
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
       <div className={styles.facebook}>
          <FacebookLogin
            appId={facebookAppID}
            autoLoad={false}
            fields="name,email,picture"
            callback={facebookResponse}
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className={styles.facebookButton}>
                Login with Facebook
              </button>
            )}
          />
        <GoogleLogin
        
        clientId={clientID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      /></div>
       <div className={styles.facebook}>
          <FacebookLogin
            appId={facebookAppID}
            autoLoad={false}
            fields="name,email,picture"
            callback={facebookResponse}
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className={styles.facebookButton}>
                Login with Facebook
              </button>
            )}
          /> 
        </div>
       <p className={styles.signin}>¿You dont have an account yet? <a href="/signin"> Sign In!</a> </p> 
       
      <button className={styles.button} onClick={() => window.history.back()}>go back</button>
      </form>
    
    </div>
  );
};

export default LoginComponent;
