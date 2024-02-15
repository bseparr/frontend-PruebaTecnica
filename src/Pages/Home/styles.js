import styled from "styled-components";

export const Contenedor = styled.div`
background-color: cornflowerblue;
display: flex;
align-items: center;
justify-content: start;
flex-direction: column;
width: 100vw;
height: 100vh;
`
export const CardFiltros = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: aliceblue;
padding: 50px;
border-radius: 10px;
margin-top: 15px;
max-height: 500px;
min-width: 610px;
`

export const CardTabla = styled.div`
background-color: aliceblue;
padding: 50px;
border-radius: 10px;
margin-top: 15px;
max-height: 700px;
overflow-y: scroll;
min-width: 610px;
`