import styled from "styled-components";

export const StyledList = styled.ul`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;
export const StyledCard = styled.li`
  position: relative;
  text-align: center;
  width: 380px;
  height: 460px;
  padding: 20px 20px 36px 20px;
  background-image: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    ),
    url("../img/cloud1x.png");
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  &:after {
    content: "";
    position: absolute;
    width: 380px;
    height: 8px;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
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
  text-align: center;
  padding: 14px 0px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  width: 196px;
  background-color: ${(props) => (props.follow ? "#5CD3A8" : "#EBD8FF")};
  transition: all 250ms ease;
  &:hover,
  &:focus {
    color: #471ca9;
  }
`;
export const StyledText = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;
export const StyledImgThumb = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  background: #ebd8ff;
  padding: 11px;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const StyledAvatar = styled.img`
  object-fit: contain;
  border-radius: 50%;
`;
export const StyledClouds = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
`;
