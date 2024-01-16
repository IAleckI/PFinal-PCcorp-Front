import React from 'react';
import Style from './configAccount.module.css';
import UpdateProduct from '../Update/update';
import { useEditUser } from '../../utils/hooks/User/editUser'
export default function ConfigAccount() {
  const  {register, handleSubmit,errors, onSubmit} = useEditUser()
  
    return (
    <div className={Style.configAccount}>
           <div className={Style.configAccount}>
            <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="newUsername">New Username:</label>
      <input type="text" id="newUsername" {...register('newUsername', { required: true })} />

      <label htmlFor="newPassword">New Password:</label>
      <input type="password" id="newPassword" {...register('newPassword', { required: true })} />

      <button type="submit">Save Changes</button>
    </form>
        </div>
     
      <UpdateProduct />
    </div>
  );
}