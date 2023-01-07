import { createContext } from "react"
import { LoginContextType } from "../@types/login"

export const LoginContext = createContext<LoginContextType | null>(null)