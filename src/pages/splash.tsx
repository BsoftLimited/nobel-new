import React from "react";
import "../assets/css/splash.css";
import { Redirect } from "react-router-dom";
import { useState} from "react";
import LoaderLogo from "../components/loader-logo";
import { Theme } from "../theme";

const AnimatedSplash = (props: {theme: Theme}) =>{
  return (
    <div className="logo_wrapper"> 
        <div className="screen">
            <LoaderLogo />
        </div>
    </div>
  );
}

const Splash = (props: {theme: Theme}) =>{
    let [redirect, setRedirect] =  useState<boolean>(false);
    let id = setTimeout(() => setRedirect(true), 6000);
    //clearTimeout(this.id);

    return redirect ? (<Redirect to="/home" />) : (<AnimatedSplash theme={props.theme} />);
}

export default Splash;