import styled from "@emotion/styled";

const Texto = styled.div `
    background-color: #b7332cbc;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
    border-radius: 5px;
    letter-spacing: 1px;

`

const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error