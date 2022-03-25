import React from "react";

const Pedido = ({ pedido, eliminarPedido }) => {
  const msj = `DATOS DEL PEDIDO:  PEDIDO: ${pedido.articulo}, TALLE: ${pedido.talle}, LUGAR DE ENTREGA: ${pedido.lugar}, FECHA DE ENTREGA: ${pedido.fecha} a las ${pedido.hora} horas`;

  const url = `https://wa.me/54${pedido.celular}?text=${msj}`;

  return (
    <div class="mb-3">
      <div className="card" id="pedido">
        <div className="card-body">
          <div className="list-group list-group-horizontal">
            <div className="list-group-item">
              <p>
                CLIENTE:<span> {pedido.cliente} </span>
              </p>
            </div>

            <div className="list-group-item">
              <p>
                Celular:
                <span>
                  {" "}
                  <a
                    href={url}
                    class="whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {pedido.celular}
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </a>
                </span>
              </p>
            </div>
            <div className="list-group-item">
              <p>
                Articulo:<span> {pedido.articulo}</span>
              </p>
            </div>
            <div className="list-group-item">
              <p>
                Talle:<span> {pedido.talle}</span>
              </p>
            </div>
            <div className="list-group-item">
              <p>
                Proveedor:<span> {pedido.proveedor}</span>
              </p>
            </div>
            <div className="list-group-item">
              <p>
                Descripción:
                <span className=""> {pedido.descripcion}</span>
              </p>
            </div>
          </div>

          <div className="list-group list-group-horizontal">
            <div className="list-group-item">
              <p>
                Fecha de entrega:<span> {pedido.fecha}</span>
              </p>
            </div>
            <div className="list-group-item">
              <p>
                Hora de entrega:<span> {pedido.hora}</span>
              </p>
            </div>
            <div className="list-group-item">
              <p>
                Lugar de entrega:<span> {pedido.lugar}</span>
              </p>
            </div>
          </div>
        </div>
        <button
          className="btn btn-outline-success btn-delete"
          onClick={() => eliminarPedido(pedido.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Pedido;
