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
          test 1<br/>
          test 1<br/>
          test 1<br/>
          test 1<br/>
          test 1<br/>
          test 1<br/>
          test 1<br/>
          test 1<br/>
          test 1<br/>
          test 1<br/>
        </Element>

        <Element name="test2" className="element">
          test 2<br/>
          test 2<br/>
          test 2<br/>
          test 2<br/>
          test 2<br/>
          test 2<br/>
          test 2<br/>
          test 2<br/>
          test 2<br/>
          test 2<br/>
        </Element>

        <Element name="test3" className="element">
          test 3<br/>
          test 3<br/>
          test 3<br/>
          test 3<br/>
          test 3<br/>
          test 3<br/>
          test 3<br/>
          test 3<br/>
          test 3<br/>
          test 3<br/>
          test 3<br/>
          test 3<br/>
        </Element>

        <Element name="test4" className="element">
          test 4<br/>
          test 4<br/>
          test 4<br/>
          test 4<br/>
          test 4<br/>
          test 4<br/>
          test 4<br/>
          test 4<br/>
          test 4<br/>
          test 4<br/>
          test 4<br/>
          test 4<br/>
          test 4<br/>
          test 4<br/>
          test 4<br/>
        </Element>

        <Element name="test5" className="element">
          test 5<br/>
          test 5<br/>
          test 5<br/>
          test 5<br/>
          test 5<br/>
          test 5<br/>
          test 5<br/>
          test 5<br/>
          test 5<br/>
          test 5<br/>
          test 5<br/>
          test 5<br/>
          test 5<br/>
          test 5<br/>
          test 5<br/>
        </Element>

      </div>
    );
  }
}

export default Body;
