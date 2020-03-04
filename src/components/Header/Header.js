import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiAlignJustify, FiX } from "react-icons/fi";

import Menu from "../Menu/Menu";

import Logo from "../../assets/images/logo.svg";
import { Container, Cart, ContainerFooter } from "./HeaderStyles";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <Container>
        <div onClick={() => toggleMenu()}>
          {menuIsOpen ? <FiX size={36} /> : <FiAlignJustify size={36} />}
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

      <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
    </>
  );
}
