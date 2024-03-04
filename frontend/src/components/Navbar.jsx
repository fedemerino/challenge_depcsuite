import logoAcademia from "../assets/logo_academia.png";
import { useEffect, useContext } from "react";
import { Context } from "./CustomProvider";

const Navbar = () => {
  const { setPais, setMoneda, setMediosDePago, setOtrosMediosDePago } =
    useContext(Context);
  useEffect(() => {
    const getPais = async () => {
      try {
        const response = await fetch("http://localhost:3000/paises/1");
        if (!response.ok) throw new Error("Response not ok");
        const data = await response.json();
        const paisData = data.data;
        setPais(paisData.nombre);
        setMoneda(paisData.moneda);
        setMediosDePago(paisData.medios_de_pago);
        setOtrosMediosDePago(paisData.otros_medios_de_pago);
      } catch (error) {
        console.log(error);
      }
    };
    getPais();
  }, [setPais, setMoneda, setMediosDePago, setOtrosMediosDePago]);

  return (
    <nav className="navbarContainer">
      <img className="logoAcademia" src={logoAcademia} />
      <ul className="navbarList">
        <li>INICIO</li>
        <li>NOSOTROS</li>
        <li>CURSOS</li>
        <li>CARRERAS DE PROGRAMACIÓN</li>
        <li>DESCUENTOS</li>
        <li>BLOG</li>
        <li>FAQ</li>
      </ul>
      <button className="navbarButton">Ingresar al Campus</button>
    </nav>
  );
};

export default Navbar;
