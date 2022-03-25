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
      <form onSubmit={submitPedido} className="mt-3 mb-3 " id="formulario">
        <div className="container-title bg-dark">
          <h1 className="title-second">Nuevo pedido</h1>
        </div>

        <div className="card">
          <div className="list-group d-flex flex-row flex-wrap">
            <div className="list-group-item w-50 list-group-item-action">
              <label className="form-label">
                Nombre cliente <span>*</span>
              </label>
              <input
                type="text"
                name="cliente"
                className="form-control"
                placeholder="Nombre"
                onChange={actualizarState}
                value={cliente}
              />
            </div>
            <div className="list-group-item w-50 list-group-item-action">
              <label className="form-label">
                Celular del cliente <span>*</span>
              </label>
              <input
                type="text"
                name="celular"
                className="form-control"
                placeholder="Celular del cliente"
                onChange={actualizarState}
                value={celular}
              />
            </div>
            <div className="list-group-item w-50 list-group-item-action">
              <label className="form-label">
                Talle <span>*</span>
              </label>
              <input
                type="text"
                name="talle"
                className="form-control"
                placeholder="Talle"
                onChange={actualizarState}
                value={talle}
              />
            </div>

            <div className="list-group-item w-50 list-group-item-action">
              <label className="form-label">Descripción</label>
              <textarea
                className="form-control"
                name="descripcion"
                onChange={actualizarState}
                value={descripcion}
              ></textarea>
            </div>

            <div className="list-group-item w-50 list-group-item-action">
              <label className="form-label">
                Proveedor <span>*</span>
              </label>
              <input
                type="text"
                name="proveedor"
                className="form-control"
                placeholder="Talle"
                onChange={actualizarState}
                value={proveedor}
              />
            </div>
            <div className="list-group-item w-50 list-group-item-action">
              <label className="form-label">
                Artículo <span>*</span>
              </label>
              <input
                type="text"
                name="articulo"
                className="form-control"
                placeholder="Artículo"
                onChange={actualizarState}
                value={articulo}
              />
            </div>
            <div className="list-group-item w-50 list-group-item-action">
              <label className="form-label">
                Fecha de entrega <span>*</span>
              </label>
              <input
                type="date"
                name="fecha"
                className="form-control"
                onChange={actualizarState}
                value={fecha}
              />
            </div>
            <div className="list-group-item w-50 list-group-item-action">
              <label className="form-label">
                Hora de entrega <span>*</span>
              </label>
              <input
                type="time"
                name="hora"
                className="form-control"
                onChange={actualizarState}
                value={hora}
              />
            </div>
            <div className="list-group-item w-50 list-group-item-action">
              <label className="form-label">
                Lugar de entrega <span>*</span>
              </label>
              <input
                type="text"
                name="lugar"
                className="form-control"
                onChange={actualizarState}
                value={lugar}
              />
            </div>
            <div className="list-group-item w-100 text-center">
              <button
                type="submit"
                className="btn btn-outline-success btnAddOrder"
              >
                AGREGAR
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* <div className="card card-2">
          <div className="mt-3 mb-3 ">
            <div className="">
              <h1>hola</h1>
            </div>
          </div>
        </div> */}
    </>
  );
};

export default Formulario;
