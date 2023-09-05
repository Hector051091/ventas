import styled from "styled-components";

export const Nav = styled.div`
  padding: 10px;
  height: 5rem;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
`;

export const Li = styled.li`
  margin-right: 15px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  margin: 0;
`;
