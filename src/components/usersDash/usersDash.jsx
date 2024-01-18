import React, { useState } from "react";
import styles from "./usersDash.module.css";
import { useQuery, useMutation } from "@apollo/client";
import editarIcon from "../../Assets/Logos/iconoeditar.png";
import { PROFILE_USER} from "../../utils/graphql/querys/user/userProfile";
import { EDIT_USER } from "../../utils/graphql/mutations/user/editUser";
import closeIcon from "../../Assets/Logos/Xicon.png";
import { BAN_USER } from "../../utils/graphql/mutations/user/banUser";
import borrarCuenta from "../../Assets/Logos/borrar-cuenta.png"
const UsersDash = () => {
  const { loading, error, data } = useQuery(PROFILE_USER);
  const [setBanUser] = useMutation(BAN_USER)
  const [editUserId, setEditUserId] = useState(null);
  const [updateUserData, setUpdateUserData] = useState({
    id: "",
    userName: "",
    email: "",
    password: "",
   
  });
  const [successMessage, setSuccessMessage] = useState(null);

  const [updateUserMutation] = useMutation(EDIT_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

const users = data.getAllUser;

  if (!users || users.length === 0) {
    return <p>No users available.</p>;
  }

  const propertyTitles = ['id', 'userName','email' ,'password', /* Add other properties here */];
  const editableProperties = ['userName', 'password', /* Add other properties here */];

  const handleEditClick = (userId) => {
    setEditUserId(userId);

    const selectedUser = users.find((user) => user.id === userId);

    setUpdateUserData({
      id: selectedUser.id,
      userName: selectedUser.userName,
      email: selectedUser.email,
      password: selectedUser.passwordHash,
      // Set other properties here
    });
  };

  const handleChange = (e) => {
    setUpdateUserData({
      ...updateUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (data) => {
    try {
      const result = await updateUserMutation({
        variables: {
          ...updateUserData,
        },
        refetchQueries: [{ query: PROFILE_USER }],
      });

      console.log("User updated:", data.updateUser);
      console.log(result);

      if (result.errors && result.errors.length > 0) {
        throw new Error(result.errors[0].message);
      }
  
      console.log(result.errors); 
      setUpdateUserData({
        id: "",
        userName: "",
        email: "",
        password: "",
        // Reset other properties
      });
      setEditUserId(null);

      // Show success message
      setSuccessMessage("User updated successfully!");

      // Clear the message after a few seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000); // Hide the message after 3000 milliseconds (3 seconds)
    } catch (error) {
      console.error("Error updating user:", {error});
    }
  };

  const handleClose = () => {
    setEditUserId(null);
  };


  const handleBan = async (data) => {
    console.log(data);

    try {
        swal({
            title: "¿Estás seguro?",
            text: "esto puede revertirse en cualquier momento",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willBan) => {
            if (willBan) {
                const result = await setBanUser({
                    variables: {
                     
                        id: userEmail, // Add email to the variables
                    },
                    refetchQueries: [{ query: PROFILE_USER }],
                });

                console.log("User Banned:", result.setBanUser);

                swal("¡usuario banneado con exito!", {
                    icon: "success",
                });
            }
        });
    } catch (error) {
        console.error("Error banning user:", error.message);
    }
};
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            {propertyTitles.map((title) => (
              <th key={title}>{title}</th>
            ))}
            <th>Edit</th>
            <th>Ban</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              {propertyTitles.map((title) => (
                <td key={title}>{user[title]}</td>
              ))}
              <td>
                <button className={styles.editButton} onClick={() => handleEditClick(user.id)}>
                  <img src={editarIcon} alt="Edit" />
                </button>
              </td>  
              <td>
                <button className={styles.editButton} onClick={() => handleBan(user.id)}>
                  <img src={borrarCuenta} alt="Ban" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUserId !== null && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <button className={styles.modalCloseButton} onClick={handleClose}>
              <img src={closeIcon} alt="Close" />
            </button>
            <h2>Edit User</h2>
           
            <form className={styles.editFormContainer}>
              {editableProperties.map((title) => (
                <div key={title}>
                  <label>{title}:</label>
                  <input
                    type="text"
                    name={title}
                    value={updateUserData[title] || ''}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              ))}
              <button type="button" onClick={handleUpdate} className={styles.button}>
                Update
              </button>
            </form>
          </div>
        </div>
      )}

      {successMessage && (
        <div className={styles.successPopup}>
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default UsersDash;