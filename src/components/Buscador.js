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
      <div className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setValor(e.target.value)}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={() => buscar()}
        >
          Buscar
        </button>
      </div>
    </>
  );
};

export default Buscador;
