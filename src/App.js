import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Pedido from "./components/Pedido";

function App() {
  let pedidosIniciales = JSON.parse(localStorage.getItem("pedidos"));
  if (!pedidosIniciales) {
    pedidosIniciales = [];
  }

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
        <div className="container title">
            <h1>Administración de Pedidos</h1>
        </div>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearPedido={crearPedido} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {pedidos.map((pedido) => (
              <Pedido
                key={pedido.id}
                pedido={pedido}
                eliminarPedido={eliminarPedido}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
