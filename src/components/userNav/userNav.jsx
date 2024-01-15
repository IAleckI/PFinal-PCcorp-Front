import { ThirdButton } from "../Index";
import Style from './userNav.module.css'

export default function UserNav () {
    return (
        <div className={Style.usernav}>
            <ThirdButton text={'Perfil'} type={'button'} navigate={'/account/profile'}/>
            <ThirdButton text={'Pedidos'} type={'button'} navigate={'/account/orders'}/>
            <ThirdButton text={'Configuracion'} type={'button'} navigate={'/account/config'}/>
        </div>
    )
}