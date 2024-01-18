import React from "react";
import { useForm } from "react-hook-form";
import Style from "./FormCreateComponent.module.css";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "../../utils/graphql/mutations/product/createProduct";
import { useCreate } from "../../utils/hooks/helpers/products/createProducts";
import { useNavigate } from "react-router";
import Swal from "sweetalert";

const FormCreateComponent = () => {
  const navigate = useNavigate();
  const { onSubmit, handleSubmit, register, formState } = useCreate();

  const handleFormSubmit = async (data) => {
    try {
      // Validar que todos los campos estén llenos
      if (!data.name || !data.model || !data.family || !data.brand || !data.stock || !data.price || !data.files[0]) {
        swal("Error", "Por favor, completa todos los campos.", "error");
        return;
      }

      // Resto de la lógica de envío de datos
      await onSubmit(data);

      // Mostrar SweetAlert de éxito
      swal("Éxito", "Producto creado exitosamente.", "success");

      // Redireccionar después del éxito
      navigate('/dashboard');
    } catch (error) {
      console.error("Error creando producto:", error);
      // Mostrar SweetAlert de error si es necesario
      swal("Error", "Hubo un problema al crear el producto.", "error");
    }
  };

  return (
    <div className={Style.template}>
      <h1 className={Style.title}>FormCreateComponent</h1>

      <form
        method="POST"
        className={Style.form}
        onSubmit={handleSubmit(handleFormSubmit)}
        encType="multipart/form-data"
      >
        <label htmlFor="name">Name</label>
        <input className={Style.input} type="text" {...register("name")} />

        <label htmlFor="model">Model</label>
        <input className={Style.input} type="text" {...register("model")} />

        <label htmlFor="family">Family</label>
        <input className={Style.input} type="text" {...register("family")} />

        <label htmlFor="brand">Brand</label>
        <input className={Style.input} type="text" {...register("brand")} />
        <label htmlFor="brand">Type</label>
        <input className={Style.input} type="text" {...register("type")} />

        <label htmlFor="stock">Stock</label>
        <input className={Style.input} type="number" min="1" {...register("stock")} />

        <label htmlFor="price">Price</label>
        <input className={Style.input} type="number" min="1" {...register("price")} />

        <label htmlFor="files">Upload Image</label>
        <input className={Style.input} type="file" {...register("files")} />

        <button className={Style.input} type="submit">
          Submit
        </button>
        <button type="button" onClick={() => navigate("/dashboard")}>
          Go Back
        </button>
      </form>
    </div>
  );
};

export default FormCreateComponent;
