import { Chip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ICard, ICardOrder } from './types'

const Card = styled.div`
  border-radius: 20px;
  min-height: 200px;
  width: 100%;
  max-width: 300px;
  box-shadow: 1px 1px 3px gray;
  margin: 10px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 20px;
`
const Imagen = styled.img`
  width: 100%;
  height: auto;
`
const ImgContainer = styled.div`
  margin: -10px 20px -10px -10px;
  display: flex;
  align-items: center;
  height: 200px;
  justify-content: center;
  overflow: hidden;
  width: 350px;
  height: 200px;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 0;
  gap: 1em;
`


export const OrderCard: React.FC<ICardOrder> = ({ products, price, date }) => {
  const [filteredArray, setFilteredArray] = useState([])
  useEffect(() => {
    setFilteredArray(products.reduce(
      (acc: any, v: any): any => {
        if (!(acc.includes(v))) return [...acc, v]
      },
      ['']
    ))
    }, [products]
    )
    return (
  <Card>
    <MainContainer>
        {filteredArray.map((v, i) => (
          <Chip key={i} label={v} variant="outlined"/>
          ))}
          <Chip color="primary" label={`Importe: ${price} €`} />
          <Chip label={new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'long' }).format(date)} color="secondary" variant="outlined"/>
    </MainContainer>
  </Card>
    )
}

