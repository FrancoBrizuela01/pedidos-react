import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario from "./components/Formulario";
import Pedido from "./components/Pedido";
import Navbar from "./components/Navbar";

function App() {
  let pedidosIniciales = JSON.parse(localStorage.getItem("pedidos"));
  if (!pedidosIniciales) {
    pedidosIniciales = [];
  }

  const [pedidosEncontrados, setPedidosEncontrados] = useState("");

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

  const titulo = pedidos.length === 0 ? "NO HAY PEDIDOS" : "PEDIDOS";
  const pedidosOrden = pedidos.length;

  return (
    <>
      <Router>
        <Navbar
          setPedidosEncontrados={setPedidosEncontrados}
          pedidos={pedidos}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mt-5">
                <div className="row">
                  <div className="col">
                    <div className="container-title bg-dark">
                      <h1 className="title-second" id="pedidos">
                        {titulo}
                      </h1>
                    </div>
                    <div>
                      {pedidosEncontrados &&
                        pedidosEncontrados.map((e, index) => (
                          <Pedido
                            key={index}
                            pedido={e}
                            eliminarPedido={eliminarPedido}
                            background={true}
                            background2={"bg-dark"}
                            estado={e.estado}
                          />
                        ))}
                    </div>
                    {pedidos.map((pedido) => (
                      <Pedido
                        key={pedido.id}
                        pedido={pedido}
                        eliminarPedido={eliminarPedido}
                      />
                    ))}
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Formulario
                      crearPedido={crearPedido}
                      pedidosOrden={pedidosOrden}
                    />
                  </div>
                </div>
              </div>
            }
          ></Route>
          <Route path="/" component={<App />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
