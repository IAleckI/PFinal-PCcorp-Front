import React from "react";
import Card from "../../components/card/card";
import { NavBar, Footer } from "../../components/Index";
import { useQuery } from "@apollo/client";
import { GET_ALL_FAVS } from "../../utils/graphql/querys/products/favs/getAllFavs";
import Style from "./wishlist.module.css";



const Wishlist = () => {
  const hardcodedUserId = "pepona@pepona.com";

  const { loading, error, data } = useQuery(GET_ALL_FAVS, {
    variables: { userId: hardcodedUserId },
  });

  if (loading) {
    return (
      <div>
        <NavBar />
        <h1>Wishlist</h1>
        <p>Cargando favoritos...</p>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <NavBar />
        <h1>Wishlist</h1>
        <p>Error al cargar favoritos: {error.message}</p>
        <Footer />
      </div>
    );
  }

  const favs = data.getAllFavs;

  if (favs.length === 0) {
    return (
      <div>
        <NavBar />
        <h1>Wishlist</h1>
        <p>No hay productos en la lista de deseos.</p>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>Wishlist</h1>
      <figure className={Style.Card}>
      {favs.map((product) => (
        <Card key={product.id} product={product} isFav={true} />
      ))}
      </figure>
      <Footer />
    </div>
  );
};

export default Wishlist;
