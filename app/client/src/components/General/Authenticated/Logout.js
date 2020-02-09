import React from 'react';
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("User_Authenticator_Token");
    window.location.reload(true);
  };
  return (
    <div>
      {logout()}
    </div>
  )
}
