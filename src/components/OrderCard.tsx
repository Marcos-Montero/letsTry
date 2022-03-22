import React from 'react'
import styled from 'styled-components'
import { ICard, ICardOrder } from './types'

const Card = styled.div`
  border-radius: 20px;
  min-height: 200px;
  width: 100%;
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
`
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const OrderCard: React.FC<ICardOrder> = ({ products, price, date }) => {
    
    return (
  <Card>
    <h3>Importe: {price} €</h3>
    <BottomContainer>
      <h4>Fecha: {new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'long' }).format(date)}</h4>
    </BottomContainer>

    <MainContainer>
      <ul>
        {products.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </MainContainer>
  </Card>
    )
}

