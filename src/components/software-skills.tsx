import React from "react";
import "../assets/css/software-skills.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Skill } from "../portfolio";
import { Icon } from "@iconify/react";

const SoftwareSkill = (props: {skills: Skill[]}) =>{
    return (
        <div>
            <div className="software-skills-main-div">
                <ul className="dev-icons">
                    {props.skills.map((logo) => {
                        return (
                            <OverlayTrigger key={logo.skillName} placement={"top"} overlay={ <Tooltip id={`tooltip-top`}><strong>{logo.skillName}</strong></Tooltip>} >
                                <li className="software-skill-inline">
                                    <Icon icon={logo.iconifyIcon} color ={logo.style.color} />
                                </li>
                            </OverlayTrigger>
                        );
                    })}
                </ul>
            </div>
      </div>
    );
}

export default SoftwareSkill;
