import * as contactsTypes from '../../actions/contacts/contacts_types';
import {List, Map} from "immutable";
import Validation from "../../utils/validation";

export const contactsInitialState = {
    selectedData: {
        group_no: -1,
        group_name: '전체 연락처',
        address_cnt: 0,
        contact_type: 0,    // 0: 내 연락처 선택, 1: 선택한 그룹 내 첫번째 연락처, 2: 다른 연락처(address_service_no로 판별)
        rightView: 'USER_DETAIL',

    },




};

export default (state = contactsInitialState, action) => {
    // console.log(">>> reducer > contacts > action :", action);
    switch (action.type) {
        case contactsTypes.SET_SELECTED_DATA:
            return {...state, selectedData: action.selectedData};
        default:
            return state;
    }
};
