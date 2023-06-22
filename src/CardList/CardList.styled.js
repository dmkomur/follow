import styled from "styled-components";
export const StyledCard = styled.div`
  height: 50px;
  background-color: aqua;
`;
export const StyledCardButton = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  border: none;
  background-color: ${(props) => (props.follow ? "#5CD3A8" : "#EBD8FF")};
`;
