import { createContext } from "react";
import { AuthContextType } from "../types/auth-context-types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
