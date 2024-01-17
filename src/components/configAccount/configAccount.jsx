import React from 'react';
import Style from './configAccount.module.css';
import swal from 'sweetalert';
import { useEditUser } from '../../utils/hooks/User/editUser';

export default function ConfigAccount() {
  const { register, handleSubmit, errors, onSubmit } = useEditUser();


  const showSuccessAlert = () => {
    swal({
      title: 'Cambios guardados!',
      text: 'Los cambios se guardaron exitosamente.',
      icon: 'success',
      button: 'Volver',
      timer: 1500,
    });
  };

  return (
    <div className={Style.configAccount}>
      <div className={Style.configAccount}>
        <form className={Style.formTemplate} onSubmit={handleSubmit((data) => { onSubmit(data); showSuccessAlert(); })}>
          <label className={Style.formLable} htmlFor="newUsername">
            New Username:
          </label>
          <input className={Style.formInput} type="text" id="newUsername" {...register('newUserName', { required: true })} />

          <label className={Style.formLable} htmlFor="newPassword">
            New Password:
          </label>
          <input className={Style.formInput} type="password" id="newPassword" {...register('newPassword', { required: true })} />

          <button className={Style.formButton} type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
