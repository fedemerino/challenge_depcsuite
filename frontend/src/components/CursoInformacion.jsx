export const CursoInformacion = ({ titulo, parrafo }) => {
  const parrafos = parrafo.split("|");
  const openP = "<p>";
  const closedP = "</p>";
  return (
    <div className="cursoInformacionContainer">
      <div className="cursoInformacionTituloContainer">
        <p className="cursoInformacionTituloP">{openP}</p>
        <p className="cursoInformacionTitulo">{titulo}</p>
        <p className="cursoInformacionTituloP">{closedP}</p>
      </div>
      {parrafos.map((parrafo, index) => {
        return <p className="cursoInformacionParrafo" key={index}>{parrafo}</p>;
      })}
    </div>
  );
};
