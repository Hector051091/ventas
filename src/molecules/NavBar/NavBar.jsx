import React from "react";
import { Nav, Ul, Li, A } from "./StyledNavBar";

const NavBar = ({ menuItems, setCategorySelected }) => {
  return (
    <Nav>
      <Ul>
        {menuItems?.map((item, index) => (
          <Li key={index} onClick={() => setCategorySelected(item)}>
            {item}
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

export default NavBar;
