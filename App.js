import React from 'react';
import routes from './src/routes.js';
import { Switch, Route, BrowserRouter } from "react-router-dom"

class App extends React.Component{

	render (){
		const x ={}
		return (
      		<Switch context={x}>
      		{
      			routes.map((route, i) => <Route key={i} {...route}/>)
      		}
		    </Switch>
		);
	}
}

export default App;
