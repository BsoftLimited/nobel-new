import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { Theme } from "../theme";
import Home from "../pages/home";
import Splash from "../pages/splash";
import Contacts from "../pages/contact";
/*import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Projects from "../pages/projects/Projects";*/
import Error404 from "../pages/errors";

interface MainProp{
    theme: Theme
}

const Main = (prop: MainProp) => {
      return ( 
        <div>
          <HashRouter basename="/">
            <Switch>
              <Route path="/" exact render={(props) => ( <Splash theme={prop.theme}/> )} />
              <Route path="/home" render={(props) => (<Home theme={prop.theme} />)} />
              <Route path="/contact" render={(props) => (<Contacts theme={prop.theme} />)} />
              <Route path="*" render={(props) => (<Error404 theme={prop.theme} />)} />
            </Switch>
          </HashRouter>
        </div>);
}

export default Main;