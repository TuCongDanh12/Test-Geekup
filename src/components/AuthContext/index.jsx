import { AuthContext } from "../../hooks";
import { useState } from "react";
// import { userservice } from '../../services/user.service'

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(1);

  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
