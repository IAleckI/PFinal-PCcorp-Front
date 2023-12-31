import Style from './cardCard.module.css'
import { useAddProductToCart } from '../../utils/hooks/products/useMutationProducts'
import { useDecreaseProduct } from '../../utils/hooks/products/useMutationProducts'


export default function CardCard(props) {
    const { id, name, image, total, amount} = props.props
    const { addProductToCart, addLoading } = useAddProductToCart(id)
    const { decreaseProductoOfCart, loading } = useDecreaseProduct(id)

    return (
        <div className={Style.card}>
            <div className={Style.card_name}>
              <img src={image} alt={name} />
              <h2>{name}</h2>
            </div>
            <div className={Style.card_data}>
              <h3>{total}</h3>
              <div className={Style.card_amount}>
                {loading && <h3>Cargando...</h3>}
                <button onClick={decreaseProductoOfCart} >-</button>
                <h3>{amount}</h3>
                <button onClick={addProductToCart}>+</button>
                {addLoading && <h3>Cargando...</h3>}
              </div>
            </div>
        </div>
    )

}