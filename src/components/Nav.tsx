import React from "react";
import {
  HomeOutlined,
  SettingsApplicationsOutlined,
  LanguageOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavSt = styled.nav`
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 0 30px;
    height: 60px;
    margin: 0;
    z-index: 2;
`
const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: "#FFF";
    gap: 2em;
`
const Title = styled.span`
    font-weight: bolder;
`
export const Nav = () => {
  return (
    <NavSt>
        <Title>Buy.</Title>
        <span></span>
      <Icons>
        <Link to="/">
          <HomeOutlined />
        </Link>
        <Link to="/carrito">
          <SettingsApplicationsOutlined />
        </Link>
        <Link to="/orders">
          <LanguageOutlined />
        </Link>
      </Icons>
    </NavSt>
  );
};
