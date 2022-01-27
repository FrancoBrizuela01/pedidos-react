import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  border-bottom: 1px solid var(--second-color);
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: inherit;
  padding: 0.5rem 1.5rem;
  padding-top: 30px;

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavbarLogo = styled.div`
  > a {
    font-weight: bold;
    font-size: 2.4rem;
    text-decoration: none;
    letter-spacing: 1px;
    -webkit-text-stroke: 1px rgb(3, 3, 3);
    -webkit-text-fill-color: var(--first-color);
  }
`;

const NavbarItem = styled.li`
  margin-left: 5rem;

  @media only screen and (max-width: 768px) {
    margin: 2.5rem 0;
  }
`;

const Navbar = ({ setPedidosEncontrados }) => {
  return (
    <>
      <Header>
        <NavbarContainer>
          <NavbarLogo>
            <a href="/">CREADOR DE PEDIDOS</a>
          </NavbarLogo>
          <ul className="nav-menu">
            <NavbarItem>
              <Link to="/formulario" className="nav-link">
                Crear pedido
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                to="/pedido"
                className="nav-link"
                onClick={() => setPedidosEncontrados([])}
              >
                Ver pedidos
              </Link>
            </NavbarItem>
          </ul>
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </NavbarContainer>
      </Header>
    </>
  );
};

export default Navbar;
