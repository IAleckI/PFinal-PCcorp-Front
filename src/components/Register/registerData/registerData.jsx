import Style from './RegisterData.module.css'
import Input from '../../input/input'
import { useFormRegister } from '../../../utils/hooks/network/register/useRegister'
import PrimaryButton from '../../Button/primaryButton/primaryButton'
import { useNavigate } from 'react-router-dom'

export default function RegisterData() {
    const { register, handleSubmit, onSubmit, errors } = useFormRegister()
    const navigate = useNavigate()

    return (
        <form className={Style.login_form} onSubmit={handleSubmit(onSubmit)}>
            <Input info={register("userName")} error={errors.userName?.message} name={ "User name"}/>
            <Input info={register('email')} error={errors.email?.message} name={'Email adress'} type={'email'}/>
            <Input info={register('repeatEmail')} error={errors.repeatEmail?.message} name={'Repeat email'} type={'email'}/>
           
            <Input info={register('password')} error={errors.password?.message} name={'Password'} type={'password'}/>
            <Input info={register('repeatPassword')} error={errors.repeatPassword?.message} name={'Password'} type={'password'}/>
            <div className={Style.login_form_buttons}>
                <PrimaryButton type='submit' text='Register'  />
              
            </div>
        </form>
    )
}