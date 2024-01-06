import React from "react";
import { useForm } from "react-hook-form";
import Style from "./FormCreateComponent.module.css";
import { useMutation } from "@apollo/client"
import { CREATE_PRODUCT } from "../../utils/graphql/mutations/product/createProduct";


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

  const onSubmit = async (data) => {
    try {
      console.log(data)
      await createProduct({
        
          name: data.name,
          model: data.model,
          family: data.family,
          brand: data.brand,
          stock: parseInt(data.stock),
          price: parseInt(data.price),
          image: data.image,
       
      });
    } catch (error) {
      console.error("Error in createProduct mutation:", error);
    }
  };

  return (
    <div className={Style.template}>
    <h1 className={Style.title}>FormCreateComponent</h1>
  
    <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="image">Upload Image</label>
      <input type="file" {...register("image")} />
  
      <label htmlFor="name">Name</label>
      <input type="text" {...register("name")} />
  
      <label htmlFor="model">Model</label>
      <input type="text" {...register("model")} />
  
      <label htmlFor="family">Family</label>
      <input type="text" {...register("family")} />
  
      <label htmlFor="brand">Brand</label>
      <input type="text" {...register("brand")} />
  
      <label htmlFor="stock">Stock</label>
      <input type="number" {...register("stock")} />
  
      <label htmlFor="price">Price</label>
      <input type="number" {...register("price")} />
  
      <button type="submit">Submit</button>
    </form>
  </div>
  );
};

export default FormCreateComponent;
