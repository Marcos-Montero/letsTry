import React from 'react'
import { useSelector } from 'react-redux'
import { OrderCard } from '../components/OrderCard'

export const Orders = () => {
  const ordersList = useSelector((state: any)=>state.orders.value)

  return (
    <>
    <h1>Orders</h1>
    {
      ordersList.map((v: any,i: number)=>(
        <OrderCard
          products={v.products}
          price={v.price}
          date={v.date}
        />
        ))
      }
      </>
  )
}
