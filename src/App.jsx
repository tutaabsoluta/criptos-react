import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Spinner from "./components/Spinner";
import Resultado from "./components/Resultado";
import ImagenCripto from "./img/imagen-criptos.png";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin: 80px 0 50px 0;
  font-size: 34px;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 6px;
    background: #66a2fe;
    margin: 0 auto;
    margin-top: 20px;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {

        setCargando(true);
        setResultado({});

        const { moneda, criptomoneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        // Obtenemos los resultados de forma dinamica segun la seleccion de los selects
        setResultado(resultado.DISPLAY[criptomoneda][moneda]);

        setCargando(false);
      };
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <>
      <Contenedor>
        <Imagen src={ImagenCripto} alt="Imagen Cripto" />

        <div>
          <Heading>Cotiza Criptomonedas al Instante</Heading>

          <Formulario setMonedas={setMonedas} />

          {/* Cuando tengamos una cotizacion en el State se muestra el componente */}
          {cargando && <Spinner/>}

          {resultado.PRICE && <Resultado resultado={resultado} />}
        </div>
      </Contenedor>
    </>
  );
}

export default App;
