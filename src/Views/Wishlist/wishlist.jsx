import React from "react";
import Card from "../../components/card/card";
import { NavBar, Footer } from '../../components/Index'
import { useQuery } from "@apollo/client";
import { GET_ALL_FAVS } from "../../utils/graphql/querys/products/favs/getAllFavs";
import Style from "./wishlist.module.css"

const Wishlist = () => {
  const hardcodedUserId = "pepona@pepona.com";

  const { loading, error, data, refetch } = useQuery(GET_ALL_FAVS, {
    variables: { userId: hardcodedUserId },
  });

  const handleDelete = (productId) => {
    // Actualiza la lista de favoritos después de la eliminación
    refetch();
  };
  
  if (loading) {
    return (
      <div>
        <NavBar/>
        <h1>Wishlist</h1>
        <p>Cargando favoritos...</p>
        <Footer/>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <NavBar/>
        <h1>Wishlist</h1>
        <p>Error al cargar favoritos: {error.message}</p>
        <Footer/>
      </div>
    );
  }

  const favs = data.getAllFavs;

  return (
    <div>
      <NavBar/>
      <h1>Wishlist</h1>
      <div className={Style.cardContainer}>
        {favs.map((product) => (
         <Card
         key={product.id}
         props={product}
         isFav={true}
         isWishlist={true} // Pasa la prop isWishlist
         onDelete={handleDelete}
       />
        ))}
      </div>
      <Footer/>
    </div>
  );
}
export default Wishlist;
