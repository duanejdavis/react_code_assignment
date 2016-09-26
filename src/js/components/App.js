var React = require('react');
var TimeAction = require('../actions/TimeActionCreators');
var TimeSlotStore = require('../stores/TimeSlotStore');
var Form = require('./Form.react.js');

function getAppState(){
	return {

	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},


	render: function(){
		return(
			<div>
				<Form />
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;