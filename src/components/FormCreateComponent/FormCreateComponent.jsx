import React from "react";
import { useForm } from "react-hook-form";
import Style from "./FormCreateComponent.module.css";
import Input from "../input/input";

const FormCreateComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createProduct, { loading, error }] = useMutation(CREATE_PRODUCT, {
    onCompleted: (data) => {
      console.log("Product created successfully:", data);
      // You can perform additional actions after successful creation
    },
    onError: (error) => {
      console.error("Error creating product:", error);
    },
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);

    // Call the mutation with the form data
    createProduct({
      variables: {
        name: data.name,
        model: data.model,
        family: data.family,
        brand: data.brand,
        stock: parseInt(data.stock),
        price: parseInt(data.price),
        image: data.image,
      },
    });
  };

  return (
    <div className={Style.container}>
      <h1 className={Style.title}>FormCreateComponent</h1>

      <form className={Style.form}>
        <label htmlFor="">Url imagen</label>
        <input type="text" {...register("image")} />

        <label htmlFor="">Name</label>
        <input type="text" {...register("name")} />

        <label htmlFor="">Model</label>
        <input type="text" {...register("model")} />

        <label htmlFor="">Family</label>
        <input type="text" {...register("family")} />

        <label htmlFor="">Brand</label>
        <input type="text" {...register("brand")} />

        <label htmlFor="">Stock</label>
        <input type="number" {...register("stock")} />

        <label htmlFor="">Price</label>
        <input type="number" {...register("price")} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormCreateComponent;
