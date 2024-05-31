 
import { Children }  from "../lib/types/children";
import { IUser } from "../lib/types/user";
import { doc, getDoc } from "firebase/firestore"; 
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { auth, db } from "../firebase/firebase-config";

export const UserContext = createContext<IUser | null>(null);

export default function UserContextProvider({children} : Children) {

    const [user, setUser] = useState<IUser | null>(null);
    const location = useLocation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser : any) => {

            //@ts-ignore
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [location])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext);
}