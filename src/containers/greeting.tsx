import React from "react";
import "../assets/css/greeting.css";
import SocialMedia from "../components/social-media";
import Button from "../components/button";
import { greeting } from "../portfolio";
import { Slide } from "react-awesome-reveal";
import FeelingProud from "./feeling-proud";
import { Theme } from "../theme";

export default function Greeting(props: {theme: Theme}) {
    return (
        <Slide direction="up" duration={2000} triggerOnce>
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <div>
                            <h1 className="greeting-text" style={{ color: props.theme.text }}>{greeting.title}</h1>
                            <h2 className="greeting-nickname" style={{ color: props.theme.text }}>({greeting.nickname})</h2>
                            <p className="greeting-text-p subTitle" style={{ color: props.theme.secondaryText }}>{greeting.subTitle}</p>
                            <SocialMedia theme={props.theme} />
                            <div className="portfolio-repo-btn-div">
                                <Button text="⭐ Star Me On Github" newTab={true} href={greeting.portfolio_repository} theme={props.theme} className="portfolio-repo-btn" />
                            </div>
                            {/* <div className="button-greeting-div">
                                <Button text="Contact me" href="#contact" />
                                <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
                            </div> */}
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        <FeelingProud theme={props.theme} />
                    </div>
                </div>
            </div>
        </Slide>);
}
