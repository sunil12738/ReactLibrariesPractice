import React from 'react';
import { browserHistory } from "react-router"

class IndexF extends React.Component{

	render (){
		return (
			<div>
		        Index <br/>
		        This is index route
		        <button onClick={()=>{
		        	console.log("yo yo")
		        	browserHistory.push("/redux")
		        }}>SUNIL</button>
			</div>
		);
	}
}

export default IndexF;
