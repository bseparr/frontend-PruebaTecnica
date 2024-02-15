import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Th, Td } from './styles';

export const Tablas = ({
      bodegaid, marcaid, modeloid
}) => {
    const [data, setData] = useState([]);
    
useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/dispositivo/obtenerdispositivo?id_bodega='+bodegaid+'&id_marca='+marcaid+'&id_modelo='+modeloid)
  .then(function (response) {
    // manejar respuesta exitosa
    setData(response.data);
    console.log('http://127.0.0.1:8000/api/dispositivo/obtenerdispositivo?id_bodega='+bodegaid+'&id_marca='+marcaid+'&id_modelo='+modeloid);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })

      
}, [bodegaid, marcaid, modeloid])


  return (
    <table>
    <tr>
      <Th>Id</Th>
      <Th>Dispositivo</Th>
      <Th>Marca</Th>
      <Th>Modelo</Th>
      <Th>Bodega</Th>
    </tr>
    {
      
      data && data.map(item => (<tr>
        <Td>{item.id}</Td>
        <Td>{item.nombre}</Td>
        <Td>{item.modelo.marca.nombre}</Td>
        <Td>{item.modelo.nombre}</Td>
        <Td>{item.bodega.nombre}</Td>
      </tr>))

    }

  </table>
  )
}
