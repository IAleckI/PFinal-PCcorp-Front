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
        try {
            const result = await getToken({ variables: {
                email: data.email,
                passwordHash: data.password
            } });
    
            if (result?.error?.message) throw new Error(result.error.message);
    
            const userInfo = result.data.getUserLogin.token;
            localStorage.setItem('USER_INFO', userInfo);
            
            swal({
                title: "Login!",
                text: "Has iniciado sesión",
                icon: "success",
                button: "Volver",
                timer: 1500
            }).then(() => {
                navigate('/');
                window.location.reload();
            });
        } catch (error) {
            setError('password', { message: error.message });
        }
    }
    return { register, handleSubmit, onSubmit, errors, setRemind, remind }
}