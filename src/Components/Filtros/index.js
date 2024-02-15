import React, { useState, useEffect } from 'react'
import axios from 'axios'  
import { Select, Separador } from './styles'

export const Filtros = ({ titulo, url, setVariable, variable = '' }) => {
    const [data, setData] = useState([])
    useEffect(() => {
      if (titulo == 'Seleccione modelo') setVariable('');
      axios.get('http://127.0.0.1:8000/api/'+url)
  .then(function (response) {
    // manejar respuesta exitosa
    setData(response.data);
    console.log(data);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  
    }, [variable])

    return (
    <Separador>
        <Select onChange={(event) => setVariable(event.target.value)}>
        <option value={''}>{titulo}</option>
        {
            data.map(item => (<option value={item.id} key={item.id}>{item.nombre}</option>))
        }</Select>
    </Separador>
    )
}