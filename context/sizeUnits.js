import { createContext, useContext, useEffect, useState } from 'react';

const sizeUnitsContext = createContext();

export function SizeUnitsWrapper({ children }) {
    var [heightUnit, setHeightUnit] = useState(0)
    var [widthUnit, setWidthUnit] = useState(0)

    useEffect(() => {
        setHeightUnit(Math.round(window.innerHeight / 100))
        setWidthUnit(Math.round(window.innerWidth / 100))
    }, []);


    return (
    <sizeUnitsContext.Provider value={{heightUnit, widthUnit}}>
        {children}
    </sizeUnitsContext.Provider>
    );
}

export function useSizeUnitsContext() {
    return useContext(sizeUnitsContext);
}