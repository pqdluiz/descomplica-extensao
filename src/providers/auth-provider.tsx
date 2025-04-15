import { ReactNode, useMemo, useState } from "react";
import { AuthContext } from "../contexts/auth-context";
import { UserRole } from "../types/auth-context-types";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);

  const login = (email: string, password: string) => {
    if (email === "example.barber@gmail.com" && password === "123456") {
      setIsAuthenticated(true);
      setUserRole("barber");

      return true;
    }

    if (email === "example.client@gmail.com" && password === "123456") {
      setIsAuthenticated(true);
      setUserRole("client");

      return true;
    }

    setIsAuthenticated(false);
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      userRole,
      login,
      logout,
    }),
    [isAuthenticated, userRole]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
