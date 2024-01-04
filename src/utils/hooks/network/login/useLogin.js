import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../../validates/userSchema';
import { useLazyQuery } from '@apollo/client';
import { LOGIN_USER } from '../../../graphql/querys/user/userLogin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useFormHook = () => {
    const [getToken] = useLazyQuery(LOGIN_USER);
    const [remind, setRemind] = useState(false)
    const { register, handleSubmit, formState: { errors }, setError } = useForm({ 
        resolver: zodResolver(loginSchema),
    });
    const navigate = useNavigate()

    async function onSubmit(data) {
        const { email, password } = data;
            console.log("email:", email, "password:", password)
        
        try {
            const result = await getToken({ variables: {
                email: email,
                passwordHash: password
           
            } });
             console.log(result)
            if (result?.error?.message) throw new Error(result.error.message)
            
            if (remind) {
                localStorage.setItem('USER_INFO', result.data.getUserLogin.token)
            } else {
                sessionStorage.setItem('USER_INFO', result.data.getUserLogin.token)
            }
            navigate('/')
        } catch (error) {
            console.log(error)
            setError('password', { message: error.message })
        }
    }

   
    return { register, handleSubmit, onSubmit, errors, setRemind, remind }
}