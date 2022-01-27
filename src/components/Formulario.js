import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const AlertError = styled.p`
  background-color: red;
  color: white;
  padding: 1rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
`;

const Form = styled.form`
  border: 1px solid rgba(223, 212, 212, 0.246);
  background-color: rgba(14, 14, 13, 0.753);
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 50px;
  height: 62rem;
`;

const DivBtnPrimaryForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const BtnPrimary = styled.button`
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &&::after {
    content: "";
    background-color: var(--first-color);
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &&:hover::after {
    top: 0px;
    left: 0px;
  }

  > h3 {
    font-family: "Noto Sans", sans-serif;
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 1px;
  }
`;

const Formulario = ({ crearPedido, pedidos }) => {
  //state de pedidos
  const [pedido, actualizarPedido] = useState({
    cliente: "",
    celular: "",
    articulo: "",
    talle: "",
    proveedor: "",
    fecha: "",
    hora: "",
    lugar: "",
    descripcion: "",
  });

  const [error, actualizarError] = useState(false);

  const actualizarState = (e) => {
    actualizarPedido({
      ...pedido,
      [e.target.name]: e.target.value,
    });
  };

  const {
    cliente,
    celular,
    articulo,
    talle,
    proveedor,
    fecha,
    hora,
    lugar,
    descripcion,
  } = pedido;

  const submitPedido = (e) => {
    e.preventDefault();

    if (
      cliente.trim() === "" ||
      celular.trim() === "" ||
      articulo.trim() === "" ||
      talle.trim() === "" ||
      proveedor.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      lugar.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    actualizarError(false);

    actualizarPedido({
      ...pedido,
      id: uuidv4(),
    });

    console.log(pedidos[pedidos.length - 1]);

    crearPedido(pedido);

    actualizarPedido({
      cliente: "",
      celular: "",
      articulo: "",
      talle: "",
      proveedor: "",
      fecha: "",
      hora: "",
      lugar: "",
      descripcion: "",
    });
  };

  return (
    <>
      {error ? (
        <AlertError>
          Es necesario completar los campos obligatorios (*)
        </AlertError>
      ) : null}

      <Form onSubmit={submitPedido}>
        <h2>CREAR PEDIDO</h2>
        <div class="row">
          <div class="six columns">
            <label>
              Nombre cliente <span>*</span>
            </label>
            <input
              type="text"
              name="cliente"
              className="u-full-width"
              placeholder="Nombre cliente"
              onChange={actualizarState}
              value={cliente}
            />
          </div>

          <div class="six columns">
            <label>
              Celular del cliente <span>*</span>
            </label>
            <input
              type="text"
              name="celular"
              className="u-full-width"
              placeholder="Celular del cliente"
              onChange={actualizarState}
              value={celular}
            />
          </div>
        </div>

        <div className="row">
          <div class="six columns">
            <label>
              Artículo <span>*</span>
            </label>
            <input
              type="text"
              name="articulo"
              className="u-full-width"
              placeholder="Artículo"
              onChange={actualizarState}
              value={articulo}
            />
          </div>

          <div class="six columns">
            <label>
              Talle <span>*</span>
            </label>
            <input
              type="text"
              name="talle"
              className="u-full-width"
              placeholder="Talle"
              onChange={actualizarState}
              value={talle}
            />
          </div>
        </div>

        <div className="row">
          <div class="six columns">
            <label>
              Proveedor <span>*</span>
            </label>
            <input
              type="text"
              name="proveedor"
              className="u-full-width"
              placeholder="Talle"
              onChange={actualizarState}
              value={proveedor}
            />
          </div>
          <div class="six columns">
            <label>
              Fecha de entrega <span>*</span>
            </label>
            <input
              type="date"
              name="fecha"
              className="u-full-width"
              onChange={actualizarState}
              value={fecha}
            />
          </div>
        </div>

        <div className="row">
          <div class="six columns">
            <label>
              Hora de entrega <span>*</span>
            </label>
            <input
              type="time"
              name="hora"
              className="u-full-width"
              onChange={actualizarState}
              value={hora}
            />
          </div>

          <div class="six columns">
            <label>
              Lugar de entrega <span>*</span>
            </label>
            <input
              type="text"
              name="lugar"
              className="u-full-width"
              onChange={actualizarState}
              value={lugar}
            />
          </div>
        </div>

        <div className="row">
          <div className="six columns">
            <label>Descripción</label>
            <textarea
              className="u-full-width"
              name="descripcion"
              onChange={actualizarState}
              value={descripcion}
            ></textarea>
          </div>
        </div>

        <DivBtnPrimaryForm>
          <BtnPrimary
            type="submit"
            // className="btn-primary"
            styles="margin-top: 1px"
          >
            <h3>Agregar Pedido</h3>
          </BtnPrimary>
        </DivBtnPrimaryForm>
      </Form>
    </>
  );
};

export default Formulario;
