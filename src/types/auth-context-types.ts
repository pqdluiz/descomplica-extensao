export interface AuthContextType {
  isAuthenticated: boolean;
  userRole: UserRole;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export type UserRole = "client" | "barber" | null;
