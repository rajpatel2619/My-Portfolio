import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NavH from "../widgets/navH";
import NavV from "../widgets/navV";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Loading from "./loading";
import Projects from "./projects";
import Skills from "./skills";
import Unknown from "./unknown";

class Main extends Component {

  constructor() {
    super()
    this.state = { isLoading: true }
}

componentDidMount() {
    this.setState({isLoading: false})
}

  
  render() {
    return (
      this.state.isLoading ? <Loading /> : 
          <BrowserRouter >
      <div className="row">
        <div className="col-12 col-lg-1" style={{paddingRight:0}}>
         
            <span className="d-none d-lg-block">
              <NavV />
            </span>

            <span className="d-lg-none ">
              <NavH />  
            </span>
      
        </div>
        <div className="col-12 col-lg-11" >
              <Switch>
                  <Route exact path="/" component={Home}  />
                  {/* <Route path="/about" component={About} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/404" component={Unknown}  /> */}
                  <Redirect to="/" />
              </Switch>
        </div>
      </div>
          </BrowserRouter>
    );
  }
}

export default Main;
