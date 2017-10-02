import React, { Component } from 'react';
import Body from "./Body.js"
import Nav from "./Nav.js"

class ReactScroll extends Component{

  render(){
    return (
      <div>
        <Nav />
        <Body />
      </div>
    );
  }
}

export default ReactScroll;
