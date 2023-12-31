import React from "react";
import Card from "../../components/card/card";
import { NavBar, Footer } from '../../components/Index'
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_FAVS } from "../../utils/graphql/querys/products/favs/getAllFavs";
import { DELETE_FAV } from "../../utils/graphql/querys/products/favs/deleteFav";
import Style from "./wishlist.module.css"
import { jwtDecode } from "jwt-decode";

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
    refetchQueries: [{ query: GET_ALL_FAVS, variables: { userId: email } }],
  });

  const handleDelete = async (productId) => {
    try {
      // Lógica para eliminar el producto de la lista de deseos
      await deleteFavMutation({ variables: { userId: email, productId } });
      // Luego, refetch para actualizar la lista después de eliminar
      await refetch();
    } catch (error) {
      console.error("Error al eliminar de favoritos:", error);
    }
  };

  if (loading) {
    return (
      <div>
        <NavBar/>
        <p>Cargando favoritos...</p>
        <Footer/>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <NavBar/>
        <p>Error al cargar favoritos: {error.message}</p>
        <Footer/>
      </div>
    );
  }

  const favs = data.getAllFavs;

  return (
    <div>
      <NavBar/>
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
      <Footer/>
    </div>
  );
}

export default Wishlist;
