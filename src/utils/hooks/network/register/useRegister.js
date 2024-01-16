import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../validates/userSchema";
import { useMutation } from "@apollo/client";
import swal from "sweetalert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_USER } from "../../../graphql/mutations/user/createUser";

export const useFormRegister = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [remind, setRemind] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password, userName } = data;
    try {
      const result = await createUser({
        variables: {
          userName: userName,
          email: email,
          passwordHash: password,
        },
      });

      if (result.data?.userCreate) {
        swal({
          title: "Cuenta Creada",
          text: "Ahora puedes iniciar sesion",
          icon: "success",
          button: "Iniciar Sesion",
        }).then(() => {
          navigate("/register?registered=true");
        });
      }
    } catch (error) {
      setError("email", { message: error.message });
    }
  };

  return { register, handleSubmit, watch, onSubmit, errors, setRemind, remind };
};
