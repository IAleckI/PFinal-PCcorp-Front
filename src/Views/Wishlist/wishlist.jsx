import React, { useState } from 'react';
import { NavBar, Footer } from '../../components/Index.js';
import WishlistCard from '../../components/wishlistCard/wishlistcard.jsx';  // Ajusta la ruta según tu estructura

const Wishlist = () => {
  // Estado para almacenar las tarjetas en la wishlist
  const [wishlistProducts, setWishlistProducts] = useState([
    {
      id: 1,
      name: "Producto de Ejemplo",
      model: "Modelo de Ejemplo",
      price: 100,
      image: "https://www.comeros.com.ar/wp-content/uploads/2023/10/100-100000589WOF.jpg",
    },
    {
      id: 2,
      name: "Producto de Ejemplo 2",
      model: "Modelo de Ejemplo 2",
      price: 200,
      image: "https://www.venex.com.ar/products_images/1606929730_456y734567.jpg",
    },
    {
      id: 3,
      name: "Producto de Ejemplo 3",
      model: "Modelo de Ejemplo 3",
      price: 150,
      image: "https://cdnlaol.laanonimaonline.com/webapp_webp/images/productos/b/0000033000/33871.webp",
    },
    // Puedes agregar más productos de ejemplo aquí...
  ]);

    // Manejador de eliminación de tarjeta
    const handleRemoveCard = (productId) => {
      // Filtra las tarjetas, excluyendo la que tiene el ID a eliminar
      const updatedWishlist = wishlistProducts.filter(product => product.id !== productId);
      setWishlistProducts(updatedWishlist);
  
      // Muestra el alert después de eliminar el producto
      alert("El producto se eliminó correctamente.");
    };

  
    return (
      <div>
        <NavBar />
        <h2 style={{ marginLeft: '15px', marginTop: '35px', marginBottom: '35px', fontSize: '1.5rem' }}>Mis Favoritos</h2>
        <div>
          {wishlistProducts.map((product) => (
            <WishlistCard key={product.id} props={product} onRemove={() => handleRemoveCard(product.id)} />
          ))}
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Wishlist;