import React, { Component } from 'react';
var Scroll  = require('react-scroll');
var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;
class Nav extends Component{

  render(){
    return (
      <div className="scrollC">
        <ul>
          <li><Link activeClass="active"  to="test1" spy={true} duration={500} >Test 1</Link></li>
          <li><Link activeClass="active"  to="test2" spy={true} duration={500}>Test 2</Link></li>
          <li><Link activeClass="active"  to="test3" spy={true} duration={500} >Test 3</Link></li>
          <li><Link activeClass="active"  to="test4" spy={true} duration={500}>Test 4</Link></li>
          <li><Link activeClass="active"  to="test5" spy={true} duration={500}>Test 5</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
