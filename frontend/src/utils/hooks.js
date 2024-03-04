export const useFormatearPrecio = (precio) => {
    return precio.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      useGrouping: true,
    });
  };