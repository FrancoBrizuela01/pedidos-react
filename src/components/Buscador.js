import React, { useState } from "react";

const Buscador = ({ pedidos, setPedidosEncontrados }) => {
  const [valor, setValor] = useState(0);

  const buscar = () => {
    const pedidosEncontrados = pedidos.filter(
      (e) => Number(valor) === e.orden
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
          placeholder="Numero de orden"
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
