var React 				= require('react');
var TimeSlotStore		= require('../stores/TimeSlotStore');
var TimeActionCreators 	= require('../actions/TimeActionCreators');

var TimeSlotForm = React.createClass({

	
	
	getInitialState: function(){

		return {
			selected_Name: TimeSlotStore.getSelected().name,
			selected_Phone: TimeSlotStore.getSelected().phone,
			Visible: false
		}
	},
	handleSubmit: function(event){
		TimeActionCreators.save();
		this.setState({Visible: true});
		event.preventDefault();
	},
	handleChange: function(event){
		TimeActionCreators.rehydrate(
			event.target.name,
			event.target.value
		)

	},
	
	render: function(){


		return( 
			<form onSubmit={this.handleSubmit}>
				{
		          this.state.Visible
		            ? <p className="bg-success">Your time slot has been saved.</p>
		            : null
		        }
				
				<div className="form-group">
   					<label htmlFor="name">Name</label>
					<input className="form-control" type="text" name="name" value={this.props.name} onChange={this.handleChange} placeholder={this.state.selected_Name} required/>
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone</label>
					<input className="form-control" type="text" name="phone" value={this.props.phone} onChange={this.handleChange} placeholder={this.state.selected_Phone} required/>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-default">Submit</button>
				</div>
			</form>

		);

	}

});

module.exports.TimeSlotForm = TimeSlotForm;