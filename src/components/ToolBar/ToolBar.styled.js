import styled from "styled-components";
import { Link } from "react-router-dom";

export const WraperToolBar = styled.div`
  width: 1230px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  position: fixed;
  top: 66px;
  z-index: 3;
`;

export const BackBtn = styled(Link)`
  padding: 8px 16px;
  background-color: yellow;
  display: block;
  display: flex;
  transition: all 250ms ease;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  &:hover {
    background-color: #ae7be3;
  }
`;
export const StyledFormRadio = styled.form`
  gap: 16px;
  display: flex;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 4px 16px;
  background-color: yellow;
`;
