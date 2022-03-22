import React from "react";
import { ProductCard } from "../components/ProductCard";
import { useSelector } from "react-redux";
export const Home = () => {
  const productList = useSelector((state: any)=>state.products.value)
  return (
    <div className="container">
      <h1>Home</h1>
      {
          productList.map((v: any, i: number)=>(
            <ProductCard
                key={i}
                name={v.name}
                description={v.description}
                img={v.img}
                price={v.price}
            />
          ))
      }
    </div>
  );
};
