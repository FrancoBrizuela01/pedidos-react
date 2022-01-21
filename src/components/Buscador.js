import React, { useState } from "react";

const Buscador = ({ pedidos, setPedidosEncontrados }) => {
  const [valor, setValor] = useState("");

  const buscar = () => {
    const pedidosEncontrados = pedidos.filter((e) => (
      valor.toLowerCase() === e.cliente.toLowerCase()
    ));
    console.log(pedidosEncontrados);
    setPedidosEncontrados(pedidosEncontrados);
  };

  return (
    <>
      <label>Buscador</label>
      <input
        type="text"
        name="buscador"
        className="u-full-width"
        placeholder="Nombre del cliente"
        onChange={(e) => setValor(e.target.value)}
      />
      <button onClick={() => buscar()}>Buscar</button>
    </>
  );
};

export default Buscador;
