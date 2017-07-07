import React, { Component } from 'react';
import Body from "./Body.jsx"
import Nav from "./Nav.jsx"

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
