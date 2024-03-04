import { useState, useEffect } from "react";
import { Modalidad } from "./Modalidad";
import { useParams } from "react-router-dom";
export const ModalidadesContainer = ({
  horarios,
  precio,
  descuento,
  curso,
}) => {
  const [modalidades, setModalidades] = useState(null);
  const { id: cursoId } = useParams();

  useEffect(() => {
    const getModalidades = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/cursos/${cursoId}/modalidades`
        );
        if (!response.ok) throw new Error("Response not ok");
        const data = await response.json();
        setModalidades(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getModalidades();
  }, [cursoId]);

  return modalidades && modalidades.length > 0 ? (
    modalidades.map((modalidad) => {
      return (
        <Modalidad
          key={modalidad.items}
          modalidad={modalidad}
          horarios={horarios}
          precio={precio}
          descuento={descuento}
          curso={curso}
        />
      );
    })
  ) : (
    <p>loading</p>
  );
};
