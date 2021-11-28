import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ crearPedido }) => {
  //state de pedidos
  const [pedido, actualizarPedido] = useState({
    cliente: "",
    celular: "",
    articulo: "",
    talle: "",
    fecha: "",
    hora: "",
    descripcion: "",
  });

  const [error, actualizarError] = useState(false);

  const actualizarState = (e) => {
    actualizarPedido({
      ...pedido,
      [e.target.name]: e.target.value,
    });
  };

  const { cliente, celular, articulo, talle, fecha, hora, descripcion } =
    pedido;

  const submitPedido = (e) => {
    e.preventDefault();

    if (
      cliente.trim() === "" ||
      celular.trim() === "" ||
      articulo.trim() === "" ||
      talle.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    actualizarError(false);

    pedido.id = uuidv4();

    crearPedido(pedido);

    actualizarPedido({
      cliente: "",
      celular: "",
      articulo: "",
      talle: "",
      fecha: "",
      hora: "",
      descripcion: "",
    });
  };

  return (
    <>
      <h2>Crear pedido</h2>

      {error ? (
        <p className="alerta-error">
          Es necesario completar los campos obligatorios (*)
        </p>
      ) : null}

      <form onSubmit={submitPedido}>
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

        <label>
          Celular del cliente <span>*</span>
        </label>
        <input
          type="text"
          name="celular"
          className="u-full-width"
          placeholder="Numero de celular"
          onChange={actualizarState}
          value={celular}
        />

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

        <label>Descripción</label>
        <textarea
          className="u-full-width"
          name="descripcion"
          onChange={actualizarState}
          value={descripcion}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Pedido
        </button>
      </form>
    </>
  );
};

export default Formulario;
