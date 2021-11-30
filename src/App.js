import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Pedido from "./components/Pedido";
import Buscador from "./components/Buscador";

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
      <div className="container">
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
      <div className="container title">
        <h1>Administración de Pedidos</h1>
      </div>

      <div className="container">
        <Formulario crearPedido={crearPedido} pedidos={pedidos} />
        <h2>{titulo}</h2>
        {pedidos.map((pedido) => (
          <Pedido
            key={pedido.id}
            pedido={pedido}
            eliminarPedido={eliminarPedido}
          />
        ))}
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
