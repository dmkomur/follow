import { StyledHeader } from "./Header.styled";
import { NavItem } from "./Header.styled";
import { StyledLogo } from "../Home/Home.styled";
import { BsPatchCheckFill } from "react-icons/bs";
export const Header = () => {
  return (
    <StyledHeader>
      <div
        style={{
          display: "flex",
          gap: "4px",
          alignItems: "center",
          padding: "4px",
          border: "2px solid white",
          borderRadius: "4px",
        }}
      >
        <BsPatchCheckFill style={{ fill: "#ffffff" }} />
        <StyledLogo to="/">My test app</StyledLogo>
      </div>
      <nav>
        <NavItem to="/" style={{ marginRight: "16px" }}>
          Home
        </NavItem>
        <NavItem to="/tweets">Tweets</NavItem>{" "}
      </nav>
    </StyledHeader>
  );
};
