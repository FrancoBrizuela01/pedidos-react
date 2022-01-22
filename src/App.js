import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Formulario from "./components/Formulario";
import Pedido from "./components/Pedido";
import Buscador from "./components/Buscador";
import Navbar from "./components/Navbar";
// import ImgHome from "./img/img1.svg";

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

  const titulo =
    pedidos.length === 0 ? "No hay pedidos" : "Administra tus pedidos";

  return (
    <>
      <Router>
        <Navbar setPedidosEncontrados={setPedidosEncontrados} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="wrapper">
                <button className="btn-iniciar">
                  <h3>INICIAR</h3>
                </button>
                <footer class="footer">
                    <p>
                      Copyright © 2022. @francobrizuela All Rights Reserved
                    </p>
                </footer>
              </div>
            }
          ></Route>

          <Route
            path="/formulario"
            element={<Formulario crearPedido={crearPedido} pedidos={pedidos} />}
          ></Route>

          <Route
            path="/pedido"
            element={
              <div className="container">
                <h1>{titulo}</h1>
                <div className="container buscador">
                  <Buscador
                    pedidos={pedidos}
                    setPedidosEncontrados={setPedidosEncontrados}
                  />
                </div>
                {pedidosEncontrados.length > 0 ? (
                  <div className="container">
                    {pedidosEncontrados &&
                      pedidosEncontrados.map((e, index) => (
                        <Pedido
                          key={index}
                          pedido={e}
                          eliminarPedido={eliminarPedido}
                        />
                      ))}
                  </div>
                ) : (
                  pedidos.map((pedido) => (
                    <Pedido
                      key={pedido.id}
                      pedido={pedido}
                      eliminarPedido={eliminarPedido}
                    />
                  ))
                )}
              </div>
            }
          ></Route>

          {/* <Route
            path="/buscar"
            element={
              <div className="container buscador">
                <Buscador
                  pedidos={pedidos}
                  setPedidosEncontrados={setPedidosEncontrados}
                />
              </div>
            }
          ></Route> */}

          <Route path="/" component={<App />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
