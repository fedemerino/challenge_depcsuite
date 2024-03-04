import closeButton from "../assets/close.svg";
import { useFormatearPrecio } from "../utils/hooks";
export const MediosDePagoModal = ({
  onClose,
  mediosDePago,
  otrosMediosDePago,
  pais,
  descuento,
  precio,
  moneda,
}) => {
  const precioConDescuento = useFormatearPrecio(
    precio - (precio * descuento) / 100
  );
  return (
    <div className="modalOverlay">
      <div className="medioDePagoContainer">
        <img src={closeButton} className="closeButton" onClick={onClose} />
        <div className="mediosDePagoHeader">
          <p className="medioDePagoPais">{pais}</p>
        </div>
        <div className="mediosDePagoBody">
          <p className="mediosDePagoBodyText">Podes abonar el curso en un pago de:</p>
          <p className="mediosDePagoPrecioConDescuento">
            {precioConDescuento} {moneda.nombre}. {descuento}% de descuento incluido.
          </p>
          <p className="mediosDePagoPrecioSinDescuento">
            Precio sin descuento: {useFormatearPrecio(precio)} {moneda.nombre}
          </p>
          <p className="mediosDePagoText">Medios de Pago disponibles:</p>
          <div className="mediosDePagoImagenesContainer">
            {mediosDePago.map((medio, index) => {
              return (
                <div key={index} className="medioDePago">
                  <img className="medioDePagoImg" src={`../src/assets/${medio.url_imagen}`} />
                </div>
              );
            })}
          </div>
          <div className="otrosMediosDePagoContainer">
            <p className="mediosDePagoText">Otros Paises:</p>
            <img className="medioDePagoImg" src={`../src/assets/${otrosMediosDePago[0].url_imagen}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
