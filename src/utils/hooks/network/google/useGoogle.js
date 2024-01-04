import { gapi } from "gapi-script";
import { useEffect } from "react";


export const useGoogle = () => {
    const clientId = import.meta.env.VITE_GOOGLE_ID
    
    useEffect(() => {
        const start = () => {
            gapi.auth2.init({ 
                clientId: clientId,
            })
        }

        gapi.load('client:auth2', start)
    },[])

    return clientId
}