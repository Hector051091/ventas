import React from "react";
import { Nav, Ul, Li, Title } from "./StyledNavBar";

const Header = ({ menuItems, setCategorySelected }) => {
  return (
    <Nav>
      <Ul>
        <Li>
          <Title>Productos</Title>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Header;
