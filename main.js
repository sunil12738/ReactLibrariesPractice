import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import IndexF from './src/index.js';
import AboutMe from './src/aboutme.js';
import ReactImageGallery from "./src/component/React-image-gallery/ReactImageGallery.jsx"
import ReactScroll from "./src/component/ReactScroll/ReactScroll.jsx"

ReactDOM.render(
	<Router history={browserHistory}>
        <IndexRoute component={IndexF} />
		<Route path="/" component={IndexF} />
		<Route path={"index"} component={IndexF} />
		<Route path={"about"} component={AboutMe} />
		<Route path={"image"} component={ReactImageGallery} />
		<Route path={"scroll"} component={ReactScroll} />
	</Router>, 
	document.getElementById('app')
);
