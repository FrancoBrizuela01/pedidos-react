import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Pedido from "./components/Pedido";
import Buscador from "./components/Buscador";
import Navbar from "./components/Navbar";


function App() {
  let pedidosIniciales = JSON.parse(localStorage.getItem("pedidos"));
  if (!pedidosIniciales) {
    pedidosIniciales = [];
  }

  const [pedidoEncontrado, setPedidoEncontrado] = useState("");

  const [pedidos, guardarPedidos] = useState(pedidosIniciales);

  useEffect(() => {
    let pedidosIniciales = JSON.parse(localStorage.getItem("pedidos"));

    if (pedidosIniciales) {
      localStorage.setItem("pedidos", JSON.stringify(pedidos));
    } else {
      localStorage.setItem("pedidos", JSON.stringify([]));
    }
  }, [pedidos]);

  const crearPedido = (pedido) => {
    guardarPedidos([...pedidos, pedido]);
  };

  const eliminarPedido = (id) => {
    const nuevosPedidos = pedidos.filter((pedido) => pedido.id !== id);
    guardarPedidos(nuevosPedidos);
  };

  const titulo =
    pedidos.length === 0 ? "No hay pedidos" : "Administra tus pedidos";

  return (
    <>
      <Navbar/>
      <div className="container title">
        <h1>Administración de Pedidos</h1>
      </div>
      <div className="container buscador">
        <Buscador pedidos={pedidos} setPedidoEncontrado={setPedidoEncontrado} />
      </div>
      <div className="container">
        {pedidoEncontrado?.id && (
          <Pedido
            key={pedidoEncontrado.id}
            pedido={pedidoEncontrado}
            eliminarPedido={eliminarPedido}
          />
        )}
      </div>
      <div className="ten columns offset-by-one">
        <Formulario crearPedido={crearPedido} pedidos={pedidos} />
      </div>
      <div className="container">
        <h2>{titulo}</h2>
        {pedidos.map((pedido) => (
          <Pedido
            key={pedido.id}
            pedido={pedido}
            eliminarPedido={eliminarPedido}
          />
        ))}
      </div>
    </>
  );
}

export default App;
