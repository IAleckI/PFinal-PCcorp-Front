import React, { useEffect } from 'react';
import Style from './configAccount.module.css';
import UpdateProduct from '../Update/update';
import { useEditUser } from '../../utils/hooks/User/editUser'
import { useLazyQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../../utils/graphql/querys/user/getUsersById';
import { jwtDecode } from 'jwt-decode';


export default function ConfigAccount() {
  const  {register, handleSubmit,errors, onSubmit} = useEditUser()
                                            
    const [getUserById] = useLazyQuery(GET_USER_BY_ID)
     const token = localStorage.getItem("USER_INFO")
     const email =  jwtDecode (token)    
     const getProfile = async ()=>{
        const profile = await getUserById({
            variables: { id: email.email } 
          })

        console.log(profile.data?.getUserById)

     }
     useEffect(() => {
        
        getProfile();
      }, [])




  
  return (
    <div className={Style.configAccount}>
           <div className={Style.configAccount}>
           
            <form className={Style.formTemplate} onSubmit={handleSubmit(onSubmit)}>
      <label className={Style.formLable} htmlFor="newUsername">New Username:</label>
      <input className={Style.formInput} type="text" id="newUsername" {...register('newUsername', { required: true })} />

      <label className={Style.formLable} htmlFor="newPassword">New Password:</label>
      <input  className={Style.formInput} type="password" id="newPassword" {...register('newPassword', { required: true })} />

      <button className={Style.formButton} type="submit">Save Changes</button>
    </form>
        </div>
     
      <UpdateProduct />
    </div>
  );
}