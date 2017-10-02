import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import IndexF from './src/index.js';
import AboutMe from './src/aboutme.js';
import ReactImageGallery from "./src/component/React-image-gallery/ReactImageGallery.js"
import ReactScroll from "./src/component/ReactScroll/ReactScroll.js"
import {Provider} from 'react-redux';
import store from './src/store.js';
import ReactRedux from "./src/component/Redux-Store/Application.js"
ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
	        <IndexRoute component={IndexF} />
			<Route path="/" component={IndexF} />
			<Route path={"index"} component={IndexF} />
			<Route path={"about"} component={AboutMe} />
			<Route path={"image"} component={ReactImageGallery} />
			<Route path={"scroll"} component={ReactScroll} />
			<Route path={"redux"} component={ReactRedux} />
		</Router>
	</Provider>, 
	document.getElementById('app')
);
