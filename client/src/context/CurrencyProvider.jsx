import { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({children} ) => {
    
    const [currency, setCurrency] = useState("USD");

    const currencyHandler = async (e) => {
        setCurrency(e.target.innerHTML)
        // console.log(currency);
    }

    const values = {
        currency,
        currencyHandler
    }

    return (
        <CurrencyContext.Provider value={values} >
            {children}  
        </CurrencyContext.Provider>
    );
    
}

export default CurrencyContext;