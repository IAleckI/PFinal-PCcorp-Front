import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_PRODUCT_BY_ID } from '../../utils/graphql/querys/products/getProductById'; 

const ProductDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar el producto.</p>;

  const { getProductById } = data;

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>ID: {getProductById.id}</p>
      <p>Nombre: {getProductById.name}</p>
      <p>Precio: {getProductById.price}</p>
      <p>Modelo: {getProductById.model}</p>
    </div>
  );
};

export default ProductDetail;