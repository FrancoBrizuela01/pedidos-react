import React, { useState } from "react";

const Buscador = ({ pedidos, setPedidosEncontrados }) => {
  const [valor, setValor] = useState("");

  const buscar = () => {
    const pedidosEncontrados = pedidos.filter(
      (e) => valor.toLowerCase() === e.cliente.toLowerCase()
    );
    console.log(pedidosEncontrados);
    setPedidosEncontrados(pedidosEncontrados);
  };

  return (
    <>
      <input
        type="search"
        name="buscador"
        placeholder="Busca tu pedido, ingresa el nombre del cliente"
        onChange={(e) => setValor(e.target.value)}
      ></input>
      <button onClick={() => buscar()}>Buscar</button>
    </>
  );
};

export default Buscador;
