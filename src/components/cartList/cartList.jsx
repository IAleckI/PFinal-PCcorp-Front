import Style from './cartList.module.css'
import CheckOut from '../checkout/checkout'
import CardCard from '../cartCards/cardCard'
import { useGetProducts } from '../../utils/hooks/products/useMutationProducts'

export default function CartList() {
  const { products, loading, error } = useGetProducts();
  console.log("products:", products);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
      <div className={Style.cartList_container}>
          <div className={Style.cartList}>
              <h1>Carrito</h1>
              {products.map(p => (
                  <CardCard key={p.id} props={p} />
              ))}
          </div>
          <CheckOut cartProducts={products} />
      </div>
  );
}