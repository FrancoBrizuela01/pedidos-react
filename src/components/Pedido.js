import React from "react";

const Pedido = ({ pedido, eliminarPedido }) => {
  const msj = "Hola como estas? soy ale ya te agende!!";
  const url = `https://wa.me/54${pedido.celular}?text=${msj}`;

  return (
    <div class="row">
      <div class="eight columns offset-by-two">
        <div className="pedido" id="pedido">
          <div class="seven columns">
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
              Proveedor:<span> {pedido.proveedor}</span>
            </p>
          </div>
          <div class="five columns">
            <p>
              Fecha de entrega:<span> {pedido.fecha}</span>
            </p>
            <p>
              Hora de entrega:<span> {pedido.hora}</span>
            </p>
            <p>
              Lugar de entrega:<span> {pedido.hora}</span>
            </p>
          </div>
          <div className="row">
            <div className="seven columns">
              <p>
                Descripción:
                <span className="desc"> {pedido.descripcion}</span>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="four columns  ">
              <button
                className="button eliminar u-full-width"
                onClick={() => eliminarPedido(pedido.id)}
              >
                Eliminar &times;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pedido;
