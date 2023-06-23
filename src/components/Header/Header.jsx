import { StyledHeader } from "./Header.styled";
import { NavItem } from "./Header.styled";
export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/tweets">Tweets</NavItem>{" "}
      </nav>
    </StyledHeader>
  );
};
