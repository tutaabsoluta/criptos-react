import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #ffffff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`

const Select = styled.select `
    width: 100%;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
`

const useSelectMonedas = (label, opciones) => {
  
    const [state, setState] = useState('')
    const selectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={ e => setState(e.target.value)}
      >
        <option value="">Seleccione</option>
        {opciones.map((opcion) => (
          <option value={opcion.id} key={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  // El State es lo que hayamos seleccionado del Select
  return [state, selectMonedas];
};

export default useSelectMonedas;
