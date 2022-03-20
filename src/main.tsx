import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Carrito, Home, Orders } from "./views";
import { Nav } from "./components/Nav";
import styled from "styled-components";
const ContentBG = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  z-index: 1;
  display: flex;
  justify-content: center;
  background: #333;
  padding-top: 1%;
  margin: 0;
`;
const Content = styled.div`
  background: white;
  padding: 5em;
  min-width: 300px;
  @media (min-width: 758px) {
    width: 600px;
  }
  @media (min-width: 1080px) {
    width: 900px;
  }
  @media (min-width: 1980px) {
    width: 1500px;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <ContentBG>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </Content>
      </ContentBG>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
