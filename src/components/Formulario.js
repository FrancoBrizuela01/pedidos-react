import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
      orden: pedidos[pedidos.length - 1].orden + 1,
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
        <p className="alerta-error">
          Es necesario completar los campos obligatorios (*)
        </p>
      ) : null}

      <form onSubmit={submitPedido}>
        <h2>Crear pedido</h2>
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
          <div class="four columns">
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

          <div class="four columns">
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

          <div class="four columns">
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
        </div>

        <div className="row">
          <div class="four columns">
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

          <div class="four columns">
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

          <div class="four columns">
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

        <div className="row">
          <div className="four columns offset-by-four ">
            <button type="submit" className="u-full-width button-primary ">
              Agregar Pedido
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Formulario;
