import React from "react";
import Card from "../../components/card/card";
import { NavBar, Footer } from "../../components/Index";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_FAVS } from "../../utils/graphql/querys/products/favs/getAllFavs";
import { DELETE_FAV } from "../../utils/graphql/querys/products/favs/deleteFav";
import Style from "./wishlist.module.css";
import { Link } from "react-router-dom";
import InterrogationPC from "../../Assets/Img/InterrogationPC.jpeg";

const Wishlist = () => {
  let email = '';
  try {
    const userInfo = localStorage.getItem('USER_INFO');
    console.log("user info:", userInfo, )
    if (userInfo) {
      const decodedToken = jwtDecode(userInfo);
      email = decodedToken.email;
    } else {
      console.warn("User is not logged in. USER_INFO not found in localStorage.");
      
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
      { query: GET_ALL_FAVS, variables: { userId: hardcodedUserId } },
    ],
  });

  const handleDelete = async (productId) => {
    try {
      // Lógica para eliminar el producto de la lista de deseos
      await deleteFavMutation({
        variables: { userId: hardcodedUserId, productId },
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
  const favs = data.getAllFavs;

  if (error) {
    return (
      <div>
        <NavBar />
        <p>Error al cargar favoritos: {error.message}</p>
        <Footer />
      </div>
    );
  }

  if (!favs || favs.length === 0) {
    return (
      <div>
        <NavBar />
        <p className={Style.noFavsText}>
          Vaya, parece que aun no tienes favoritos,
        </p>
        <p className={Style.noFavsText}> vuelve al catalogo para agregarlos.</p>
        <img className={Style.imgConfused} src={InterrogationPC} alt="" />

        <button className={Style.noFavsButton}>
          {" "}
          <Link className={Style.link} to="/catalogo">
            Volver al catalogo{" "}
          </Link>
        </button>

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
