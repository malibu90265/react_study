import * as ContactsTypes from '../Actions/ActionTypes/ContactsTypes';
import { fromJS } from 'immutable';

// The initial state of the App
export const ContactsInitialState = fromJS({
    selectedData: {
        group_no: -1,
        group_name: '전체 연락처',
        address_cnt: 0,
        contact_type: 0,    // 0: 내 연락처 선택, 1: 선택한 그룹 내 첫번째 연락처, 2: 다른 연락처(address_service_no로 판별)
        rightView: 'USER_DETAIL',
    },

    total_cnt: 0,
    favorite_cnt: 0,
    latest_cnt: 0,

    myGroupList: [],
    sharedGroupList: [],

});

export default (state = ContactsInitialState, action) => {
    switch (action.type) {
        case ContactsTypes.SET_CONTACT_ALL_COUNT:
            return {...state, total_cnt: action.total_cnt};
        case ContactsTypes.SET_CONTACT_FAV_COUNT:
            return {...state, favorite_cnt: action.favorite_cnt};
        case ContactsTypes.SET_CONTACT_LAT_COUNT:
            return {...state, latest_cnt: action.latest_cnt};
        case ContactsTypes.SET_MY_GROUP_LIST:
            return {...state, myGroupList: action.myGroupList};
        case ContactsTypes.SET_SHARED_GROUP_LIST:
            return {...state, sharedGroupList: action.sharedGroupList};
        default:
            return state;
    }
};

