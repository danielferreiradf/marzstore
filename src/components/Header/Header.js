import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiAlignJustify } from "react-icons/fi";

import Logo from "../../assets/images/logo.svg";

import { Container, Cart, ContainerFooter } from "./HeaderStyles";

export default function Header() {
  return (
    <>
      <Container>
        <div>
          <FiAlignJustify size={36} />
        </div>

        <Link to="/">
          <img src={Logo} alt="MarzStore Logo" />
        </Link>

        <Cart to="/cart">
          <div>
            <strong>My Cart</strong>
            <span>0 itens</span>
          </div>
          <FiShoppingCart size={36} />
        </Cart>
      </Container>

      <ContainerFooter>
        <p>free delivery on all orders</p>
        <p>free returns</p>
      </ContainerFooter>
    </>
  );
}
