import { Children, createContext, useState } from "react";

export const WalletContext = createContext();

export default function WalletProvider({ children }){
    const [wallet, setWallet] = useState(0);

    return (
        <WalletContext.Provider value={{ wallet, setWallet }}>
            {children}
        </WalletContext.Provider>
    );
    
}

