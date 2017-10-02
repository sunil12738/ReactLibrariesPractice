import React, { Component } from 'react';
var Scroll  = require('react-scroll');
var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Body extends Component{

  render(){
    return (
      <div>
        <Element name="test1" className="element" >
          AAAAA<br/>
          AAAAA<br/>
          AAAAA<br/>
          AAAAA<br/>
          AAAAA<br/>
          AAAAA<br/>
          AAAAA<br/>
          AAAAA<br/>
          AAAAA<br/>
          AAAAA<br/>
          AAAAA<br/>
          AAAAA<br/>
          AAAAA<br/>
          AAAAA<br/>
          AAAAA<br/>
        </Element>

        <Element name="test2" className="element">
          BBBBB<br/>
          BBBBB<br/>
          BBBBB<br/>
          BBBBB<br/>
          BBBBB<br/>
          BBBBB<br/>
          BBBBB<br/>
          BBBBB<br/>
          BBBBB<br/>
          BBBBB<br/>
          BBBBB<br/>
          BBBBB<br/>
          BBBBB<br/>
          BBBBB<br/>
          BBBBB<br/>
        </Element>

        <Element name="test3" className="element">
          CCCCC<br/>
          CCCCC<br/>
          CCCCC<br/>
          CCCCC<br/>
          CCCCC<br/>
          CCCCC<br/>
          CCCCC<br/>
          CCCCC<br/>
          CCCCC<br/>
          CCCCC<br/>
          CCCCC<br/>
          CCCCC<br/>
          CCCCC<br/>
          CCCCC<br/>
          CCCCC<br/>
        </Element>

        <Element name="test4" className="element">
          DDDDD<br/>
          DDDDD<br/>
          DDDDD<br/>
          DDDDD<br/>
          DDDDD<br/>
          DDDDD<br/>
          DDDDD<br/>
          DDDDD<br/>
          DDDDD<br/>
          DDDDD<br/>
          DDDDD<br/>
          DDDDD<br/>
          DDDDD<br/>
          DDDDD<br/>
          DDDDD<br/>
        </Element>

        <Element name="test5" className="element">
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
          EEEEE<br/>
        </Element>

      </div>
    );
  }
}

export default Body;
