import React, { MouseEvent } from "react";
import "../assets/css/social-media.css";
import { socialMediaLinks } from "../portfolio";
import { Theme } from "../theme";
import { Icon } from "@iconify/react";

/*const IconWrapper = styled.span`
  i {
    background-color: ${(props:any) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;*/



const SocialMedia = (props: {theme: Theme}) => {
    return (
        <div className="social-media-div">
            {socialMediaLinks.map((media) => {
                return (
                    <a href={media.link} className={`icon-button`} target="_blank" rel="noopener noreferrer">
                        <span className="media-parent">
                        <Icon icon={media.iconifyIcon} color={media.backgroundColor}/>
                        </span>
                    </a>
                );
            })}
        </div>);
}

export default SocialMedia;