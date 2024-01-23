import React from 'react';
import Style from './configAccount.module.css';
import swal from 'sweetalert';
import { useEditUser } from '../../utils/hooks/User/editUser';
import { useNavigate } from 'react-router-dom';

export default function ConfigAccount() {
  const { register, handleSubmit, errors, onSubmit } = useEditUser();
  const navigate = useNavigate();

  const showSuccessAlert = () => {
    swal({
      title: 'Cambios guardados!',
      text: 'Los cambios se guardaron exitosamente.',
      icon: 'success',
      timer: 1800,
    });


    setTimeout(() => {
      navigate("/account/config");


      window.location.reload();
    }, 1800);
  };

  return (
    <div className={Style.configAccount}>
      <div className={Style.configAccount}>
        <form className={Style.formTemplate} onSubmit={handleSubmit((data) => { onSubmit(data); showSuccessAlert(); })}>
          <label className={Style.formLable} htmlFor="newUsername">
            New Username:
          </label>
          <input className={Style.formInput} type="text" id="newUsername" {...register('newUserName', { required: true, minLength: 3 })} />
          {errors.newUserName && errors.newUserName.type === 'minLength' && (
    <span className={Style.error}>Nombre de ususario muy corto(minimo 3 caracteres!)</span>
  )}
          <label className={Style.formLable} htmlFor="newPassword">
            New Password:
          </label>
          <input className={Style.formInput} type="password" id="newPassword" {...register('newPassword', { required: true, minLength: 8 })} />
          {errors.newPassword && errors.newPassword.type === 'minLength' && (
    <span className={Style.error}>Contraseña muy corta (minimo 8 caracteres)</span>
  )}
          <button className={Style.formButton} type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
