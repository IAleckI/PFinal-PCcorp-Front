import Style from './checkout.module.css'
import { usePayment } from '../../utils/hooks/products/usePayment'

export default function CheckOut({ cartProducts }) {
    const { loading, paymentId, result } = usePayment();

    if ( !paymentId || paymentId.length === 0) {
        return <p>Cargando...</p>;
    }

    const price = result.data.getTotalPrice * 0.1 / 100;

    return (
        <div className={Style.checkout}>
            <h2 className={Style.tittle}>Resumen de compra</h2>
            <div className={Style.checkout_info}>
                <h3>Productos ({cartProducts.length})</h3>
                <h3>$ {result.data.getTotalPrice.toLocaleString('es-ES', { maximumFractionDigits: 0 })}</h3>
            </div>
            <div className={Style.checkout_info}>
                <h3>Envio</h3>
                <h3>$ {Math.round (price)}</h3>
            </div>
            <div className={Style.checkout_info}>
                <h2>Total</h2>
                <h2>$ {Math.floor(result.data.getTotalPrice + price).toLocaleString('es-ES', { maximumFractionDigits: 0 })}</h2>
            </div>
            {loading
                ? <a href='#' className={Style.button_pay_d}>Continuar compra</a>
                : <a href={paymentId} target='_blank' rel="noreferrer" className={Style.button_pay}>Continuar compra</a>}
        </div>
    );
}