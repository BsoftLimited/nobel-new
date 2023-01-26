import React from "react";
import "../assets/css/skills.css";
import SkillSection from "./skills/skill-section";
import { Fade } from "react-awesome-reveal";
import { Theme } from "../theme";

const Skills = (props:{theme: Theme}) =>{
    const theme = props.theme;
    return (
        <div className="main" id="skills">
            <div className="skills-header-div">
                <Fade direction="right" duration={2000}>
                    <h1 className="skills-header" style={{ color: theme.text }}>What I Do?</h1>
                </Fade>
            </div>
            <SkillSection theme={theme} />
        </div>);
}

export default Skills;