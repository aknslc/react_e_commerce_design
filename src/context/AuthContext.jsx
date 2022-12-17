import { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    

    const values = {
        user,
        setUser,
        
    };


    return <AuthContext.Provider value={values}> {children}</AuthContext.Provider>;

}



const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth };