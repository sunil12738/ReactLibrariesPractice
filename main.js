import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import IndexF from './Components/src/index.js';
import AboutMe from './Components/src/aboutme.js';

ReactDOM.render(
	<Router history={browserHistory}>
        <IndexRoute component={IndexF} />
		<Route path="/" component={IndexF} />
		<Route path={"index"} component={IndexF} />
		<Route path={"about"} component={AboutMe} />
	</Router>, 
	document.getElementById('app')
);
