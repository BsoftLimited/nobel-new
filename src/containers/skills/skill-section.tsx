import React, { Component } from "react";
import SoftwareSkill from "../../components/software-skills";
import { skills, SkillTitle } from "../../portfolio";
import { Fade } from "react-awesome-reveal";

import CloudInfraImage from "../../assets/images/cloud-infra";
import DesignImage from "../../assets/images/design";
import FrontEndImage from "../../assets/images/front-end";
import FullStackImage from "../../assets/images/fullstack";
import DataScienceImage from "../../assets/images/data-science";
import GameDevelopmentImage from "../../assets/images/game-development";
import BackEndImage from "../../assets/images/backend";
import WebDeveloperImage from "../../assets/images/web-development";

import { Theme } from "../../theme";

const GetImage = (props: {title: SkillTitle, theme: Theme}) => {
    switch(props.title){
        case SkillTitle.Cloud_Engineering:
            return <CloudInfraImage theme={ props.theme} />;
        case SkillTitle.FrontEnd:
            return <FrontEndImage />;
        case SkillTitle.Data_Science:
            return <DataScienceImage theme={props.theme} />;
        case SkillTitle.Graphics_Design:
            return <DesignImage theme={props.theme} />;
        case SkillTitle.Game_Developer:
            return <GameDevelopmentImage />;
        case SkillTitle.BackEnd:
            return <BackEndImage />;
        case SkillTitle.Website_Developer:
            return <WebDeveloperImage />;
        default:
            return <FullStackImage theme={props.theme} />;
    }
}

const GetTitle = (title: SkillTitle): string => {
    switch(title){
        case SkillTitle.Cloud_Engineering:
            return "Cloud Infrastructure";
        case SkillTitle.FrontEnd:
            return "FrontEnd Developer";
        case SkillTitle.Data_Science:
            return "Data Science";
        case SkillTitle.Graphics_Design:
            return "Graphics Design";
        case SkillTitle.Game_Developer:
            return "Game Developer";
        case SkillTitle.BackEnd:
            return "BackEnd Developer";
        case SkillTitle.Website_Developer:
            return "Web Developer";
        default:
            return "Fullstack Developer";
    }
}
const SkillSection = (props:{theme: Theme}) => {
    const theme = props.theme;
    return (
        <div>
            {skills.data.map((skill) => {
                return (
                    <div className="skills-main-div">
                        <Fade direction="left" duration={2000}>
                            <div className="skills-image-div">
                                {/* <img
                                    alt="Ashutosh is Analysing Data"
                                    src={require(`../../assests/images/${skill.imagePath}`)}
                                ></img> */}
                                <GetImage title={skill.title} theme={theme} />
                            </div>
                        </Fade>
                        
                        <div className="skills-text-div">
                            <Fade direction="right" duration={1000}>
                                <h1 className="skills-heading" style={{ color: theme.text }}>{GetTitle(skill.title)}</h1>
                            </Fade>
                            <Fade direction="right" duration={1500}>
                                <SoftwareSkill skills={skill.softwareSkills} />
                            </Fade>
                            <Fade direction="right" duration={2000}>
                                <div>
                                    {skill.skills.map((skillSentence) => {
                                        return (<p className="subTitle skills-text" style={{ color: theme.secondaryText }}>{skillSentence}</p>);
                                    })}
                                </div>
                            </Fade>
                        </div>
                    </div>);
            })}
        </div>);
}

export default SkillSection;