import {useForm} from "react-hook-form"
import { EDIT_USER } from "../../graphql/mutations/user/editUser"
import { useMutation } from "@apollo/client"



export const useEditUser = () => {
const [editUser] = useMutation(EDIT_USER)
    const { register, handleSubmit, formState: { errors }, setError } = useForm()

    async function onSubmit(data) {
        try {
            const result = await editUser({ variables: {
                
                email: data.email,
                passwordHash: data.password
            } });
    
            if (result?.errors?.message) throw new Error(result.errors.message);
    
            // Store user information in localStorage
         
           
        } catch (error) {
            setError('password', { message: error.message });
        }
    }


return {register, handleSubmit,errors, onSubmit}


}