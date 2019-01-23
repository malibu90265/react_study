import {put, call, cancel, cancelled, takeLatest, select, takeEvery} from 'redux-saga/effects'
import * as contactsSaga from '../../sagas/contacts/contactsSaga'
import * as contactsTypes from '../../actions/contacts/contacts_types';
import * as Api from '../../apis/apis'
import * as ContactsActions from "../../actions/contacts/contacts";
import Validation from "../../utils/validation";
import $ from "jquery";
import LUXDialog from "luna-rocket/LUXDialog/index";

/**
 * 전체, 즐겨찾는, 최근 연락처 count 조회
 */
// export function* setSelectedData() {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         let membership_code = yield select(state => state.contacts.membership_code);
//         let isShared = null;
//         if(['WF', 'WFP'].includes(membership_code)) {
//             isShared = "F";
//         }
//
//         const response = yield call(Api.getTotalCount, isShared);
//         if (response.resultCode === 200) {
//             let list = response.resultData;
//
//             // 전체, 즐겨찾는, 최근 연락처 count 초기화
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_ALL_COUNT , payload: list[0].total_cnt}));
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_FAV_COUNT , payload: list[0].favorite_cnt}));
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_LAT_COUNT , payload: list[0].latest_cnt}));
//
//         }
//         else {
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//
//     } finally {
//
//     }
// }
// /**
//  * 전체, 즐겨찾는, 최근 연락처 count 조회
//  */
// export function* getTotalCount() {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         let membership_code = yield select(state => state.contacts.membership_code);
//         let isShared = null;
//         if(['WF', 'WFP'].includes(membership_code)) {
//             isShared = "F";
//         }
//
//         const response = yield call(Api.getTotalCount, isShared);
//         if (response.resultCode === 200) {
//             let list = response.resultData;
//
//             // 전체, 즐겨찾는, 최근 연락처 count 초기화
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_ALL_COUNT , payload: list[0].total_cnt}));
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_FAV_COUNT , payload: list[0].favorite_cnt}));
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_LAT_COUNT , payload: list[0].latest_cnt}));
//
//         }
//         else {
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//
//     } finally {
//
//     }
// }

// /**
//  *  내 그룹, 공유 그룹 조회
//  */
// export function* getContactsGroup() {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         const response = yield call(Api.getContactsGroup, null);
//         if (response.resultCode === 200) {
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_MY_GROUP , payload: response.resultData.myGroupList}));
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_SHARE_GROUP , payload: response.resultData.sharedGroupList}));
//         }
//         else {
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//
//     } finally {
//
//     }
// }
//
// /**
//  *  그룹 수정
//  */
// export function* updateGroup({address_group_no, group_name, company_no, company_name, memberList}) {
//     let dialogMessage = '';
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         let contactProgressOpen = true;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//         const response = yield call(Api.updateGroup, address_group_no, group_name, company_no, company_name, memberList);
//         if (response.resultCode === 200) {
//             let contactProgressOpen = false;
//             let contactProgressInnerTxt = "Loading..";
//             let contactProgressGuideTxt = " ";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             let selectedGroupData = yield select(state => state.contacts.selectedGroupData);
//             selectedGroupData.address_group_no = address_group_no;
//             selectedGroupData.group_name = response.resultData.group_name;
//             yield put(ContactsActions.setSelectedGroupData({selectedGroupData}));
//
//             yield put(ContactsActions.getContactsGroup());  // 내 그룹, 공유그룹 조회
//
//             if(!Validation.checkEmpty(company_no) && !Validation.checkEmpty(memberList)){
//
//                 if(!Validation.checkEmpty(response.resultMsg)) {
//                     let contactSnackbarOpen = true;
//                     let contactSnackbarMsg = response.resultMsg;
//                     let contactSnackbarType = "success";
//                     yield put(ContactsActions.setContactSnackbar({contactSnackbarOpen, contactSnackbarMsg, contactSnackbarType}));
//                 }
//
//                 let getSelectedSharedGroupData = {
//                     address_group_no: address_group_no,
//                     user_no_o_company_no: company_no,
//                 };
//                 yield  put(ContactsActions.getSelectedSharedGroupData({getSelectedSharedGroupData}));
//
//             }
//         } else {
//             let contactProgressOpen = false;
//             let contactProgressInnerTxt = "Loading..";
//             let contactProgressGuideTxt = " ";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//         let contactProgressOpen = false;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//     } finally {
//
//     }
// }
//
// /**
//  *  그룹 삭제
//  */
// export function* removeGroup({address_group_no, group_name}) {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         let contactProgressOpen = true;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//         const response = yield call(Api.removeGroup, address_group_no, group_name);
//         if (response.resultCode === 200) {
//             let contactProgressOpen = false;
//             let contactProgressInnerTxt = "Loading..";
//             let contactProgressGuideTxt = " ";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_SNACK_BAR , contactSnackbarOpen: true, contactSnackbarMsg: "그룹이 삭제되었습니다.", contactSnackbarType: "success"}));
//             yield put(ContactsActions.getContactsGroup());  // 내 그룹, 공유그룹 조회
//
//             let titleType = yield select(state => state.contacts.titleType);
//             let type = "";
//             if(titleType === undefined || titleType === "group" || titleType === "lat" || titleType === "fav"){
//                 type = "all";
//             }
//
//             if(process.env.cell){
//                 if (process.env.CHECK_TYPE === 'local') {
//                     location.href="/#/contacts/" + type;
//                 } else {
//                     location.href="/contacts/#/contacts/" + type;
//                 }
//
//             }else{
//                 location.href="/#/contacts/" + type;
//             }
//
//         } else {
//             let contactProgressOpen = false;
//             let contactProgressInnerTxt = "Loading..";
//             let contactProgressGuideTxt = " ";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//         let contactProgressOpen = false;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//     } finally {
//
//     }
// }
//
// /**
//  *  그룹 등록시, 그룹 정보 조회
//  */
// export function* getNextGroupNum({address_type}) {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         const response = yield call(Api.getNextGroupNum, address_type);
//         if (response.resultCode === 200) {
//             yield put(Object.assign({}, {type: contactsTypes.SET_NEXT_GROUP_NAME , payload: response.resultData}));
//
//         }
//         else {
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//
//     } finally {
//
//     }
// }
//
// /**
//  *  그룹 등록
//  */
// export function* enrollGroup({address_type, group_name, memberList, selectedCompanyNo, selectedCompanyName}) {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         let contactProgressOpen = true;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//         const response = yield call(Api.enrollGroup, address_type, group_name, memberList, selectedCompanyNo, selectedCompanyName);
//         if (response.resultCode === 200) {
//             let contactProgressOpen = false;
//             let contactProgressInnerTxt = "Loading..";
//             let contactProgressGuideTxt = " ";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             yield put(ContactsActions.getContactsGroup());  // 내 그룹, 공유그룹 조회
//
//             if(!Validation.checkEmpty(memberList)){
//                 let contactSnackbarOpen = true;
//                 let contactSnackbarMsg = group_name + "이(가) 공유요청 되었습니다.";
//                 let contactSnackbarType = "success";
//
//                 yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_SNACK_BAR , contactSnackbarOpen: contactSnackbarOpen, contactSnackbarMsg: contactSnackbarMsg, contactSnackbarType: contactSnackbarType}));
//             }
//
//         }
//         else {
//             let contactProgressOpen = false;
//             let contactProgressInnerTxt = "Loading..";
//             let contactProgressGuideTxt = " ";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//         let contactProgressOpen = false;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//     } finally {
//
//     }
// }
//
// /**
//  *  연락처 목록 조회
//  */
// export function* getContactsList({groupIdx, sortIdx, isAscending, offset, limit}) {
//     let dialogMessage = '';
//
//     // 기존 리스트 초기화
//     // let selectedGroupData = yield select(state => state.contacts.selectedGroupData);
//     // selectedGroupData.address_group_no = groupIdx;
//     // selectedGroupData.group_name = groupIdx === -1 ? "전체 연락처" : groupIdx === -2 ? "즐겨찾는 연락처" : groupIdx === -2 ?"최근 연락처" : selectedGroupData.group_name;
//     // selectedGroupData.group_cnt = 0;
//     // yield put(Object.assign({}, {type: contactsTypes.SET_SELECTED_GROUP_DATA , selectedGroupData: selectedGroupData}));
//     // yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_LIST , contactsList: [], chosungList: []
//     //                                         , groupIdx: groupIdx, sortIdx: sortIdx, isAscending: isAscending, offset: offset, limit: limit}));
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         let membership_code = yield select(state => state.contacts.membership_code);
//         let isShared = null;
//         if(['WF', 'WFP'].includes(membership_code)) {
//             isShared = "F";
//         }
//
//         const response = yield call(Api.getContactsList, groupIdx, sortIdx, isAscending, offset, limit, isShared);
//         if (response.resultCode >= 200 && response.resultCode < 300) {
//
//             // 전체, 즐겨찾는, 최근 연락처 count 초기화
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_ALL_COUNT , payload: Validation.checkEmpty(response.resultData.total_cnt) ? 0 : response.resultData.total_cnt}));
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_FAV_COUNT , payload: Validation.checkEmpty(response.resultData.favorite_cnt) ? 0 : response.resultData.favorite_cnt}));
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_LAT_COUNT , payload: Validation.checkEmpty(response.resultData.latest_cnt) ? 0 : response.resultData.latest_cnt}));
//
//             if(groupIdx < 0) {
//                 let selectedGroupData = yield select(state => state.contacts.selectedGroupData);
//                 selectedGroupData.address_group_no = groupIdx;
//                 selectedGroupData.group_name = groupIdx === -1 ? "전체 연락처" : groupIdx === -2 ? "즐겨찾는 연락처" : "최근 연락처";
//                 selectedGroupData.group_cnt = response.resultData.contactsList.length;
//                 yield put(Object.assign({}, {type: contactsTypes.SET_SELECTED_GROUP_DATA , selectedGroupData: selectedGroupData}));
//             }
//
//             // else {
//             //     let selectedGroupData = {
//             //         address_group_no: groupIdx,
//             //         group_name: "",
//             //         group_cnt: response.resultData.contactsList.length,
//             //         is_shared: "F",
//             //     };
//             //
//             //     let isExst = false;
//             //     let myGroupList = yield select(state => state.contacts.myGroupList);
//             //     for(let i=0; i<myGroupList.length; i++) {
//             //         if(myGroupList[i].address_group_no === groupIdx) {
//             //             isExst = true;
//             //             selectedGroupData.group_name = myGroupList[i].group_name;
//             //
//             //             break;
//             //         }
//             //     }
//             //
//             //     let sharedGroupList = yield select(state => state.contacts.sharedGroupList);
//             //     $("[id^='menu_']").removeClass("select");
//             //     $("[id^='group_box']").removeClass("select");
//             //     $("[id^='shared_group_box']").removeClass("select");
//             //     $("[id^='shared_menu_']").removeClass("select");
//             //
//             // }
//
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_LIST , contactsList: response.resultData.contactsList, chosungList: response.resultData.chosungList
//                                             , groupIdx: groupIdx, sortIdx: sortIdx, isAscending: isAscending, offset: offset, limit: limit}));
//
//         } else {
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//
//     } finally {
//
//     }
// }
//
// /**
//  *  내 연락처 조회
//  */
// export function* getUserAllInfo({isGetContactsList = false}) {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         const response = yield call(Api.getUserAllInfo);
//         if (response.resultCode === 200) {
//
//             let userInfo = response.resultData;
//             if(userInfo.companyInfoList.length > 0){
//                 userInfo.full_path = userInfo.companyInfoList[0].full_path.toString().replace(/>/g, " | ");
//                 userInfo.position_name = userInfo.companyInfoList[0].position_name;
//             }else{
//                 userInfo.full_path = "";
//                 userInfo.position_name = "";
//             }
//
//             yield put(Object.assign({}, {type: contactsTypes.SET_USER_INFO , payload: userInfo}));
//             let selectedAddressServiceNo = -1;
//             yield put(Object.assign({}, {type: contactsTypes.SET_ADDRESS_SERVICE_NO , selectedAddressServiceNo: selectedAddressServiceNo}));
//
//             if(isGetContactsList) {
//                 // 연락처 count 조회
//                 yield put(ContactsActions.getTotalCount());
//
//                 // 내그룹, 공유그룹 목록 조회
//                 yield put(ContactsActions.getContactsGroup());
//
//                 // 전체 연락처 목록 조회
//                 let groupIdx = -1;
//                 let sortIdx = -1;
//                 let isAscending = 'T';
//                 let offset = null;
//                 let limit = "all";
//                 yield put(ContactsActions.getContactsList({groupIdx, sortIdx, isAscending, offset, limit}));
//
//                 // rightView setting
//                 // let rightView = "USER_DETAIL";
//                 // yield put(ContactsActions.setRightView({rightView}));
//
//             }
//
//         }
//         else {
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//
//     } finally {
//
//     }
// }
//
// /**
//  *  연락처 상세 조회
//  */
// export function* getContactData({address_service_no, rightView}) {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         const response = yield call(Api.getContactData, address_service_no);
//         if (response.resultCode === 200) {
//             // 삭제된 연락처인 경우
//             if(response.resultData.baseInfo.is_deleted === "T"){
//                 LUXDialog.alert('삭제된 연락처이므로 조회할 수 없습니다.', {type: 'error'});
//                 if(process.env.cell){
//                     if (process.env.CHECK_TYPE === 'local') {
//                         location.href="/#/contacts/all";
//                     } else {
//                         location.href="/contacts/#/contacts/all";
//                     }
//                 }else{
//                     location.href="/#/contacts/all";
//                 }
//             }else{
//                 yield put(Object.assign({}, {type: contactsTypes.SET_ADDRESS_SERVICE_NO , address_service_no: address_service_no}));
//                 yield put(Object.assign({}, {type: contactsTypes.SET_SELECTED_CONTACT_DATA , contactData: response.resultData}));
//
//                 if(!Validation.checkEmpty(rightView)) {
//                     yield put(Object.assign({}, {type: contactsTypes.SET_RIGHT_VIEW , rightView: rightView}));
//                 } else {
//                     yield put(Object.assign({}, {type: contactsTypes.SET_RIGHT_VIEW , rightView: "DETAIL"}));
//                 }
//
//             }
//         }
//         else {
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//
//     } finally {
//
//     }
// }
//
// /**
//  *  연락처 즐겨찾기 설정/해제
//  */
// export function* setContactBookmark({address_service_no, isBookmark}) {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         const response = yield call(Api.setContactBookmark, address_service_no, isBookmark);
//         if (response.resultCode === 200) {
//             let actionType = "SET_BOOKMARK";
//             yield put(ContactsActions.setContactActionType({actionType}));
//
//             yield put(ContactsActions.getTotalCount());  // 전체, 즐겨찾는, 최근 연락처 count 조회
//
//             let groupIdx = yield select(state => state.contacts.groupIdx);
//             let sortIdx = yield select(state => state.contacts.sortIdx);
//             let isAscending = yield select(state => state.contacts.isAscending);
//             let offset = 0;
//             let limit = "all";
//             yield put(ContactsActions.getContactsList({groupIdx, sortIdx, isAscending, offset, limit}));  // 연락처 조회
//
//             let selectedAddressServiceNo = yield select(state => state.contacts.selectedAddressServiceNo);
//             if(address_service_no === selectedAddressServiceNo){
//                 yield put(ContactsActions.getContactData({address_service_no}));  // 연락처 상세정보 조회
//             }
//
//         } else {
//             let contactProgressOpen = false;
//             let contactProgressInnerTxt = "Loading..";
//             let contactProgressGuideTxt = " ";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//         let contactProgressOpen = false;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//     } finally {
//
//     }
// }
//
//
// /**
//  *  연락처 (단건) 로그 조회
//  */
// export function* getContactLog({address_service_no}) {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         let contactProgressOpen = true;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = "연락처 활동기록을 조회하고 있습니다.";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//         const response = yield call(Api.getContactLog, address_service_no);
//         if (response.resultCode === 200) {
//             contactProgressOpen = false;
//             contactProgressInnerTxt = "Loading..";
//             contactProgressGuideTxt = " ";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//
//             yield put(Object.assign({}, {type: contactsTypes.SET_CONTACT_LOG , contactLogList: response.resultData}));
//
//             let contactLogDialogOpen = true;
//             yield put(ContactsActions.setContactLogDialog({contactLogDialogOpen}));  // 연락처(단건) 활동기록 다이얼로그 open
//
//         }
//         else {
//             contactProgressOpen = false;
//             contactProgressGuideTxt = "";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//         let contactProgressOpen = false;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//     } finally {
//
//     }
// }
//
// /**
//  *  연락처 이동시, 이동하려는 그룹에 이미 존재하는지 확인
//  */
// export function* checkMoveContact({moveType, checkedList, moveGroupData, address_type}) {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         const response = yield call(Api.checkMoveContact, moveType, checkedList, moveGroupData, address_type);
//         if (response.resultCode === 200) {
//             let selectedGroupData = yield select(state => state.contacts.selectedGroupData);
//
//             if (moveType === "MOVE") {
//                 yield put(ContactsActions.moveContact({checkedList, selectedGroupData, moveGroupData}));
//             } else if (moveType === "COPY") {
//                 yield put(ContactsActions.copyContact({checkedList, selectedGroupData, moveGroupData}));
//             }
//
//         }else if(response.resultCode === 410) {
//             LUXDialog.alert('이미 그룹에 존재하는 연락처입니다.', {
//                 type: 'warning',
//                 title: '',
//                 callback: () => {
//                 },
//             });
//         }
//         else {
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//
//     } finally {
//
//     }
// }
//
// /**
//  *  연락처 이동
//  */
// export function* moveContact({checkedList, selectedGroupData, moveGroupData}) {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         let contactProgressOpen = true;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = "연락처를 이동하고 있습니다.";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//         const response = yield call(Api.moveContact, checkedList, selectedGroupData, moveGroupData);
//         if (response.resultCode === 200) {
//             contactProgressOpen = false;
//             contactProgressGuideTxt = "";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             if(selectedGroupData.address_group_no < 0 && moveGroupData.address_group_no < 0) {
//                 LUXDialog.alert('이미 그룹에 존재하는 연락처입니다.', {
//                     type: 'warning',
//                     title: '',
//                     callback: () => {
//                     },
//                 });
//
//             } else {
//                 // 그룹 별 연락처 count 조회
//                 yield put(ContactsActions.getContactsGroup());
//
//                 // Actionbar 닫기
//                 let isActionBarOpen = false;
//                 yield put(ContactsActions.setContactActionBar({isActionBarOpen}));
//                 $('.snbnext').removeClass('active_actionbar');
//
//                 let checkedList = [];
//                 yield put(ContactsActions.setContactCheckedList({checkedList}));
//
//                 // 그룹 내 연락처 목록 refresh
//                 let groupIdx = selectedGroupData.address_group_no;
//                 let sortIdx = yield select(state => state.contacts.sortIdx);
//                 let isAscending = yield select(state => state.contacts.isAscending);
//                 let offset = 0;
//                 let limit = "all";
//                 yield put(ContactsActions.getContactsList({groupIdx, sortIdx, isAscending, offset, limit}));
//
//                 let contactSnackbarOpen = true;
//                 let contactSnackbarMsg = "이동이 완료되었습니다.";
//                 let contactSnackbarType = "success";
//                 yield put(ContactsActions.setContactSnackbar({contactSnackbarOpen, contactSnackbarMsg, contactSnackbarType}));
//             }
//
//         } else {
//             contactProgressOpen = false;
//             contactProgressGuideTxt = "";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//         let contactProgressOpen = false;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//     } finally {
//
//     }
// }
//
// /**
//  *  연락처 복사
//  */
// export function* copyContact({checkedList, selectedGroupData, moveGroupData}) {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         let contactProgressOpen = true;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = "연락처를 복사하고 있습니다.";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//         const response = yield call(Api.copyContact, checkedList, selectedGroupData, moveGroupData);
//         if (response.resultCode === 200) {
//             contactProgressOpen = false;
//             contactProgressGuideTxt = "";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             let contactSnackbarOpen = true;
//             let contactSnackbarMsg = "복사가 완료되었습니다.";
//             let contactSnackbarType = "success";
//             yield put(ContactsActions.setContactSnackbar({contactSnackbarOpen, contactSnackbarMsg, contactSnackbarType}));
//
//             // 그룹 별 연락처 count 조회
//             yield put(ContactsActions.getContactsGroup());
//
//             // Actionbar 닫기
//             let isActionBarOpen = false;
//             yield put(ContactsActions.setContactActionBar({isActionBarOpen}));
//             $('.snbnext').removeClass('active_actionbar');
//
//             let checkedList = [];
//             yield put(ContactsActions.setContactCheckedList({checkedList}));
//
//             // 그룹 내 연락처 목록 refresh
//             let groupIdx = selectedGroupData.address_group_no;
//             let sortIdx = yield select(state => state.contacts.sortIdx);
//             let isAscending = yield select(state => state.contacts.isAscending);
//             let offset = 0;
//             let limit = "all";
//             yield put(ContactsActions.getContactsList({groupIdx, sortIdx, isAscending, offset, limit}));
//
//         }else {
//             contactProgressOpen = false;
//             contactProgressGuideTxt = "";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//         let contactProgressOpen = false;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//     } finally {
//
//     }
// }
//
// /**
//  *  연락처 삭제
//  */
// export function* removeContact({checkedList, selectedGroupData}) {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         let contactProgressOpen = true;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = "연락처를 삭제하고 있습니다.";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//         const response = yield call(Api.removeContact, checkedList, selectedGroupData);
//
//         if (response.resultCode === 200) {
//
//             contactProgressOpen = false;
//             contactProgressGuideTxt = "";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             let contactSnackbarOpen = true;
//             let contactSnackbarMsg = "휴지통으로 이동되었습니다.";
//             let contactSnackbarType = "success";
//             yield put(ContactsActions.setContactSnackbar({contactSnackbarOpen, contactSnackbarMsg, contactSnackbarType}));
//
//             // 그룹 별 연락처 count 조회
//             yield put(ContactsActions.getContactsGroup());
//             yield put(ContactsActions.getTotalCount());
//
//             // Actionbar 닫기
//             let isActionBarOpen = false;
//             yield put(ContactsActions.setContactActionBar({isActionBarOpen}));
//             $('.snbnext').removeClass('active_actionbar');
//
//             let checkedList = [];
//             yield put(ContactsActions.setContactCheckedList({checkedList}));
//
//             let address_service_no = -1;
//             yield put(ContactsActions.setAddressServiceNo({address_service_no}));
//
//             // 그룹 내 연락처 목록 refresh
//             let groupIdx = selectedGroupData.address_group_no;
//             let sortIdx = yield select(state => state.contacts.sortIdx);
//             let isAscending = yield select(state => state.contacts.isAscending);
//             let offset = 0;
//             let limit = "all";
//             yield put(ContactsActions.getContactsList({groupIdx, sortIdx, isAscending, offset, limit}));
//
//             let rightView = "USER_DETAIL";
//             yield put(ContactsActions.setRightView({rightView}));
//
//         }else {
//             contactProgressOpen = false;
//             contactProgressGuideTxt = "";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//         let contactProgressOpen = false;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//     } finally {
//
//     }
// }
//
// /**
//  *  사용자 LINK 상태 조회
//  */
// export function* getUserLinkState() {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         const response = yield call(Api.getUserLinkState);
//         if (response.resultCode === 200) {
//             yield put(Object.assign({}, {type: contactsTypes.UPDATE_USER_LINK_STATE , userLinkState: response.resultData}));
//         }else {
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//
//     } finally {
//
//     }
// }
//
// /**
//  *  사용자 LINK 상태 변경
//  */
// export function* setUserLinkState({userLinkState}) {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         const response = yield call(Api.setUserLinkState, userLinkState);
//         if (response.resultCode === 200) {
//             yield put(Object.assign({}, {type: contactsTypes.UPDATE_USER_LINK_STATE , userLinkState: userLinkState}));
//         }else {
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//
//     } finally {
//
//     }
// }
//
// /**
//  *  휴지통 비우기
//  */
// export function* initTrash() {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         let contactProgressOpen = true;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = "휴지통을 비우고 있습니다.";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//         const response = yield call(Api.setUserLinkState, userLinkState);
//         if (response.resultCode === 200) {
//             contactProgressOpen = false;
//             contactProgressInnerTxt = "Loading..";
//             contactProgressGuideTxt = " ";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//
//             let contactSnackbarOpen = true;
//             let contactSnackbarMsg = "휴지통을 정상적으로 비웠습니다.";
//             let contactSnackbarType = "success";
//
//             yield put(ContactsActions.setContactSnackbar({contactSnackbarOpen, contactSnackbarMsg, contactSnackbarType}));
//
//         }else {
//             contactProgressOpen = false;
//             contactProgressInnerTxt = "Loading..";
//             contactProgressGuideTxt = " ";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//         let contactProgressOpen = false;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//     } finally {
//
//     }
// }
//
// /**
//  *  연락처 복원
//  */
// export function* restoreContact({contactsList, groupList}) {
//     let dialogMessage = '';
//
//     try {
//         let contactProgressOpen = true;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = (<div>연락처를 복원 중입니다.<br/>잠시만 기다려주세요.</div>);
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         const response = yield call(Api.restoreContact, contactsList, groupList);
//         if (response.resultCode === 200) {
//             // progress bar 닫기
//             contactProgressOpen = false;
//             contactProgressGuideTxt = "";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             // snackbar
//             let contactSnackbarOpen = true;
//             let contactSnackbarMsg = "선택한 연락처를 정상적으로 복원했습니다.";
//             let contactSnackbarType = "success";
//             yield put(ContactsActions.setContactSnackbar({contactSnackbarOpen, contactSnackbarMsg, contactSnackbarType}));
//
//             // 그룹 별 연락처 count 조회
//             yield put(ContactsActions.getContactsGroup());
//             yield put(ContactsActions.getTotalCount());
//
//             // Actionbar 닫기
//             let isActionBarOpen = false;
//             yield put(ContactsActions.setContactActionBar({isActionBarOpen}));
//             $('.snbnext').removeClass('active_actionbar');
//
//         }else {
//             // progress bar 닫기
//             contactProgressOpen = false;
//             contactProgressGuideTxt = "";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             // snackbar
//             let contactSnackbarOpen = true;
//             let contactSnackbarMsg = "연락처 복원에 실패했습니다.";
//             let contactSnackbarType = "info";
//             yield put(ContactsActions.setContactSnackbar({contactSnackbarOpen, contactSnackbarMsg, contactSnackbarType}));
//
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//
//     } catch (error) {
//         let contactProgressOpen = false;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//     } finally {
//
//     }
// }
//
// /**
//  *  공유그룹 상세정보 조회(공유멤버 조회)
//  */
// export function* getSelectedSharedGroupData({selectedSharedGroupData}) {
//     let dialogMessage = '';
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         let contactProgressOpen = true;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//         const response = yield call(Api.getSelectedSharedGroupData, selectedSharedGroupData.address_group_no, selectedSharedGroupData.user_no_o_company_no);
//         if (response.resultCode === 200) {
//             let contactProgressOpen = false;
//             let contactProgressInnerTxt = "Loading..";
//             let contactProgressGuideTxt = " ";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             selectedSharedGroupData.memberList = response.resultData.memberList;
//             yield put(Object.assign({}, {type: contactsTypes.SET_SELECTED_SHARED_GROUP_DATA , selectedSharedGroupData: selectedSharedGroupData}));
//
//             let sharedGroupPopupType = selectedSharedGroupData.popupType;
//             if(sharedGroupPopupType === "member"){
//                 let isSharedMemberDialogOpen = true;
//                 yield put(ContactsActions.setSharedMemberPopup({isSharedMemberDialogOpen}));
//             }else{
//                 let isSharedGroupDialogOpen = true;
//                 yield put(ContactsActions.setSharedGroupPopup({isSharedGroupDialogOpen, sharedGroupPopupType}));
//             }
//
//         }else {
//             let contactProgressOpen = false;
//             let contactProgressInnerTxt = "Loading..";
//             let contactProgressGuideTxt = " ";
//             yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//         let contactProgressOpen = false;
//         let contactProgressInnerTxt = "Loading..";
//         let contactProgressGuideTxt = " ";
//         yield put(ContactsActions.setContactProgress({contactProgressOpen, contactProgressInnerTxt, contactProgressGuideTxt}));
//
//     } finally {
//
//     }
// }
//
// /**
//  *  명함입력센터 사용자 배포 유무 조회
//  */
// export function* getIsNameCardDeployed() {
//     let dialogMessage = '';
//     let isNameCardDeployed = "F";
//
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         const response = yield call(Api.selectIsNameCardServiceDeploy);
//         if (response.resultCode === 200) {
//             if(!Validation.checkEmpty(response.resultData)) {
//                 isNameCardDeployed = response.resultData;
//             }
//
//             yield put(ContactsActions.setIsNameCardDeployed({isNameCardDeployed}));
//         }else {
//             yield put(ContactsActions.setIsNameCardDeployed({isNameCardDeployed}));
//
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//     } finally {
//     }
// }
//
// /**
//  *  현재 접속한 사용자의 요금제(플랜) 조회
//  */
// export function* getMemberShip () {
//     let dialogMessage = '';
//     try {
//         // call 의 첫번째 파라미터는 호출할 API, 두번째 파라미터는 첫번째 API에 들어갈 변수
//         const response = yield call(Api.getMemberShip);
//         if (response.resultCode === 200 && !Validation.checkEmpty(response.resultData)) {
//             let membership_code = response.resultData.membership_code;
//             yield put(ContactsActions.setMembershipCode({membership_code}));
//         } else {
//             dialogMessage = response.resultMsg;
//             yield cancel();
//         }
//     } catch (error) {
//     } finally {
//     }
// }


// Action이랑 Saga 연결
export default [
    // takeLatest(contactsTypes.SET_SELECTED_DATA, contactsSaga.setSelectedData),
    // takeLatest(contactsTypes.GET_CONTACT_GROUP, contactsSaga.getContactsGroup),
    // takeLatest(contactsTypes.UPDATE_CONTACT_GROUP, contactsSaga.updateGroup),
    // takeLatest(contactsTypes.REMOVE_CONTACT_GROUP, contactsSaga.removeGroup),
    // takeLatest(contactsTypes.GET_NEXT_GROUP_NUM, contactsSaga.getNextGroupNum),
    // takeLatest(contactsTypes.ENROLL_CONTACT_GROUP, contactsSaga.enrollGroup),
    // takeLatest(contactsTypes.GET_CONTACT_LIST, contactsSaga.getContactsList),
    // takeLatest(contactsTypes.GET_USER_INFO, contactsSaga.getUserAllInfo),
    // takeLatest(contactsTypes.GET_SELECTED_CONTACT_DATA, contactsSaga.getContactData),
    // takeLatest(contactsTypes.SET_CONTACT_BOOKMARK, contactsSaga.setContactBookmark),
    // takeLatest(contactsTypes.GET_CONTACT_LOG, contactsSaga.getContactLog),
    // takeLatest(contactsTypes.CHECK_MOVE_CONTACT, contactsSaga.checkMoveContact),
    // takeLatest(contactsTypes.MOVE_CONTACT, contactsSaga.moveContact),
    // takeLatest(contactsTypes.COPY_CONTACT, contactsSaga.copyContact),
    // takeLatest(contactsTypes.REMOVE_CONTACT, contactsSaga.removeContact),
    // takeLatest(contactsTypes.GET_USER_LINK_STATE, contactsSaga.getUserLinkState),
    // takeLatest(contactsTypes.SET_USER_LINK_STATE, contactsSaga.setUserLinkState),
    // takeLatest(contactsTypes.INIT_TRASH, contactsSaga.initTrash),
    // takeLatest(contactsTypes.GET_SELECTED_SHARED_GROUP_DATA, contactsSaga.getSelectedSharedGroupData),
    // takeLatest(contactsTypes.RESTORE_CONTACT, contactsSaga.restoreContact),
    // takeLatest(contactsTypes.GET_IS_NAME_CARD_DEPLOYED, contactsSaga.getIsNameCardDeployed),
    // takeLatest(contactsTypes.GET_MEMBERSHIP_CODE, contactsSaga.getMemberShip),
];

