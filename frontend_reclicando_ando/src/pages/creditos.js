import React from "react";
import "../Style/styles.css";
import fondoCreditos from "../imagenes/fondoCreditos.jpg";
import flechaAtrasCredito from "../imagenes/flechaAtrasCreditos.jpg";

class creditos extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoCreditos})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <button class="flechaAtrasCredito" type="submit">
              <a href="menu">
                <img
                  class="rounded mx-auto d-block flechaAtrasCredito"
                  src={flechaAtrasCredito}
                  alt="x"
                />
              </a>
            </button>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4">
            <h1 class="tituloCreditos">
              <strong>CRÉDITOS</strong>
            </h1>

            <h2>Caterine Álvarez Hernández</h2>
            <br></br>
            <h2>Daniela Grajales Ocampo</h2>
            <br></br>
            <h2>Yeraldin Bedoya Usuga</h2>
            <br></br>
            <h2> Nelson Andres Valoyes</h2>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default creditos;
