import { createContext, useContext } from 'react'
export const AuthContext = createContext('AuthContext')
const useAuth = () => useContext(AuthContext)

export { useAuth }