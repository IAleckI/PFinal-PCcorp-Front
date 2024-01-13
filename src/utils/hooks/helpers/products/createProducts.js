import axios from "axios";
import { zodResolver } from '@hookform/resolvers/zod'
import {productSchema} from "../../validates/productSchema"
import { useForm } from "react-hook-form";

export const useCreate = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
      
    });
  
    const onSubmit = async (data) => {
      try {

     
        console.log("Form data:", data);

        console.log("file:", data.file)
        const formData = new FormData();
        formData.append("file", data.files[0]);
        formData.append('name', data.name);
        formData.append('model', data.model);
        formData.append('family', data.family);
        formData.append('brand', data.brand);
        formData.append('stock', data.stock);
        formData.append('price', data.price);
        formData.append('type', data.type);

        console.log(formData)
const response =         axios.post('https://back-mans.onrender.com/files/', formData)
    

          console.log("Mutation result:", response);
}
   catch (error) {
        console.error("Error in createProduct mutation:", error);
      }
    };
  
    return { onSubmit, handleSubmit, register, errors };
  };
  
  