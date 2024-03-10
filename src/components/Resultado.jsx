import styled from "@emotion/styled";

const Resultado = ({ resultado }) => {
  const Contenedor = styled.div`
    color: #fff;
    font-family: "Latp", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
  `;

  const Texto = styled.p`
    font-size: 18px;
    span {
      font-weight: 700;
    }
  `;

  const Precio = styled.p`
    font-size: 24px;
    span {
      font-weight: 700;
    }
  `;

  const Imagen = styled.img `
    display: block;
    width: 150px;
  `

  const { PRICE, CHANGEPCT24HOUR, HIGHDAY, LOWDAY, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Imagen Criptomoneda"
      />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio mas alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio mas bajo del dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Ultima Actializacion: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
