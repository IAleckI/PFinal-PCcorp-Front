import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom"
import { registerSchema } from "../../validates/userSchema";
import { CREATE_USER } from "../../graphql/mutation/user/createUser";

export const useRegister = () => {
    const navigate = useNavigate()
    const [ createUser ] = useMutation(CREATE_USER);
    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: zodResolver(registerSchema)
    })

    async function onSubmit (data) {

        try {
            const result = await createUser({
                variables: {
                    userName: data.userName,
                    email: data.email,
                    passwordHash: data.password
                }
            })
            if (result.data?.userCreate) navigate('/register?registered=true')
            
        } catch (error) {
            setError('email', { message: error.message })
        }
    }

    return { register, handleSubmit, errors, onSubmit }
}