import React from "react";
import "../assets/css/footer.css";
import { Fade } from "react-awesome-reveal";
import { greeting } from "../portfolio";
import { Theme } from "../theme";

const Footer = (props: { theme: Theme}) => {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}

export default Footer;
