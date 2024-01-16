import Style from './loginData.module.css';
import Input from '../../input/input';
import { useFormHook } from '../../../utils/hooks/network/login/useLogin';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Button/primaryButton/primaryButton';

export default function LoginData() {
  const { register, handleSubmit, onSubmit, errors } = useFormHook();
  const navigate = useNavigate();

  return (
    <form className={Style.login_form} onSubmit={handleSubmit(onSubmit)}>
      <Input info={register('email')} error={errors.email?.message} name={'Email address'} type={'email'} />
      <Input info={register('password')} error={errors.password?.message} name={'Password'} type={'password'} />
      <div className={Style.login_form_buttons}>
        <PrimaryButton type='button' text='Register' onClick={() => navigate('/register?registered=false')} />
        <PrimaryButton text='Login' type='submit' />
      </div>
    </form>
  );
}
