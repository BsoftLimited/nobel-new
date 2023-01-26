import React, { Component } from "react";
import Header from "../components/header";
import { Theme } from "../theme";
import Greeting from "../containers/greeting";
import Skills from "../containers/skills";
import Footer from "../components/footer";
import TopButton from "../components/top-button";


const Home = (prop: { theme: Theme }) => {
    return (
      <div>
        <Header theme={prop.theme} />
        <Greeting theme={prop.theme} />
        <Skills theme={prop.theme} />
        <Footer theme={prop.theme} />
        <TopButton theme={prop.theme} />
      </div>
    );
}

export default Home;