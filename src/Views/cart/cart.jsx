import Style from './cart.module.css'
import { NavBar, Footer } from '../../components/Index'
import {CartList} from '../../components/Index'

export default function Cart() {
    return (
        <div className={Style.cart}>
            <NavBar/>
            <CartList/>
        </div>
    )

}