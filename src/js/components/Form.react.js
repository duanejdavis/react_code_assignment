var React 			= require('react');
var Modal 			= require('react-bootstrap').Modal;
var OverlayTrigger	= require('react-bootstrap').OverlayTrigger;
var Button 			= require('react-bootstrap').Button;
var DropDown 		= require('./DropDown.react.js').DropDown;
var TimeSlotForm  	= require('./TimeSlotForm.react.js').TimeSlotForm;
var TimeSlotStore	= require('../stores/TimeSlotStore');
var loadTimeSlots 	= require('../stores/TimeSlotStore.js').loadTimeSlots; 
var TimeActionCreators = require('../actions/TimeActionCreators');



var Form = React.createClass({ 

	getInitialState: function(){

		return {
			timeSlots: TimeSlotStore.getTimeSlots(),
			showModal: false,
		}
	},
	close(){
		this.setState({ showModal: false });
	},
	open(){
		this.setState({ showModal: true });
	},
	render: function() {
		

		return(
			<div>
				<form>
					<DropDown options={this.state.timeSlots} dropDownValueChanged={this._onChangeTimeSlots} value={this.props.timeSlot} />
				</form>
				<Modal show={this.state.showModal} onHide={this.close}>
		          <Modal.Header>
		            <Modal.Title>Reserve the {this.state.selected_time_slot} Time Slot.</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
							            
		          <TimeSlotForm />

		          </Modal.Body>
		          <Modal.Footer>
		            <Button onClick={this.close}>Close</Button>
		          </Modal.Footer>
		        </Modal>
		    </div>

		);

	},
	_onChangeTimeSlots: function(timeId){
		TimeActionCreators.selectedTimeSlot(timeId);
		this.setState({selected_time_slot: TimeSlotStore.getSelected().time});
		this.setState({ showModal: true });
		
	},
	dropDownValueChanged: function(timeId){
		
	},
	componentWillUnmount: function(){
		TimeSlotStore.removeChangeListener(this._onChangeTimeSlots);

	},
	componentDidMount: function(){
		TimeSlotStore.addChangeListener(this._onChangeTimeSlots);
	}

	

});
module.exports = Form;