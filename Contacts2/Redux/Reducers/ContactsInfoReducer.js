import * as ContactsTypes from '../Actions/ActionTypes/ContactsTypes';

export default (state = ContactsTypes, action) => {
    switch (action.type) {
        case ContactsTypes.SET_SELECTED_DATA:
            return {...state, selectedData: action.selectedData};
        default:
            return state;
    }
};
