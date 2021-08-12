import useLocalStorage from 'hooks/useLocalStorage'
import React, { createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [ userInfo, setUserInfo ] = useLocalStorage("userInfo",localStorage.getItem('userInfo') || {})
    const [ isLogged, setIsLogged ] = useLocalStorage("isLogged",localStorage.getItem('isLogged') || false)
    const handleLogin = () => {
        setUserInfo({id:1, fullname:'Thanh Huy'})
        setIsLogged(true)
    }
    const handleLogout = () => {
        localStorage.removeItem('userInfo')
        setIsLogged(false)
    }
    return (
        <AuthContext.Provider value={{ userInfo, isLogged, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
