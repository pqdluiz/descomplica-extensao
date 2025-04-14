import { ReactNode, useMemo, useState } from "react";
import { AuthContext } from "../contexts/auth-context";
import { UserRole } from "../types/auth-context-types";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);

  const login = (role: UserRole) => {
    setIsAuthenticated(true);
    setUserRole(role);
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
