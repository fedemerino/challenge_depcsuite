import { createContext, useState } from "react";

export const Context = createContext();
const { Provider } = Context;

const CustomProvider = ({ children }) => {
  const [pais, setPais] = useState(null);
  const [moneda, setMoneda] = useState(null);
  const [mediosDePago, setMediosDePago] = useState(null);
  const [otrosMediosDePago, setOtrosMediosDePago] = useState(null);
  const value = {
    moneda,
    setMoneda,
    mediosDePago,
    setMediosDePago,
    otrosMediosDePago,
    setOtrosMediosDePago,
    pais,
    setPais,
  };
  return <Provider value={value}>{children}</Provider>;
};

export default CustomProvider;
