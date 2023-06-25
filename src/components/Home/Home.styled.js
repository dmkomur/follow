import styled from "styled-components";
import { GiFlyingFox } from "react-icons/gi";

export const StyledTitle = styled.h1`
  padding-top: 120px;
  text-align: center;
  font-weight: 600;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 32px;
  color: #ae7be3;
`;
export const StyledPic = styled(GiFlyingFox)`
  display: block;
  width: 92px;
  height: auto;
  fill: #ae7be3;
  margin: 24px auto;
`;
export const StyledLink = styled.a`
  padding-top: 80px;
  display: block;
  text-align: center;
  font-weight: 600;
  font-family: "Montserrat";
  font-style: normal;
  text-decoration: underline;
  font-size: 32px;
  color: #ae7be3;
  transition: all 250ms ease;
  &:hover {
    color: yellow;
  }
`;
