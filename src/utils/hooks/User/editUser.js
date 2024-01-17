import { useForm } from "react-hook-form";
import { EDIT_USER } from "../../graphql/mutations/user/editUser";
import { useMutation, useLazyQuery } from "@apollo/client";
import { jwtDecode } from "jwt-decode";

export const useEditUser = () => {
    const [editUser] = useMutation(EDIT_USER);
    const { register, handleSubmit, formState: { errors }, setError } = useForm();

    
    const token = localStorage.getItem("USER_INFO")
    const email =  jwtDecode (token)    
   
   
    console.log(email.email)

    const onSubmit = async (data) => {
        console.log(data)
        
        try {
            const result = await editUser({
                variables: {
                    email: email.email,
                    userName: data.newUserName,
                    passwordHash: data.newPassword
                }
            });

            console.log(result);

            if (result.errors && result.errors.length > 0) {
              throw new Error(result.errors[0].message);
            }
        
            console.log(errors); 

            await refetch();
        } catch (error) {
            setError('password', { message: error.message });
        }
    };

    return { register, handleSubmit, errors, onSubmit };
};