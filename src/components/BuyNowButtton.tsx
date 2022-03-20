import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    outline: none;
    background: darkorange;
    color: "#222";
    border: none;
    padding: 10px;
    border-radius: 10px;
    align-self: flex-end;
    font-weight:bolder;
`
interface IButton {
    action: () => void
}
export const BuyNowButton:React.FC<IButton> = ({action}) => {
  return (
    <Button onClick={()=>action()}>BUY NOW</Button>
  )
}
