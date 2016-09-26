var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/TimeSlotConstants').ActionTypes;

module.exports = {

	selectedTimeSlot: function(index){
		AppDispatcher.dispatch({
			type: ActionTypes.SELECTED_TIME_SLOT,
			data: index
		});
	},
	save: function(response){
		AppDispatcher.dispatch({
			type: ActionTypes.TIME_SAVE_SUCCEED,
			response: response
		});
	},
    rehydrate: function(field, value) {
        AppDispatcher.dispatch({
            type: ActionTypes.TIME_REHYDRATED,
            field: field,
            value: value
        });
    }

}