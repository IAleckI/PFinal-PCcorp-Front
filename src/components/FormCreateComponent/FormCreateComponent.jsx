import React from "react";
import { useForm } from "react-hook-form";
import Style from "./FormCreateComponent.module.css";
// import { createProduct } from "../../utils/hooks/validates/productSchema";
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
    <div>
      <h1 className={Style.title}>FormCreateComponent</h1>

      <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Url imagen</label>
        <Input type="text" {...register("image")} />

        <label htmlFor="">Name</label>
        <Input type="text" {...register("name")} />

        <label htmlFor="">Model</label>
        <Input type="text" {...register("model")} />

        <label htmlFor="">Family</label>
        <Input type="text" {...register("family")} />

        <label htmlFor="">Brand</label>
        <Input type="text" {...register("brand")} />

        <label htmlFor="">Stock</label>
        <Input type="number" {...register("stock")} />

        <label htmlFor="">Price</label>
        <Input type="number" {...register("price")} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormCreateComponent;
