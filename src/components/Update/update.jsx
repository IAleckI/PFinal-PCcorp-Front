import React, { useState } from "react";
import styles from "./update.module.css";
import { useQuery, useMutation } from "@apollo/client";
import editarIcon from "../../Assets/Logos/iconoeditar.png";
import { GET_ALL_PRODUCTS } from "../../utils/graphql/querys/products/getAllProducts";
import { UPDATE_PRODUCT } from "../../utils/graphql/mutations/product/updateProduct";
import closeIcon from "../../Assets/Logos/Xicon.png";
import trashIcon from "../../Assets/Logos/iconoEliminar.png";
import { DELETE_PRODUCT } from "../../utils/graphql/mutations/product/deleteProduct";
const Update = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  const [deleteProductMutation] = useMutation(DELETE_PRODUCT);
  const [editProductId, setEditProductId] = useState(null);
  const [updateFormData, setUpdateFormData] = useState({
    id: "",
    name: "",
    model: "",
    family: "",
    brand: "",
    stock: 0,
    price: 0,
  });
  const [successMessage, setSuccessMessage] = useState(null);

  const [updateProductMutation] = useMutation(UPDATE_PRODUCT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.getAllProducts;

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  const propertyTitles = ['id', 'name', 'model', 'family', 'brand', 'stock', 'image', 'price'];
  const editableProperties = ['name', 'model', 'family', 'brand', 'stock', 'price'];

  const handleEditClick = (productId) => {
    setEditProductId(productId);

    const selectedProduct = products.find((product) => product.id === productId);

    setUpdateFormData({
      name: selectedProduct.name,
      model: selectedProduct.model,
      family: selectedProduct.family,
      brand: selectedProduct.brand,
      stock: selectedProduct.stock,
      price: selectedProduct.price,
    });
  };

  const handleChange = (e) => {
    setUpdateFormData({
      ...updateFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const { data } = await updateProductMutation({
        variables: {
          ...updateFormData,
        },
        refetchQueries: [{ query: GET_ALL_PRODUCTS }],
      });

      console.log("Product updated:", data.updateProduct);

      setUpdateFormData({
        id: "",
        name: "",
        model: "",
        family: "",
        brand: "",
        stock: 0,
        price: 0,
      });
      setEditProductId(null);

      // Mostrar el mensaje de éxito
      setSuccessMessage("Cambio guardado con éxito !");

      // Limpiar el mensaje después de unos segundos
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000); // Ocultar el mensaje después de 3000 milisegundos (3 segundos)
    } catch (error) {
      console.error("Error updating product:", error.message);
    }
  };

  const handleClose = () => {
    setEditProductId(null);
  };

  const handleDelete = async (productId) => {
    try {
      swal({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          const { data } = await deleteProductMutation({
            variables: {
              id: productId,
            },
            refetchQueries: [{ query: GET_ALL_PRODUCTS }],
          });

          console.log("Product deleted:", data.deleteProduct);

          swal("¡Tu producto ha sido eliminado!", {
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            {propertyTitles.map((title) => (
              <th key={title}>{title}</th>
            ))}
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              {propertyTitles.map((title) => (
                <td key={title} className={title === 'image' ? styles.image : ''}>
                  {title === 'image' ? <img src={product[title]} alt={product.name} /> : product[title]}
                </td>
              ))}
              <td>
                <button className={styles.editButton} onClick={() => handleEditClick(product.id)}>
                  <img src={editarIcon} alt="Editar" />
                </button>
              </td>
              <td className={styles.tdDelete}>
                <button className={styles.trashButton} onClick={() => handleDelete(product.id)}>
                  <img className={styles.deleteButton} src={trashIcon} alt="Eliminar" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editProductId !== null && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <button className={styles.modalCloseButton} onClick={handleClose}>
              <img src={closeIcon} alt="Cerrar" />
            </button>
            <h2>Editar Producto</h2>
            <form className={styles.editFormContainer}>
              {editableProperties.map((title) => (
                <div key={title}>
                  <label>{title}:</label>
                  <input
                    type="text"
                    name={title}
                    value={updateFormData[title]}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              ))}
              <button type="button" onClick={handleUpdate} className={styles.button}>
                Actualizar
              </button>
            </form>
          </div>
        </div>
      )}

      {successMessage && (
        <div className={styles.successPopup}>
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Update;