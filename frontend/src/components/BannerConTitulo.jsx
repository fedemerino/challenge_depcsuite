import { FONDO_CURSO, FONDO_MODALIDAD } from "../utils/constants";

export const BannerConTitulo = ({ titulo, fondo }) => {
    const background = fondo === FONDO_CURSO ? FONDO_CURSO : FONDO_MODALIDAD;
  return (
    <div className={background}>
      <p className="bannerTituloText">{titulo}</p>
    </div>
  );
};
