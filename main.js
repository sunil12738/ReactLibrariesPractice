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
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
	<BrowserRouter>
	<App/>
	</BrowserRouter>,
	document.getElementById('app')
);
