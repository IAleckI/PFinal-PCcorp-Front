import React from "react";
import { useForm } from "react-hook-form";
import Style from "./FormCreateComponent.module.css";
// import { createProduct } from "../../utils/hooks/validates/productSchema";

const FormCreateComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);



    console.log(watch("example"));
  };

  return (
    <div>
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

        <button onClick={handleSubmit(onSubmit)}>Submit</button>
      </form>
    </div>
  );
};

export default FormCreateComponent;
