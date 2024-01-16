import { useForm } from "react-hook-form";
import { EDIT_USER } from "../../graphql/mutations/user/editUser";
import { useMutation } from "@apollo/client";

export const useEditUser = () => {
    const [editUser] = useMutation(EDIT_USER);
    const { register, handleSubmit, formState: { errors }, setError } = useForm();

    const onSubmit = async (data) => {
        try {
            const result = await editUser({
                userUpdated: {
                    email: data.newUsername,
                    passwordHash: data.newPassword
                }
            });

            console.log(result);

            if (result?.errors?.message) {
                throw new Error(result.errors.message);
            }

            console.log(errors.message);
        } catch (error) {
            setError('password', { message: error.message });
        }
    };

    return { register, handleSubmit, errors, onSubmit };
};