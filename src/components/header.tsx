import React, { Component } from "react";
import "../assets/css/header.css";
import { Theme } from "../theme";
import { Fade} from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../portfolio";
import SeoHeader from "./seo-header";

const onMouseEnter = ( event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, color: string) => {
  const el = event.target as HTMLElement;
  el.style.backgroundColor = color;
};

const onMouseOut = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  const el = event.target as HTMLAnchorElement;
  el.style.backgroundColor = "transparent";
};


const Header = (prop: {theme: Theme}) =>{
    const link = settings.isSplash ? "/splash" : "home";
    return (
        <Fade direction="up" duration={1000}>
            <SeoHeader />
            <div>
                <header className="header">
                    <NavLink to={link} className="logo">
                        <span style={{ color: prop.theme.text }}> &lt;</span>
                        <span className="logo-name" style={{ color: prop.theme.text }}>{greeting.logo_name}</span>
                        <span style={{ color: prop.theme.text }}>/&gt;</span>
                    </NavLink>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu" style={{ backgroundColor: prop.theme.body }}>
                        <li>
                            <NavLink to="/home" activeStyle={{ fontWeight: "bold" }} style={{ color: prop.theme.text }}
                                onMouseEnter={(event) => onMouseEnter(event, prop.theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/education" activeStyle={{ fontWeight: "bold" }} style={{ color: prop.theme.text }}
                                onMouseEnter={(event) => onMouseEnter(event, prop.theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)} >Education</NavLink>
                        </li>
                        <li>
                            <NavLink to="/experience" activeStyle={{ fontWeight: "bold" }} style={{ color: prop.theme.text }}
                                onMouseEnter={(event) => onMouseEnter(event, prop.theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}>Experience</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" activeStyle={{ fontWeight: "bold" }} style={{ color: prop.theme.text }}
                                onMouseEnter={(event) => onMouseEnter(event, prop.theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/opensource" activeStyle={{ fontWeight: "bold" }} style={{ color: prop.theme.text }}
                                onMouseEnter={(event) => onMouseEnter(event, prop.theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}>Open Source</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeStyle={{ fontWeight: "bold" }} style={{ color: prop.theme.text }}
                                onMouseEnter={(event) => onMouseEnter(event, prop.theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}>Contact Me</NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        </Fade>)
};

export default Header;
