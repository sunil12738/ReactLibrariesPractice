import React from 'react';
import ReactScroll from "./Components/ReactScroll/ReactScroll.jsx"

class App extends React.Component{

  getInitialState () {
    return {
    };
  }


	render (){
		return (
			<div>
        Hi there
        <ReactScroll />
			</div>
		);
	}
}

export default App;
