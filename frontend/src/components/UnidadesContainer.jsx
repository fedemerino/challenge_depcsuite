import { useState, useEffect } from "react";
import { UnidadContainer } from "./Unidad";
import { useParams } from "react-router-dom";

export const UnidadesContainer = () => {
  const [unidades, setUnidades] = useState(null);
  const { id: cursoId } = useParams();

  useEffect(() => {
    const getUnidades = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/cursos/${cursoId}/unidades`
        );
        if (!response.ok) throw new Error("Response not ok");
        const data = await response.json();
        setUnidades(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUnidades();
  }, [cursoId]);

  return unidades && unidades.length > 0 ? (
    unidades.map((unidad) => {
      return <UnidadContainer key={unidad.descripcion} unidad={unidad} />;
    })
  ) : (
    <p>loading</p>
  );
};
