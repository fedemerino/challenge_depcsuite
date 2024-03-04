export const Tecnologia = ({ tecnologia }) => {
  const urlImagen = `../src/assets/${tecnologia.url_imagen}`;
  return (
    <div className="tecnologiaContainer">
      <div>
        <img className="tecnologiaIcon" src={urlImagen} />
      </div>
      <p className="tecnologiaNombre">{tecnologia.nombre}</p>
    </div>
  );
};
