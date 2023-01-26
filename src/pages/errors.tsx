import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import TopButton from "../components/top-button";
import { Fade } from "react-awesome-reveal";
import "../assets/css/error.css";
import { Link } from "react-router-dom";
import { Theme } from "../theme";

const Error404 = (props: {theme: Theme}) => {
    const theme = props.theme;
    return (
        <div className="error-main">
            <Header theme={props.theme} />
            <div className="error-class">
                <Fade direction="up" duration={2000}>
                    <h1>Woops</h1>
                    <h1 className="error-404">404</h1>
                    <p>The requested page is unavailable at the moment!</p>
                    <Link className="main-button" to="/home" style={{ color: theme.body, backgroundColor: theme.text, border: `solid 1px ${theme.text}`, display: "inline-flex"}}>Go Home</Link>
                </Fade>
            </div>
            <Footer theme={props.theme} />
            <TopButton theme={props.theme} />
        </div>
    );
}

export default Error404;
