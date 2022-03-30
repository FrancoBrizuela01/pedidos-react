import React from "react";
import Buscador from "./Buscador";

const Navbar = ({ setPedidosEncontrados, pedidos }) => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/" className="title">
            <span className="firstletter">C</span>lothing
            <span className="firstletter">O</span>rders
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#formulario" className="nav-link">
                  Crear pedido
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#root"
                  className="nav-link"
                  onClick={() => setPedidosEncontrados([])}
                >
                  Ver pedidos
                </a>
              </li>
            </ul>
            <Buscador
              pedidos={pedidos}
              setPedidosEncontrados={setPedidosEncontrados}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
