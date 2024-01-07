import { useEffect, useState } from "react";

export default function GetToken () {
    const [access, setAccess] = useState(true)
    const token = window.localStorage.getItem('USER_INFO') || window.sessionStorage.getItem('USER_INFO')
    useEffect(() => {
        if (token === null || token === undefined) setAccess(false)
        else {
            const tokenPayload = JSON.parse(atob(token.split('.')[1]));
            const tokenExpirado = Date.now() > tokenPayload.exp * 1000;
            if (tokenExpirado) setAccess(false)
        }
    },[token])

    return access
}