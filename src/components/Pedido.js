import React from "react";

const Pedido = ({ pedido, eliminarPedido }) => {
  const msj = "Hola como estas? soy ale ya te agende!!";
  const url = `https://wa.me/54${pedido.celular}?text=${msj}`;

  return (
    <div className="pedido">
      <p>
        Cliente:<span> {pedido.cliente} </span>
      </p>
      <p>
        Celular:<span> {pedido.celular}</span>
        <a
          href={url}
          class="whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enviar WhatsApp
        </a>
      </p>
      <p>
        Articulo:<span> {pedido.articulo}</span>
      </p>
      <p>
        Talle:<span> {pedido.talle}</span>
      </p>
      <p>
        Fecha de entrega:<span> {pedido.fecha}</span>
      </p>
      <p>
        Hora de entrega:<span> {pedido.hora}</span>
      </p>
      <p>
        Descripción:<span> {pedido.descripcion}</span>
      </p>

      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarPedido(pedido.id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

export default Pedido;
