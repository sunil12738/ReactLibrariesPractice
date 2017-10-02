import React from 'react';
import routes from './src/routes.js';
// import { Router, Route } from 'react-router';
import { Switch, Route } from "react-router-dom"

class App extends React.Component{

	render (){
		return (
      		<Switch>
      		{
      			routes.map((route, i) => <Route key={i} {...route}/>)
      		}
		    </Switch>
		);
	}
}

export default App;
