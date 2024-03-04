import closeButton from "../assets/close.svg";
import { TIPO_DE_MODALIDAD_EN_VIVO } from "../utils/constants";

export const InscripcionModal = ({
  urlImagen,
  onClose,
  modalidad,
  curso,
  horarios,
}) => {
  const fecha = new Date(horarios.fecha_inicio);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    const simpleDate = `${dia}/${mes}/${anio}`;
  return (
    <div className="modalOverlay">
      <div className="inscripcionContainer">
        <img src={closeButton} className="closeButton" onClick={onClose} />
        <img src={urlImagen} className="inscripcionImagen" />
        <p className="confirmarInscripcionText">Confirmar inscripción a</p>
        <p className="inscripcionCursoNombre">{curso.nombre}</p>
        <p className="inscripcionModalidadText">
          {modalidad === TIPO_DE_MODALIDAD_EN_VIVO
            ? "Modalidad con docente en vivo"
            : "Modalidad clases grabadas"}
        </p>
        {modalidad === TIPO_DE_MODALIDAD_EN_VIVO ? (
          <>
            <p className="inscripcionFechaInicioText">Fecha de inicio: <strong>{simpleDate}</strong></p>
            <p className="inscripcionHorarioDeCursada">Horario de Cursada:</p>
            <p className="inscripcionHorarioDeCursada">
              {horarios.dias} de {horarios.hora_inicio} a {horarios.hora_fin} hs
            </p>
            <p className="inscripcionIncluye">Incluye 40 clases en vivo + 1 clase de consulta grupal.</p>
          </>
        ) : <p className="inscripcionIncluye">Incluye 40 clases. 100 h totales.</p>}

        <button className="inscripcionModalButton">Continuar al Pago</button>
      </div>
    </div>
  );
};
