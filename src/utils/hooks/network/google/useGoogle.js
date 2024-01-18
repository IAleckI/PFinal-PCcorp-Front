import { gapi } from "gapi-script";
import { useEffect } from "react";
import { NETWORK_LOGIN } from "../../../graphql/querys/user/userNetworkLogin";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const useGoogle = () => {
    const clientId = "1071609619402-4eavh491h2ak8v4lqu0eqq02osfuq8ai.apps.googleusercontent.com"
    const [getUserNetworkLogin]= useLazyQuery(NETWORK_LOGIN)
   const navigate = useNavigate()
    
    useEffect(() => {
        const start = () => {
            gapi.auth2.init({ 
                clientId: clientId,
            })
        }

        gapi.load('client:auth2', start)
    },[])

    async function onSuccess (res) {
        try {
          const result =  await getUserNetworkLogin({
            variables: {
                email: res.profileObj.email,
                userName: res.profileObj.name,
            }
        })
        localStorage.setItem('USER_IMAGE', res.profileObj.imageUrl)
        if (result?.error?.message) throw new Error(result.error.message);
        
        const userInfo = result.data.getUserNetworkLogin
        localStorage.setItem('USER_INFO', userInfo);
        
        swal({
            title: "Login!",
            text: "Has iniciado sesion",
            icon: "success",
            button: "Volver",
            timer: 1500
        }). then(() => {
            navigate('/')
            refetch();

        })
    } catch (error) {
         console.log(error) ;
        }
        
        console.log(res);
    }

    function onFailure (err) {
        console.log(err);
    }

    return {onSuccess, onFailure, clientId}
}