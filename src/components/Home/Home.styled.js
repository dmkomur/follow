import styled from "styled-components";
import { GiFlyingFox } from "react-icons/gi";
import { Link } from "react-router-dom";

export const StyledTitle = styled(Link)`
  display: block;
  padding-top: 120px;
  text-align: center;
  font-weight: 600;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 32px;
  color: #4b2a99;
  transition: all 250ms ease;
  text-decoration: underline;

  &:hover {
    color: yellow;
  }
`;

export const StyledLogo = styled(Link)`
  text-align: center;
  font-weight: 600;
  display: block;
  font-family: "Montserrat";
  color: white;
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
`;

export const StyledPic = styled(GiFlyingFox)`
  display: block;
  width: 92px;
  height: auto;
  fill: #4b2a99;
  margin: 80px auto;
`;
export const StyledLink = styled.a`
  margin-top: 80px;
  display: block;
  text-align: center;
  font-weight: 600;
  font-family: "Montserrat";
  font-style: normal;
  text-decoration: underline;
  font-size: 32px;
  color: #4b2a99;
  transition: all 250ms ease;
  &:hover {
    color: yellow;
  }
`;
