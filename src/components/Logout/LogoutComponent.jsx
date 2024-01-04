import React from 'react';
import { useAuth } from "../../utils/hooks/auth/authContext"

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;