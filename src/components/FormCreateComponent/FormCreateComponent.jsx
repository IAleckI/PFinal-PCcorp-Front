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
        <Input
          info={register("image")}
          error={errors.image?.message}
          name="image"
          type={"text"}
          placeholder="url imagen"
          {...register("image")}
        />
        <hr />

        <Input
          info={register("name")}
          error={errors.name?.message}
          name="name"
          type={"text"}
          placeholder="name"
          {...register("name")}
        />
        <hr />

        <Input
          info={register("model")}
          error={errors.model?.message}
          name="model"
          type={"text"}
          placeholder="model"
          {...register("model")}
        />
        <hr />

        <Input
          info={register("family")}
          error={errors.family?.message}
          name="family"
          type={"text"}
          placeholder="family"
          {...register("family")}
        />
        <hr />

        <Input
          info={register("brand")}
          error={errors.brand?.message}
          name="brand"
          type={"text"}
          placeholder="brand"
          {...register("brand")}
        />
        <hr />

        <Input
          info={register("description")}
          error={errors.description?.message}
          name="description"
          type={"text"}
          placeholder="description"
          {...register("description")}
        />
        <hr />

        <Input
          info={register("price")}
          error={errors.price?.message}
          name="price"
          type={"number"}
          placeholder="price"
          {...register("price")}
        />
        <hr />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormCreateComponent;
