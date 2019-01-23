import {put, call, cancel, cancelled, takeLatest, select, takeEvery} from 'redux-saga/effects'
import * as contactsGroupSaga from './ContactsGroupSaga';
import * as contactsTypes from '../Actions/ActionTypes/ContactsTypes';
import * as contactsGroupApis from '../../APIs/ContactsGroupApis'
import Validation from "../../../../../utils/validation";
import $ from "jquery";
import LUXDialog from "luna-rocket/LUXDialog/index";

/**
 * 전체, 즐겨찾는, 최근 연락처 count 및 그룹 목록 조회
 */
export function* getTotalCount() {
    let dialogMessage = '';

    try {
        // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
        // todo : 플랜&위하고 버전(운영/개발/공공/aws)에 따른 공유연락처 조회 분기처리
        // let membership_code = yield select(state => state.contacts.membership_code);
        // let isShared = null;
        // if(['WF', 'WFP'].includes(membership_code)) {
        //     isShared = "F";
        // }
        console.log("groupSaga >> getTotalCount");

        const response = yield call(contactsGroupApis.getTotalCount, {});
        if (response.resultCode === 200) {
            yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_ALL_COUNT , total_cnt: response.resultData.total_cnt}));
            yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_FAV_COUNT , favorite_cnt: response.resultData.favorite_cnt}));
            yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_LAT_COUNT , latest_cnt: response.resultData.latest_cnt}));
            yield put(Object.assign({}, {type: contactsTypes.SET_MY_GROUP_LIST , myGroupList: response.resultData.myGroupList}));
            yield put(Object.assign({}, {type: contactsTypes.SET_SHARED_GROUP_LIST , sharedGroupList: response.resultData.sharedGroupList}));
        }
        else {
            dialogMessage = response.resultMsg;
            yield cancel();
        }
    } catch (error) {

    } finally {

    }
}


// Action이랑 Saga 연결
export default [
    takeLatest(contactsTypes.GET_TOTAL_COUNT, contactsGroupSaga.getTotalCount),
];

