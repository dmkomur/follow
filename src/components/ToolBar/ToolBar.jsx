import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { BackBtn, WraperToolBar, StyledFormRadio } from "./ToolBar.styled";
import PropTypes from "prop-types";

export const ToolBar = ({ handleChange }) => {
  return (
    <WraperToolBar>
      <BackBtn to={"/"}>
        <MdOutlineKeyboardBackspace />
      </BackBtn>
      <StyledFormRadio onChange={(event) => handleChange(event)}>
        <label
          style={{
            color: "#471CA9",
            fontSize: "20px",
            fontFamily: "Montserrat",
          }}
        >
          <input type="radio" value="all" name="filter" defaultChecked />
          All
        </label>
        <label
          style={{
            color: "#471CA9",
            fontSize: "20px",
            fontFamily: "Montserrat",
          }}
        >
          <input type="radio" value="followed" name="filter" />
          Followed
        </label>
        <label
          style={{
            color: "#471CA9",
            fontSize: "20px",
            fontFamily: "Montserrat",
          }}
        >
          <input
            type="radio"
            value="not"
            name="filter"
            // checked={filter === "not"}
          />
          Not following
        </label>
      </StyledFormRadio>
    </WraperToolBar>
  );
};

ToolBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
