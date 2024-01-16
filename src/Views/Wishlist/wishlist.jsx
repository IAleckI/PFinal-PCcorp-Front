import React from "react";
import Card from "../../components/card/card";
import { NavBar, Footer } from "../../components/Index";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_FAVS } from "../../utils/graphql/querys/products/favs/getAllFavs";
import { DELETE_FAV } from "../../utils/graphql/querys/products/favs/deleteFav";
import Style from "./wishlist.module.css";
import { Link } from "react-router-dom";
import InterrogationPC from "../../Assets/Img/InterrogationPC.jpeg";
import { jwtDecode } from "jwt-decode";
import { Button } from "../../components/Index";

const Wishlist = () => {
  let email = '';
  try {
    const userInfo = localStorage.getItem('USER_INFO');
    console.log("user info:", userInfo, )
    if (userInfo) {
      const decodedToken = jwtDecode(userInfo);
      email = decodedToken.email;
    } else {
     
      email = ''; 
    }
  } catch (error) {
    console.error("Error decoding USER_INFO:", error);

    email = ''; 
  }

  const { loading, error, data, refetch } = useQuery(GET_ALL_FAVS, {
    variables: { userId: email },
  });

  const [deleteFavMutation] = useMutation(DELETE_FAV, {
    refetchQueries: [
      { query: GET_ALL_FAVS, variables: { userId: email } },
    ],
  });

  const handleDelete = async (productId) => {
    try {
      // Lógica para eliminar el producto de la lista de deseos
      await deleteFavMutation({
        variables: { userId: email, productId },
      });
      // Luego, refetch para actualizar la lista después de eliminar
      await refetch();
    } catch (error) {
      console.error("Error al eliminar de favoritos:", error);
    }
  };

  if (loading) {
    return (
      <div>
        <NavBar />
        <p>Cargando favoritos...</p>
        <Footer />
      </div>
    );
  }
  const favs = data?.getAllFavs;

  if (error) {
    return (
      <div>
        <NavBar />
        <p>Necesitas iniciar sesión para ver tus favoritos</p>
        <Button text="Iniciar sesión" onClick={() => (window.location.href = "/login")} />
        <Footer />
      </div>
    );
  }

  if (!favs || favs?.length === 0) {
    return (
      <div>
        <NavBar />
        <h2 className={Style.noFavsText}>
          Vaya, parece que aun no tienes favoritos,
        </h2>
        <h2 className={Style.noFavsText}> vuelve al catalogo para agregarlos.</h2>
        <img className={Style.imgConfused} src={InterrogationPC} alt="" />

       <Button Style text="Ir al catalogo" onClick={() => (window.location.href = "/catalogo")} />

        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className={Style.cardContainer}>
        {favs.map((product) => (
          <Card
            key={product.id}
            props={product}
            isWishlist={true}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
