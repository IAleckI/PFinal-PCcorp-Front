import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { VERIFY_USER } from '../../utils/graphql/mutations/user/verifyUser';
import { useNavigate, useLocation } from 'react-router-dom';

const Verify = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const token = queryParams.get('token');

  const navigate = useNavigate();
  const [verifyUserMutation, { data, error }] = useMutation(VERIFY_USER);

  useEffect(() => {
    console.log("useEffect executed");
    console.log("Token:", token);
    
    const verifyUser = async () => {
      try {
        const result = await verifyUserMutation({ variables: { token } });
        console.log("Mutation Result:", result);
        if (result.data && result.data.verifyUser) {
            console.log("User verified successfully");
            console.log("Navigating to /");
          navigate("/");
          
        } else {
          console.error("User verification failed");
        }
      } catch (err) {
        console.error("Error during user verification:", err.message);
      }
    };

    if (token) {
      verifyUser();
    }
  }, [token, verifyUserMutation, navigate]);

  return (
    <div>
      {data && <p>User verified successfully!</p> && navigate("/")}
      {error && <p>Error verifying user: {error.message}</p>}
     
    </div>
  );
};

export default Verify;
