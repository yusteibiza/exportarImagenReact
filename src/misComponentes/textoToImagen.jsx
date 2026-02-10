import { useState } from "react";
import logoCsi from "../images/logo_csi.png?url";
import logoReact from "../images/react.svg?url";
import logoVite from "../images/vite.svg?url";

function TextoToImagen() {
  const [imagen, setImagen] = useState(logoCsi);
  const [cabecera, setCabecera] = useState('');
  const [pie, setPie] = useState('');

  return (
    <div>
      <br />
      <select
        id="selectImagenes"
        onChange={(e) => {
          setImagen(e.target.value);
        }}
      >
        <option value={logoCsi}>CSI</option>
        <option value={logoReact}>React</option>
        <option value={logoVite}>Vite</option>
      </select>
      <br />
      <br />

      <div id="cabPie">
        <span style={{ visibility: cabecera === '' ? 'hidden' : 'visible' }}>
          {cabecera}
        </span>

        <div style={{ marginTop: "5px" }}>
          <img
            key={imagen}
            src={imagen}
            alt="Logo"
            width="120"
            style={{ transition: "all 1.4s ease-in-out", userSelect: "none" }}
          />
        </div>

        <span style={{ visibility: pie === '' ? 'hidden' : 'visible' }}>
          {pie}
        </span>
      </div>

      <br />
      <div id="textos">
        <label for="cabecera">Cabecera </label>
        <input
          onChange={(e) => {
            setCabecera(e.target.value);
            OcultarTextos()
          }}
          type="text"
          id="cabecera"
          placeholder="Cabecera de la imagen"
        ></input>
        <button
          id="btnBorrarCabecera"
          onClick={() => {
            {
              setCabecera("");
              const cabecera = document.getElementById("cabecera");
              cabecera.value = "";
              cabecera.focus();
            }
            setPie("");
          }}
        >&nbsp;X&nbsp;
        </button>
      </div>
      <div id="textos">
        <label id="fpie" for="pie">Pie</label>
        <input
          onChange={(e) => {
            setPie(e.target.value);
            OcultarTextos()
          }}
          type="text"
          id="pie"
          placeholder="Pie de la imagen"
        ></input>
        <button
          id="btnBorrarPie"
          onClick={() => {
            {
              const pie = document.getElementById("pie");
              pie.value = "";
              pie.focus();
            }
            setPie("");
          }}
        >&nbsp;X&nbsp;
        </button>
      </div>
      <br />
      <button onClick={() => {
        const btnExp = document.createElement('a');
        btnExp.href = imagen;
        btnExp.target = "_blank"
        document.body.appendChild(btnExp);
        btnExp.click();
        document.body.removeChild(btnExp);
      }}>Exportar</button>
    </div>
  );
}

export default TextoToImagen;
