import { createContext, useContext, useEffect, useState } from 'react';

const sizeUnitsContext = createContext();

export function SizeUnitsWrapper({ children }) {
    var [heightUnit, setHeightUnit] = useState(0)
    var [widthUnit, setWidthUnit] = useState(0)

    //Computes a unit for width and height (had to use this since react-draggable and react-resizable does not implement vh and vw)
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
