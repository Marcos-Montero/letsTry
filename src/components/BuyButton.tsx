import React from 'react'
import styled from 'styled-components'
import { IButton } from './types'

const Button = styled.button`
    outline: none;
    background: orange;
    color: "#222";
    border: none;
    padding: 10px;
    border-radius: 10px;
    align-self: flex-end;
    font-weight:bolder;
    &:hover {
      background: #f1c26a;
    }
    &:active {
      background: #da9f31;
    }

`
export const BuyButton:React.FC<IButton> = ({action}) => {
  return (
    <Button onClick={()=>action()}>Buy</Button>
  )
}
