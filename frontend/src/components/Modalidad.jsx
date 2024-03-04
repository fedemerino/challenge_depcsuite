import { TIPO_DE_MODALIDAD_EN_VIVO } from "../utils/constants";
import { useContext, useState } from "react";
import { Context } from "./CustomProvider";
import { MediosDePagoModal } from "./MediosDePagoModal";
import { useFormatearPrecio } from "../utils/hooks";
import { InscripcionModal } from "./InscripcionModal";
export const Modalidad = ({ modalidad, horarios, precio, descuento, curso }) => {
  const fecha = new Date(horarios.fecha_inicio);
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();
  const simpleDate = `${dia}/${mes}/${anio}`;
  const [mediosDePagoOpen, setMediosDePagoOpen] = useState(false);
  const [inscripcionOpen, setInscripcionOpen] = useState(false);
  const handleOpenMedioDePago = () => {
    setMediosDePagoOpen(true);
  };
  const handleCloseMedioDePago = () => {
    setMediosDePagoOpen(false);
  };
  const handleInscripcionOpen = () => {
    setInscripcionOpen(true);
  }
  const handleInscripcionClose = () => {
    setInscripcionOpen(false);
  }
  const imagen =
    modalidad.tipo === TIPO_DE_MODALIDAD_EN_VIVO
      ? "clases_vivo.svg"
      : "clases_grabadas.svg";
  let modalidadSubtitulo =
    modalidad.tipo === TIPO_DE_MODALIDAD_EN_VIVO
      ? modalidad.subtitulo + ` <b>Fecha de Inicio: ${simpleDate}</b>`
      : modalidad.subtitulo;
  const urlImagen = `../src/assets/${imagen}`;
  const { mediosDePago, otrosMediosDePago, moneda, pais } = useContext(Context);
  const precioCuota = Math.ceil((precio - (precio * descuento) / 100) / 12);
  return (
    <>
      <div className="modalidadContainer">
        <div className="modalidadBanner">
          <div className="modalidadImagen">
            <img src={urlImagen} />
          </div>
          <div className="modalidadInformacion">
            <p className="modalidadTitulo">{modalidad.titulo}</p>
            <p
              dangerouslySetInnerHTML={{ __html: modalidadSubtitulo }}
              className="modalidadSubtitulo"
            ></p>
          </div>
          <div className="modalidadButtonContainer">
            <button className="modalidadInscribirButton" onClick={handleInscripcionOpen}>
              Inscribirme Ahora
            </button>
          </div>
          <div className="modalidadPrecio">
            <p className="cantidadCuotas">HASTA 12 CUOTAS SIN INTERÉS DE</p>
            <p className="precio">
              {useFormatearPrecio(precioCuota)} {moneda.nombre}
            </p>
            <div className="precioAnteriorContainer">
              <p>ANTES </p>
              <p className="precioAnterior">
                {useFormatearPrecio(precio)} {moneda.nombre}
              </p>
            </div>
            <a
              className="otrosMediosDePagoText"
              onClick={handleOpenMedioDePago}
            >
              Otros medios de pago
            </a>
          </div>
        </div>
      </div>
      {mediosDePagoOpen && (
        <MediosDePagoModal
          mediosDePago={mediosDePago}
          otrosMediosDePago={otrosMediosDePago}
          pais={pais}
          descuento={descuento}
          precio={precio}
          moneda={moneda}
          onClose={handleCloseMedioDePago}
        />
      )}
      {inscripcionOpen && (
        <InscripcionModal urlImagen={urlImagen} modalidad={modalidad.tipo} curso={curso} horarios={horarios} onClose={handleInscripcionClose}/>
      )}
    </>
  );
};
