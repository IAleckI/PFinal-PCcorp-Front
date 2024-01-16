import { useForm } from "react-hook-form";


const editUser = () =>{
    
    const {register, handleSubmit, formState: {errors}} = useForm({

    });

    const onSubmit = (data) => {
        try{
            const formData = new FormData();
            
        }catch(error){  

        }
    }
}

export default editUser;