import React from "react";
import { useForm } from "react-hook-form";
import Style from "./FormCreateComponent.module.css";
import { useMutation } from "@apollo/client"
import { CREATE_PRODUCT } from "../../utils/graphql/mutations/product/createProduct";
import { useCreate } from "../../utils/hooks/helpers/products/createProducts";

const FormCreateComponent = () => {
  
  const { onSubmit, handleSubmit, register, errors } = useCreate();
console.log("form errors", errors)
  


return (
    <div className={Style.template}>
    <h1 className={Style.title}>FormCreateComponent</h1>
  
    <form method="POST" className={Style.form} onSubmit={handleSubmit(onSubmit)}  encType="multipart/form-data">
  
      <label htmlFor="name">Name</label>
      <input className={Style.input} type="text" {...register("name")} />

      {/* <label htmlFor="description">Description</label>
      <textarea className={Style.input} name="description" id="" cols="50" rows="50"></textarea> */}
      
      <label htmlFor="model">Model</label>
      <input className={Style.input}  type="text" {...register("model")} />
  
      <label htmlFor="family">Family</label>
      <input className={Style.input} type="text" {...register("family")} />
  
      <label htmlFor="brand">Brand</label>
      <input className={Style.input} type="text" {...register("brand")} />
  
      <label htmlFor="stock">Stock</label>
      <input className={Style.input} type="number" min="1" {...register("stock")} />
  
      <label htmlFor="price">Price</label>
      <input className={Style.input} type="number" min="1" {...register("price")} />
  
    <label htmlFor="files">Upload Image</label>
    <input className={Style.input} type="file" {...register("files")} />

      <button className={Style.input} type="submit" >Submit</button>

      <span>{console.log(errors)}</span>
    </form>

  </div>
  );
};

export default FormCreateComponent;
