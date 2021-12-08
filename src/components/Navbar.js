import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  

  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="nav-logo">
            <a href="/formulario">Creador de Pedidos</a>
          </div>
          <ul className="nav-menu">
            {/* <li className="nav-item">
              <Link to="/formulario" className="nav-link">
                Crear pedido
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/pedido" className="nav-link">
                Ver pedidos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/buscar" className="nav-link">
                Buscar pedidos
              </Link>
            </li>
          </ul>
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
