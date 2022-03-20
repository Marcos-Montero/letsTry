import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BuyNowButton } from '../components/BuyNowButtton'
import { CartCard } from '../components/CartCard'
import { addOrder } from '../db/slices'

export const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [productsList, setProductsList] = useState([])
  const cartProducts = useSelector((state: any)=> state.cart.value)
  const ordersList = useSelector((state: any) => state.orders.value)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    setProductsList(cartProducts.reduce((list: string[], v: any)=>[...list, v.name],[]))
    console.log(productsList)
    setTotalPrice(cartProducts.reduce((sum: number, v: any)=> (sum+v.price), 0))
  }, [cartProducts])
  const sendOrder = () =>{
    dispatch(addOrder({
      products: [...productsList],
      price: totalPrice
    }))
  }
  return (
    <>
      <h1>Cart {totalPrice} €</h1>
      {
        cartProducts.map((v:any,i:number)=>(
          <CartCard
            id={v.id}
            name={v.name}
            description={v.description}
            img={v.img}
            price={v.price}
            />
          ))
      }
      <BuyNowButton action={sendOrder}/>
    </>
  )
}
