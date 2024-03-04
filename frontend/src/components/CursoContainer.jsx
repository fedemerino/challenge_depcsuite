import { useState, useEffect, useContext } from "react";
import rightArrow from "../assets/icon_bullet.png";
import { CursoInformacion } from "./CursoInformacion";
import { BannerConTitulo } from "./BannerConTitulo";
import { FONDO_CURSO, FONDO_MODALIDAD } from "../utils/constants";
import { UnidadesContainer } from "./UnidadesContainer";
import { ModalidadesContainer } from "./ModalidadesContainer";
import { Context } from "./CustomProvider";
import { useParams } from "react-router-dom";
const CursoContainer = () => {
  const [curso, setCurso] = useState(null);
  const [horarios, setHorarios] = useState(null);
  const { moneda } = useContext(Context);
  const monedaId = moneda !== null ? moneda.id : 1;
  const { id: cursoId } = useParams();
  const tituloSignificado =
    curso !== null ? `¿Qué significa ${curso.nombre}?` : "";
  const tituloInformacion = "Nuestro Curso";
  const tituloContenido =
    curso !== null ? `Contenido del Curso de ${curso.nombre}` : "";
  const tituloModalidad = "¡Elegí la modalidad que mejor se adapte a vos!";
  useEffect(() => {
    const getCursos = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/cursos/${cursoId}?monedaId=${monedaId}`
        );
        if (!response.ok) throw new Error("Response not ok");
        const data = await response.json();
        setCurso(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getHorarios = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/cursos/${cursoId}/horarios`
        );
        if (!response.ok) throw new Error("Response not ok");
        const data = await response.json();
        setHorarios(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHorarios();
    getCursos();
  }, [monedaId, cursoId]);
  if (curso != null && horarios != null) {
    console.log(curso)
    return (
      <div className="cursoContainer">
        <div className="cursoMainSection">
          <div className="tipoCursoContainer">
            <div>
              <img src={rightArrow} className="cursoContainerRightArrow" />
            </div>
            <h3>Cursos Online</h3>
          </div>
          <div className="cursoTituloContainer">
            <h1>{curso.nombre}</h1>
          </div>
          <div className="cursoItemsContainer">
            <ul>
              {curso.descripcion.split("|").map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="cursoProximaFechaContainer">
            <p>Proxima fecha: </p>
            <b> 88.88.2023</b>
          </div>
          <button>Inscribite Ahora</button>
          <button>Descargar Programa en PDF</button>
          <p>Ver oferta académica completa</p>
        </div>
        <CursoInformacion
          titulo={tituloSignificado}
          parrafo={curso.significado}
        />
        <CursoInformacion
          titulo={tituloInformacion}
          parrafo={curso.informacion}
        />
        <BannerConTitulo titulo={tituloContenido} fondo={FONDO_CURSO} />
        <UnidadesContainer />
        <BannerConTitulo titulo={tituloModalidad} fondo={FONDO_MODALIDAD} />
        <ModalidadesContainer horarios={horarios} precio={curso.precio} descuento={curso.porcentaje_descuento} curso={curso} />
      </div>
    );
  } else {
    return <p>loading</p>;
  }
};

export default CursoContainer;
