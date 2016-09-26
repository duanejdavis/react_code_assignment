var _ 					= require('underscore');
var assign				= require('object-assign');
var AppDispatcher 		= require('../dispatcher/AppDispatcher');
var ActionTypes			= require('../constants/TimeSlotConstants').ActionTypes;
var EventEmitter		= require('events').EventEmitter;
var TimeSlotConstants	= require('../constants/TimeSlotConstants');
var CHANGE_EVENT 		= 'change';

var _selectedTimeSlot;

var _state = {
	timeslots: []
}

var _timeslots = [
		{ "slot": 0, "time": "09:00am - 10:00am", name: "", phone: "", status: "open" },
		{ "slot": 1, "time": "10:00am - 11:00am", name: "", phone: "", status: "open" },
		{ "slot": 2, "time": "11:00am - 12:00pm", name: "", phone: "", status: "open" },
		{ "slot": 3, "time": "12:00pm - 01:00pm", name: "", phone: "", status: "open" },
		{ "slot": 4, "time": "01:00pm - 02:00pm", name: "", phone: "", status: "open" },
		{ "slot": 5, "time": "02:00pm - 03:00pm", name: "", phone: "", status: "open" },
		{ "slot": 6, "time": "03:00pm - 04:00pm", name: "", phone: "", status: "open" },
		{ "slot": 7, "time": "04:00pm - 05:00pm", name: "", phone: "", status: "open" }
	];


function _set_selectedTimeSlot(index){
	_selectedTimeSlot = _timeslots[index];
}
function _rehydrate(field, value){
	_selectedTimeSlot[field] = value;

}
function _save_Selected(){
	_timeslots[_selectedTimeSlot.slot].name 	= _selectedTimeSlot.name;
	_timeslots[_selectedTimeSlot.slot].phone 	= _selectedTimeSlot.phone;
	_timeslots[_selectedTimeSlot.slot].status 	= "saved bg-danger";


}


var TimeSlotStore = assign({}, EventEmitter.prototype, {

	getTimeSlots: function(){
		return _timeslots;
	},

	getSelected: function(){
		return _selectedTimeSlot;
	},

	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback){
		this.on(CHANGE_EVENT,callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	}

});

var _setTime = function(timeData){
	_times = _times.set(timeData.id, new Time(timeData))
};


TimeSlotStore.dispatchToken = AppDispatcher.register(function(action){

	switch(action.type){
		case ActionTypes.SELECTED_TIME_SLOT:
			_set_selectedTimeSlot(action.data);
			break;
		case ActionTypes.TIME_REHYDRATED:
			_rehydrate(
				action.field,
				action.value
			);
			break;
		case ActionTypes.TIME_SAVE_SUCCEED:
			_save_Selected();
			break; 
	
		default:
            break;

	}


});


module.exports = TimeSlotStore;