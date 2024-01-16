import React from "react";
import { Button } from "../Index";
import { useParams } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import swal from "sweetalert";
import { DELETE_PRODUCT } from "../../utils/graphql/mutations/product/deleteProduct";

const AdminDeleteComponent = () => {
  const { id } = useParams();

  // Utiliza la mutación DELETE_PRODUCT
  const [deleteProductMutation] = useMutation(DELETE_PRODUCT, {
    variables: { id },
  });

  const onClick = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteProductMutation().then(() => {
          swal("Poof! Your product has been deleted!", {
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div>
      <Button text="Delete" onClick={onClick} />
    </div>
  );
};

export default AdminDeleteComponent;
