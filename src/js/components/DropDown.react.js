var React = require('react');
var ReactDOM = require('react-dom');
var TimeActionCreators = require('../actions/TimeActionCreators');


var DropDown = React.createClass({

	getInitialState: function() {
         return {
             value: 'select'
         }
     },
	render: function(){

		var options = [];

		if(this.props.options){
			this.props.options.forEach(function(option){
				options.push(<option className={option.status} key={option.slot} value={option.slot} name={option.time}>{option.time}</option>);

			});
		}

		return(
			<select multiple className="form-control" ref='dropdown' value={this.state.value} onChange={this.onChange}>
				{options}
			</select>

		);

	},
	onChange: function(event) {
		var val = ReactDOM.findDOMNode(this.refs.dropdown).value
		this.setState({value: event.target.value});
		this.props.dropDownValueChanged(val);

	}
});

module.exports.DropDown = DropDown;