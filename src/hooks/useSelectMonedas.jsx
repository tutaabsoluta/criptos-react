import styled from "@emotion/styled";

const Label = styled.label`
  color: #ffffff;
`;

const useSelectMonedas = (label, opciones) => {
  const selectMonedas = () => (
    <>
      <Label>{label}</Label>
      <select name="" id="">
        <option value="">Seleccione</option>
        {opciones.map( opcion => (
            <option 
                value={opcion.id} 
                key={opcion.id}
                >{opcion.nombre}
            </option>
        ))}
      </select>
    </>
  );

  return [selectMonedas];
};

export default useSelectMonedas;
