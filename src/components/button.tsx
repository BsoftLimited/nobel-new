import React from "react";
import { Theme } from "../theme";
import "../assets/css/button.css";

const onMouseEnter = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, color: string, bgColor: string) => {
    const el = event.target as HTMLAnchorElement;
    el.style.color = color;
    el.style.backgroundColor = bgColor;
};

const onMouseOut = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, color: string, bgColor: string) => {
    const el = event.target as HTMLAnchorElement;
    el.style.color = color;
    el.style.backgroundColor = bgColor;
};

const Button = (props: { text: string, className?: string, href: string, newTab?: boolean, theme: Theme }) =>{
    return (
        <div className={props.className}>
            <a className="main-button" href={props.href} target={props.newTab ? "_blank" : undefined}
                style={{ color: props.theme.body, backgroundColor: props.theme.text, border: `solid 1px ${props.theme.text}` }}
                onMouseEnter={(event) => onMouseEnter(event, props.theme.text, props.theme.body)}
                onMouseOut={(event) => onMouseOut(event, props.theme.body, props.theme.text)}>{props.text}
            </a>
        </div>
  );
}

export default Button;