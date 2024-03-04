import { useState } from "react";
import bottomArrow from "../assets/icon_bullet_desplegable.png";
import { Tecnologia } from "./Tecnologia";
export const UnidadContainer = ({ unidad }) => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="unidadContainer">
      <div className="unidadTituloContainer">
        <p className="unidadNumero">Unidad {unidad.numero}</p>
        <div>
          <img className="unidadBottomArrow" src={bottomArrow} onClick={handleOpen} />
        </div>
        <p className="unidadTitulo">{unidad.titulo}</p>
      </div>
      {open && (
        <div className="unidadDescripcionContainer">
          <div className="unidadClases">
            <p className="unidadaClasesText">{unidad.clases} Clases</p>
            <p className="unidadaClasesText">{unidad.horas} Horas</p>
          </div>
          <div className="unidadInformacion">
            <p dangerouslySetInnerHTML={{__html: unidad.descripcion}} className="unidadDescripcion"/>
            <div className="tecnologiasContainer">
              {unidad.tecnologias.map((tecnologia, index) => {
                return <Tecnologia key={index} tecnologia={tecnologia} />;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
