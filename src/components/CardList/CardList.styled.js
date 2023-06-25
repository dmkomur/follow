import styled from "styled-components";

export const StyledList = styled.ul`
  width: 1200px;
  margin: 0 auto;
  padding-top: 120px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;
export const StyledBtnLoad = styled.button`
  margin: 16px auto;
  display: block;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  text-align: center;
  padding: 14px 0px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  width: 196px;
  background-color: #4b2a99;
  transition: all 250ms ease;
  &:hover,
  &:focus {
    color: yellow;
  }
`;
