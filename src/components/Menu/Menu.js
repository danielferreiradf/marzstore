import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./MenuStyles";

export default function Menu({ menuIsOpen, toggleMenu }) {
  return (
    <Container menuIsOpen={menuIsOpen}>
      <Link to="/tshirts" onClick={() => toggleMenu()}>
        Tshirts
      </Link>
      <Link to="/shirts" onClick={() => toggleMenu()}>
        Shirts
      </Link>
      <Link to="/pants" onClick={() => toggleMenu()}>
        Pants
      </Link>
      <Link to="/jeans" onClick={() => toggleMenu()}>
        Jeans
      </Link>
      <Link to="/shorts" onClick={() => toggleMenu()}>
        Shorts
      </Link>
      <Link to="/jackets" onClick={() => toggleMenu()}>
        Jackets
      </Link>
    </Container>
  );
}
