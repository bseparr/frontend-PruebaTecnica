import React, { useState } from 'react'
import { Tablas } from '../../Components/Tablas'
import { Filtros } from '../../Components/Filtros'
import { Contenedor, CardFiltros, CardTabla } from './styles'

export const Home = () => {
  const [bodegas, setBodegas] = useState('')
  const [marcas, setMarcas] = useState('')
  const [modelos, setModelos] = useState('')
  return (
    <Contenedor>
      <CardFiltros>
      <Filtros titulo='Seleccione bodega' url='bodega/obtenerbodega' setVariable={setBodegas} variable = {bodegas}/>
      <Filtros titulo='Seleccione marca' url='marca/obtenermarca' setVariable={setMarcas} variable = {marcas}/>
      {
        marcas &&
        <>
          <Filtros titulo='Seleccione modelo' url={'modelo/obtenermodelo?id_marca=' + marcas } setVariable={setModelos} variable={marcas} />

        </>
      }
      </CardFiltros>{/* <Filtros titulo='modelos' url='modelo/obtenermodelo' setVariable={setModelos} variable = {modelos}/> */}
      <CardTabla>
      <Tablas bodegaid={bodegas} marcaid={marcas} modeloid={modelos} />
      </CardTabla>
      </Contenedor>
  )
}
