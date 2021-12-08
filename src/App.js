import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Formulario from "./components/Formulario";
import Pedido from "./components/Pedido";
import Buscador from "./components/Buscador";
import Navbar from "./components/Navbar";
import ImgHome from "./img/img-home.svg";

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
      <Router>
        <Navbar />
        <Formulario crearPedido={crearPedido} pedidos={pedidos} />
        <Routes>
          {/* <Route
            path="/formulario"
            element={<Formulario crearPedido={crearPedido} pedidos={pedidos} />}
          ></Route> */}

          <Route
            path="/pedido"
            element={
              <div className="container">
                <h1>{titulo}</h1>
                {pedidos.map((pedido) => (
                  <Pedido
                    key={pedido.id}
                    pedido={pedido}
                    eliminarPedido={eliminarPedido}
                  />
                ))}
              </div>
            }
          ></Route>

          <Route
            path="/buscar"
            element={
              <div className="container buscador">
                <Buscador
                  pedidos={pedidos}
                  setPedidoEncontrado={setPedidoEncontrado}
                />
              </div>
            }
          ></Route>

          <Route path="/" component={<App />} />
        </Routes>
      </Router>

      <div className="container">
        {pedidoEncontrado?.id && (
          <Pedido
            key={pedidoEncontrado.id}
            pedido={pedidoEncontrado}
            eliminarPedido={eliminarPedido}
          />
        )}
      </div>
    </>
  );
}

export default App;
