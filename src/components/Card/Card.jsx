import logo from "../../img/logo.svg";
import {
  StyledCard,
  StyledCardButton,
  StyledText,
  StyledImgThumb,
  StyledAvatar,
} from "./Card.styled";
import PropTypes from "prop-types";

export const Card = ({ userData, handleClick, follow }) => {
  return (
    <StyledCard>
      <img src={logo} alt="logo" />
      <StyledImgThumb>
        <StyledAvatar src={userData.avatar} alt="avatar" />
      </StyledImgThumb>
      <StyledText style={{ marginBottom: "16px", marginTop: "242px" }}>
        {Intl.NumberFormat().format(userData.tweets)} Tweets
      </StyledText>
      <StyledText style={{ marginBottom: "26px" }}>
        {Intl.NumberFormat().format(userData.followers)} Followers
      </StyledText>
      <StyledCardButton
        follow={follow}
        onClick={() => handleClick(userData.id)}
      >
        {follow ? "Following" : "Follow"}
      </StyledCardButton>
    </StyledCard>
  );
};

Card.propTypes = {
  userData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  follow: PropTypes.bool.isRequired,
};
