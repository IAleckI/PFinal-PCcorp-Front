import Style from './cart.module.css'
import { NavBar, Footer } from '../../components/Index'
import CardListCart from '../../components/cardList/cardListCard/cardListCart'

export default function Cart() {
    return (
        <div className={Style.cart}>
            <NavBar/>
            <CardListCart/>
        </div>
    )

}