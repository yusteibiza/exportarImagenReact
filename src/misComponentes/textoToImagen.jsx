import { useState } from "react";
import logoCsi from "../images/logo_csi.png?url";
import logoReact from "../images/react.svg?url";
import logoVite from "../images/vite.svg?url";
import html2canvas from "html2canvas";

function TextoToImagen() {
  const [imagen, setImagen] = useState(logoCsi);
  const [cabecera, setCabecera] = useState("");
  const [pie, setPie] = useState("");

 async function exportAsImage(elem) {
    const canvas = await html2canvas(elem);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imagen.split('/').pop());
  };

  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;

    fakeLink.href = blob;
    document.body.appendChild(fakeLink); // Añadir al DOM
    fakeLink.click(); // Ejecutar el clic
    document.body.removeChild(fakeLink); // Limpiar
  };

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
        <span style={{ visibility: cabecera === "" ? "hidden" : "visible" }}>
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

        <span style={{ visibility: pie === "" ? "hidden" : "visible" }}>
          {pie}
        </span>
      </div>

      <br />
      <div id="textos">
        <label for="cabecera">Cabecera </label>
        <input
          onChange={(e) => {
            setCabecera(e.target.value);
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
        >
          &nbsp;X&nbsp;
        </button>
      </div>
      <div id="textos">
        <label id="fpie" for="pie">
          Pie
        </label>
        <input
          onChange={(e) => {
            setPie(e.target.value);
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
        >
          &nbsp;X&nbsp;
        </button>
      </div>
      <br />
      <button
        onClick={exportAsImage(document.getElementById('cabPie'))}
      >
        Exportar
      </button>
    </div>
  );
}

export default TextoToImagen;
