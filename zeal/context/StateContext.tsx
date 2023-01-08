import React, { createContext, useContext, useState, useRef } from "react";


const Context = createContext<any>(({ showMenu: false, setShowMenu: () => {} }));

export const StateContext = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState(false);

    

    return (
        <div>
            <Context.Provider value={{ user, setUser }}>
                {children}
            </Context.Provider>
        </div>
    );
};
//function to export context

export const useStateContext = () => useContext(Context);