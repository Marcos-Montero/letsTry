import { UsbOutlined } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types";
import { v4 as uuid } from "uuid";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [
      {
        id: uuid(),
        name: "Secador de Pelo | Braun Satin Hair 5 IONTEC",
        description:
          "Producto inimaginable. Un sinpar. Seca como él solo y acondiciona todo a tu gusto. 700W de maquinón.",
        img: "https://tinyurl.com/y8t93gyc",
        price: 17.8,
      },
      {
        id: uuid(),
        name: "Bombilla",
        description:
          "Producto inimaginable. Un sinpar. Seca como él solo y acondiciona todo a tu gusto. 700W de maquinón.",
        img: "https://tinyurl.com/y9dav753",
        price: 7.3,
      },
      {
        id: uuid(),
        name: "Peine",
        description:
          "Producto inimaginable. Un sinpar. Seca como él solo y acondiciona todo a tu gusto. 700W de maquinón.",
        img: "https://tinyurl.com/ya76pugg",
        price: 1.9,
      },
      {
        id: uuid(),
        name: "Lámpara",
        description:
          "Producto inimaginable. Un sinpar. Seca como él solo y acondiciona todo a tu gusto. 700W de maquinón.",
        img: "https://tinyurl.com/yaagwe4o",
        price: 52.4,
      },
    ] as IProduct[],
  },
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
// acciones
export const { addToCart } = productsSlice.actions;
// reducer
export const productsReducer = productsSlice.reducer;
