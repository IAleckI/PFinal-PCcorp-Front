import Style from './cardCard.module.css'
import { useAddProductToCart } from '../../utils/hooks/products/useMutationProducts'
import { useDecreaseProduct } from '../../utils/hooks/products/useMutationProducts'


export default function CardCard(props) {
    const { id, name, image, total, amount} = props.props
    const { addProductToCart } = useAddProductToCart(id)
    const { decreaseProductoOfCart } = useDecreaseProduct(id)

    return (
        <div className={Style.card}>
            <div className={Style.card_name}>
              <img src={image} alt={name} />
              <h2>{name}</h2>
            </div>
            <div className={Style.card_data}>
            <h3 className={Style.preciocart}> ${total.toLocaleString('es-ES', { maximumFractionDigits: 0 })}</h3>
              <div className={Style.card_amount}>
                <button onClick={decreaseProductoOfCart} >-</button>
                <h3>{amount}</h3>
                <button onClick={addProductToCart}>+</button>
                
              </div>
            </div>
        </div>
    )

}