import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import Error from "./Error";
import { useState, useEffect } from "react";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 30px;
  &:hover {
    cursor: pointer;
    background-color: #7a7dfe;
    transition: background-color 0.3s ease;
  }
`;

const Formulario = () => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  const [criptomoneda, SelectCriptoMoneda] = useSelectMonedas(
    "Elige tu Criptomoneda",
    criptos
  );

  // Cuando el componente este listo hace la llamada a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        const arrayCriptos = resultado.Data.map((cripto) => {
          const objeto = {
            id: cripto.CoinInfo.Name,
            nombre: cripto.CoinInfo.FullName,
          };
          return objeto;
        });
        setCriptos(arrayCriptos);
      } catch (error) {
        console.log(error);
      }
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptomoneda].includes("")) {
      setError(true);
      return
    }

    setError(false);
  };
  return (
    <>
      {error && <Error>Debes seleccionar las dos opciones</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptoMoneda />

        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;

// NOTA: Al usar el Hook, como tenemos Array Destructuring el retorno es por indice, por esto es que podemos extraer los elementos con otros nombres, esto no es posible en object destrcuturing
