import Style from './checkout.module.css'
import { usePayment } from '../../utils/hooks/products/usePayment'

export default function CheckOut () {
    const { loading, paymentId, result, products } = usePayment()
    
    if (result.loading || paymentId.length === 0) return <p>Cargando...</p>
    const price = result.data.getTotalPrice * 0.1 / 100

    return (
        <div className={Style.checkout}>
           <h2 className={Style.tittle}>Resumen de compra</h2>
            <div className={Style.checkout_info}>
                <h3>Productos ({products.length})</h3>
                <h3>$ {result.data.getTotalPrice}</h3>
            </div>
            <div className={Style.checkout_info}>
                <h3>Envio</h3>
                <h3>$ {price}</h3>
            </div>
           <div className={Style.checkout_info}>
             <h2>total</h2>
             <h2>$ {result.data.getTotalPrice + price}</h2>
           </div>

           {loading 
           ? <a href='#' className={Style.button_pay_d}>Continuar compra</a>
           : <a href={paymentId} target='_blank' rel="noreferrer" className={Style.button_pay}>Continuar compra</a>}
        </div>
    )
}