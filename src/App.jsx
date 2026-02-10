import logoCsi from "./images/logo_csi.png";
import reactLogo from "./images/react.svg";
import viteLogo from "./images/vite.svg";
import "./App.css";
import TextoToImagen from "./misComponentes/textoToImagen";

function App() {

  return (
    <>
      <div className="contenido">
        <p>Utilidad para poner una cabecera y un pie en una imágen y exportala</p>
        <hr />
      </div>
      <div className="imagenes">
        <img className="imgCSI" style={{ width: "32px" }} src={logoCsi} />&nbsp;&nbsp;&nbsp;&nbsp;
        <img className="imgReact" src={reactLogo} />&nbsp;&nbsp;&nbsp;&nbsp;
        <img className="imgVite" src={viteLogo} />
      </div>
      <hr />
      <TextoToImagen />
    </>
  );
}

export default App;
