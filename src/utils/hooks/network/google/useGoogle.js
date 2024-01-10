import { gapi } from "gapi-script";
import { useEffect } from "react";


export const useGoogle = () => {
    const clientId = "1071609619402-4eavh491h2ak8v4lqu0eqq02osfuq8ai.apps.googleusercontent.com"
    
    useEffect(() => {
        const start = () => {
            gapi.auth2.init({ 
                clientId: clientId,
            })
        }

        gapi.load('client:auth2', start)
    },[])

    function onSuccess (res) {
        console.log(res);
    }

    function onFailure (err) {
        console.log(err);
    }

    return {onSuccess, onFailure, clientId}
}