import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../utils/graphql/mutations/user/userRegister';
import {useOnState} from "../../utils/hooks/User/user.js"
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import { GET_USER } from '../../utils/graphql/querys/user/getUser';
import styles from "./registerComponent.module.css";
import { useQuery } from '@apollo/client';
const RegisterComponent = () => {
  const clientID = import.meta.env.VITE_GOOGLE_ID
  const facebookAppID = import.meta.env.VITE_FACEBOOK_APP_ID;
  
  const [userName, setUserName] = useState('');

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const [registerUser, { loading: registerLoading, error: registerError }] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      // Handle successful registration
    },
    onError: (error) => {
      console.error('Mutation error:', error);
    },
  });

  const { loading: userLoading, error: userError, data: userData, refetch: getUser } = useQuery(GET_USER, {
    skip: true,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // Call the registerUser mutation with values from the form
    registerUser({
      variables: {
        userName: userName,
        email: email,
        passwordHash: password,
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
<label className={styles.label} htmlFor="userName">
  User Name
</label>
<input
  className={styles.input}
  type="text"
  id="userName"
  name="userName"
  value={userName}
  onChange={handleUserNameChange}
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

        <label className={styles.label} htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          className={styles.input}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />

        <button type="submit" className={styles.button}>
          Register
        </button>

        {/* Display loading or error messages */}
        {registerLoading && <p>Loading...</p>}
        {registerError && <p className={styles.error}>{registerError.message}</p>}

        {/* Optionally, display user data */}
        {userData && (
          <div>
            <p>User ID: {userData.user.id}</p>
            <p>User Email: {userData.user.email}</p>
          </div>
        )}
         <div className={styles.google}>
          <GoogleLogin
           clientId={clientID}
           buttonText="Login with Google"
           onSuccess={onSuccess}
           onFailure={onFailure}
           cookiePolicy={'single_host_origin'}
          />
        </div>

        {/* Facebook Login */}
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
        <p className={styles.signin}>¿Already have an acount? <a href="/login"> LogIn!</a> </p> 

      </form>
    </div>
  );
};

export default RegisterComponent;