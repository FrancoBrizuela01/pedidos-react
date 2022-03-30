import React from "react";

const Pedido = ({ pedido, eliminarPedido, background, background2 }) => {
  const msj = `DATOS DEL PEDIDO:  %0D%0A PEDIDO: ${pedido.articulo}, TALLE: ${pedido.talle}, LUGAR DE ENTREGA: ${pedido.lugar}, FECHA DE ENTREGA: ${pedido.fecha} a las ${pedido.hora} horas`;

  const url = `https://wa.me/54${pedido.celular}?text=${msj}`;

  return (
    <div class="mb-3">
      <div
        className={` card ${background2 ? background2 : null}  `}
        id="pedido"
      >
        <div className="card-body">
          <div className="list-group list-group-horizontal">
            <div className="list-group-item">
              <p>
                CLIENTE:<span> {pedido.cliente} </span>
              </p>
            </div>

            <div className="list-group-item">
              <p>
                CELULAR:
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
                ARTICULO:<span> {pedido.articulo}</span>
              </p>
            </div>
            <div className="list-group-item">
              <p>
                TALLE:<span> {pedido.talle}</span>
              </p>
            </div>
            <div className="list-group-item">
              <p>
                PROVEEDOR:<span> {pedido.proveedor}</span>
              </p>
            </div>
            <div className="list-group-item">
              <p>
                DESCRIPCION:
                <span className=""> {pedido.descripcion}</span>
              </p>
            </div>
          </div>

          <div className="list-group list-group-horizontal">
            <div className="list-group-item">
              <p>
                FECHA DE ENTREGA:<span> {pedido.fecha}</span>
              </p>
            </div>
            <div className="list-group-item">
              <p>
                HORA DE ENTREGA:<span> {pedido.hora}</span>
              </p>
            </div>
            <div className="list-group-item">
              <p>
                LUGAR DE ENTREGA:<span> {pedido.lugar}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <button
                className="btn btn-outline-success btn-delete"
                onClick={() => eliminarPedido(pedido.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pedido;
