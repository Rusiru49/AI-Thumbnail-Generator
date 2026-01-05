import { createContext, useState } from "react";
interface AuthContextProps {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    user: any | null;
    setUser: (user: any) => void;
    login: (user: {email: string, password: string}) => Promise<void>;
    signUp: (user: {email: string, password: string}) => Promise<void>;
    logout: () => Promise<void>;

}

const AuthContext = createContext<AuthContextProps>({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    user: null,
    setUser: () => {},
    login: async () => {},
    signUp: async () => {},
    logout: async () => {}
})

export const AuthProvider = ({children}: {children: React.ReactNode})=> {

    const [user, setUser] = useState<any | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const value = {

    }

    return (
        <AuthContext.Provider value={} >
            {children}
        </AuthContext.Provider>
    )
}