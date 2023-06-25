import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const StyledHeader = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1240px;
  height: 60px;
  padding: 0 24px;
  margin: 0 auto;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 16px;
`;
export const NavItem = styled(NavLink)`
  font-weight: 600;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 24px;
  color: #ffffff;
  text-transform: uppercase;
  &:hover {
    color: #ae7be3;
  }
  &.active {
    color: yellow;
  }
`;
