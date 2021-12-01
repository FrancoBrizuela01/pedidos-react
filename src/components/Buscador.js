import React, { useState } from "react";

const Buscador = ({ pedidos, setPedidoEncontrado }) => {
  const [valor, setValor] = useState("");

  const buscar = () => {
    const pedidoEncontrado = pedidos.map((e) => {
      console.log(e);
      if (valor === e.id) {
        console.log("se guardo juan");
        return e;
      }
    });
    setPedidoEncontrado(pedidoEncontrado[0]);
  };

  return (
    <>
      <label>Buscador</label>
      <input
        type="text"
        name="buscador"
        className="u-full-width"
        placeholder="Numero de orden"
        onChange={(e) => setValor(e.target.value)}
      />
      <button onClick={() => buscar()}>Buscar</button>
    </>
  );
};

export default Buscador;
