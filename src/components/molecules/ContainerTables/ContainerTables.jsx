import React from 'react'
import { TableContainerStyle } from './ContainerTablesStyles'

const ContainerTables = ({children}) => {


    /*
           VER API CONTEXT PARA PASAR PROPS DE ESTILOS

           isAll = TRUE / FALSE
    */


  return (
    <TableContainerStyle isAll={false}>
        {children}
    </TableContainerStyle>
  )
}

export default ContainerTables