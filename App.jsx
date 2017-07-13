import React from 'react';
import ReactScroll from "./Components/ReactScroll/ReactScroll.jsx"
import ReactImageGallery from "./Components/React-image-gallery/ReactImageGallery.jsx"
class App extends React.Component{

  getInitialState () {
    return {
    };
  }


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
