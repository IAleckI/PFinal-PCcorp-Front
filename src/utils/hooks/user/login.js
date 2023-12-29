
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

export const useOnState = ( clientID ) => {
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
}
return {onSuccess, onFailure}
}


