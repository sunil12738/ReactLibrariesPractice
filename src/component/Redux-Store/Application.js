import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as action from "./action.js"

class Home extends React.Component{
	constructor(props) {
		super(props)
		this.clicked = this.clicked.bind(this)
		this.increase = this.increase.bind(this)
		this.decrease = this.decrease.bind(this)
		this.makeApiCallUsingThunk = this.makeApiCallUsingThunk.bind(this)
	}

	clicked(){
		this.props.iAmClicked(true)
	}
	increase() {
		this.props.increase()
	}
	decrease() {
		this.props.decrease()
	}
	makeApiCallUsingThunk() {
		console.log(this.props)
		this.props.getGithubData()
	}

	render (){
		console.log(this.props)
		return (
			<div>
				<div>Current Value: {this.props.state.counter}</div>
		        {/*<button onClick={this.clicked}>CLICK ME</button><br/>*/}
		        <button onClick={this.increase}>INCREASE</button><br/>
						<button onClick={this.decrease}>DECREASE</button><br/>
		        <button onClick={this.makeApiCallUsingThunk}>MAKE API CALL USING THUNK</button><br/>
						<ul>{this.props.state.data.map((x) => {return <li>{x.login + " " + x.url}</li>})}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      action,
    },
    dispatch,
  )
}

const dispatch = {
	iAmClicked: action.iAmClicked,
	increase: action.increase,
	decrease: action.decrease,
	getGithubData: action.getGithubData
}
export default connect(mapStateToProps,
	{
		iAmClicked: action.iAmClicked,
		increase: action.increase,
		decrease: action.decrease,
		getGithubData: action.getGithubData,
	})(Home);
