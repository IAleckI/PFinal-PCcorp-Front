<<<<<<< HEAD
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

export const useOnState = ( clientID) => {

=======

import { gapi } from 'gapi-script';
import { useEffect } from 'react';

export const useOnState = ( clientID ) => {
>>>>>>> 3e2959cf5da0b6bea5f52c48aa59687ce3dce3f3
    useEffect(()=>{
    const start =() => {
    gapi.auth2.init({
      clientID : clientID
    })
    gapi.load("client:auth2", start)
    }
    
    }, [])
    
    const onSuccess =(response)=>{
console.log(response)
}

const onFailure = () =>{
console.log("something went wrong")
<<<<<<< HEAD



}
const facebookResponse = (response) => {
  if (response.status === "connected") {
     alert("login successful")

  } else if (response.status === "not_authorized") {
    // The user is logged in to Facebook but has not authorized your app
   alert("Facebook login failed. User did not authorize the app.");

  } else {
    // The user is not logged in to Facebook
    alert("Facebook login failed. User is not logged in.");
  }
};
return {onSuccess, onFailure, facebookResponse}
}
=======
}
return {onSuccess, onFailure}
}


>>>>>>> 3e2959cf5da0b6bea5f52c48aa59687ce3dce3f3
