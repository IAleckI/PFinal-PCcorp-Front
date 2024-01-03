import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../../validates/userSchema';
import { useMutation } from '@apollo/client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CREATE_USER } from '../../../graphql/mutations/user/createUser';

export const useFormRegister = () => {
    const [createUser] = useMutation(CREATE_USER);
    const [remind, setRemind] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm({ 
      resolver: zodResolver(registerSchema),
    });
    const navigate = useNavigate();
  
    const onSubmit = async (data) => {
        const { email, password, repeatPassword, username } = data;
      
        if (password !== repeatPassword) {
          setError('repeatPassword', { message: 'Passwords do not match' });
          return;
        }
      
        try {
          const result = await createUser({
            variables: { email, passwordHash: password, username },
          });
      console.log(result)
          if (result?.errors) {
            console.error(result.errors);
            throw new Error('GraphQL Error');
          }
  
        if (remind) {
          localStorage.setItem('USER_INFO', result.data.getUserLogin.token);
        } else {
          sessionStorage.setItem('USER_INFO', result.data.getUserLogin.token);
        }
  
        navigate('/');
    } catch (error) {
        console.error(error);
        setError('password', { message: error.message });
      }
    };
  
    return { register, handleSubmit, watch, onSubmit, errors, setRemind, remind };
  };
  
