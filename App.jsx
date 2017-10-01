import React from 'react';
import ReactScroll from "./Components/ReactScroll/ReactScroll.jsx"
import ReactImageGallery from "./Components/React-image-gallery/ReactImageGallery.jsx"
import IndexF from "./Components/src/index.js"
import AboutMe from "./Components/src/aboutme.js"
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

class App extends React.Component{

	render (){
		return (
			<div>
        Hi there
        <ReactImageGallery />
			</div>
		);
	}
}

export default App;
