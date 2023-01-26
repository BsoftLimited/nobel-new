import React from "react";
import { Theme } from "../theme";
import "../assets/css/top-button.css";
import { Icon } from '@iconify/react';

const TopButton = (props: { theme: Theme }) => {
    const GoUpEvent = () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    window.onscroll = () =>{
        const topButton = document.getElementById("topButton") as HTMLElement;
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            topButton.style.visibility = "visible";
        } else {
            topButton.style.visibility = "hidden";
        }
    }
    
    const onMouseEnter = (color: string, bgColor : string) => {
        /* For the button */
        const topButton = document.getElementById("topButton") as HTMLElement;
        topButton.style.color = color;
        topButton.style.backgroundColor = bgColor;

        /* For arrow icon */
        const arrow = document.getElementById("arrow") as HTMLElement;
        arrow.style.color = color;
        arrow.style.backgroundColor = bgColor;
    };
    
    const onMouseLeave = (color: string, bgColor: string) => {
        /* For the button */
        const topButton = document.getElementById("topButton") as HTMLElement;
        topButton.style.color = color;
        topButton.style.backgroundColor = bgColor;

        /* For arrow icon */
        const arrow = document.getElementById("arrow") as HTMLElement;
        arrow.style.color = color;
        arrow.style.backgroundColor = bgColor;
    };
    
    return (
        <div onClick={GoUpEvent} id="topButton" style={{ color: props.theme.body, backgroundColor: props.theme.text, border: `solid 1px ${props.theme.text}`, }} title="Go up"
            onMouseEnter={() => onMouseEnter(props.theme.text, props.theme.body)}
            onMouseLeave={() => onMouseLeave(props.theme.body, props.theme.text)}>
            <Icon icon="ph:arrow-fat-up-bold" />
    </div>
  );
}

export default TopButton;