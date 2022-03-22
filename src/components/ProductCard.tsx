import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { v4 } from 'uuid'
import { addToCart } from '../db/slices'
import { BuyButton } from './BuyButton'
import { ICard } from './types'


const Card = styled.div`
  border-radius: 20px;
  height: 200px;
  width: 100%;
  box-shadow: 1px 1px 3px gray;
  margin: 10px;
  display: flex;
  overflow: hidden;
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
export const ProductCard: React.FC<ICard> = ({
  id,
  name,
  description,
  img,
  price,
}) => {
  const dispatch = useDispatch()
  function btnHandle() {
    dispatch(
      addToCart({
        id: v4(),
        name,
        description,
        img,
        price,
      })
    )
  }
  return (
    <Card>
      <ImgContainer>
        <Imagen src={img} alt={`picture of ${name}`} />
      </ImgContainer>
      <MainContainer>
        <h3>{name}</h3>
        <p>{description}</p>
        <BottomContainer>
          <h4>{price} €</h4>
          <BuyButton action={btnHandle} />
        </BottomContainer>
      </MainContainer>
    </Card>
  )
}
