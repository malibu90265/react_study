import Ajax from '../../utils/ajax';
import ajaxCache from "../../utils/ajax-cache";
import Validation from "../../utils/validation";
import "jquery.cookie";
import {select} from "redux-saga/effects";
const globals = require("../../config/" + process.env.BUILD_ENV + "/Portal/globals");

/** ############################# [START] AddressInfoManagementController API ############################# **/

/**
 * 전체, 즐겨찾는, 최근 연락처 count 조회
 */
export function getTotalCount(isShared) {
    const url = globals.contactsApiUrl.concat('/address/addressinfo/gettotalcount?type=WEB&isShared=' + isShared);
    return Ajax.post(url, {}).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  연락처 상세 정보 조회
 */
export function getContactData(address_service_no) {
    let param = {
        "addrNo" : address_service_no,
    };
    const url = globals.contactsApiUrl.concat('/address/addressinfo/getdetailinfo');
    return Ajax.post(url, param).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  연락처 즐겨찾기 설정/해제
 */
export function setContactBookmark(address_service_no, isBookmark) {
    let param = {
        "addrNoList": address_service_no,
        "setFavorite": isBookmark ? "T" : "F",
    };
    const url = globals.contactsApiUrl.concat('/address/addressinfo/setfavorite');
    return Ajax.post(url, param).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}








/** ############################# [END] AddressInfoManagementController API ############################# **/

/** ############################# [START] AddressGroupManagementController API ############################# **/


/**
 *  내 그룹, 공유 그룹 조회
 */
export function getContactsGroup() {
    const url = globals.contactsApiUrl.concat('/address/group/getallgroup');
    return Ajax.get(url).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  그룹 등록
 */
export function enrollGroup(address_type, group_name, memberList, selectedCompanyNo, selectedCompanyName) {
    const url = globals.contactsApiUrl.concat('/address/group/insert');
    let param = {
        'addressType' : address_type,
        'groupNm' : group_name,
    };

    // 공유그룹인 경우, 공유멤버 등록
    if(!Validation.checkEmpty(memberList)){
        param.is_shared = "T";
        param.memberList = JSON.stringify(memberList);
        param.company_no = selectedCompanyNo;
        param.company_name = selectedCompanyName;
    }

    return Ajax.post(url, param, false).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  그룹 수정
 */
export function updateGroup(address_group_no, group_name, company_no, company_name, memberList) {
    const url = globals.contactsApiUrl.concat('/address/group/update');
    let param = {
        'addrGrpNo' : address_group_no,
        'groupNm' : group_name,
    };

    if(!Validation.checkEmpty(company_no) && !Validation.checkEmpty(memberList)){
        param.company_no = company_no;
        param.memberList = JSON.stringify(memberList);
        param.company_name = company_name;
    }

    return Ajax.post(url, param).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  그룹 삭제
 */
export function removeGroup(address_group_no, group_name) {
    const url = globals.contactsApiUrl.concat('/address/group/delete');
    let param = {
        "address_group_no": address_group_no,
        "group_name": group_name,
    };
    return Ajax.post(url, param).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  그룹 등록시, 그룹 정보 조회
 */
export function getNextGroupNum(address_type) {
    const url = globals.contactsApiUrl.concat('/address/group/getnextgroupnm?address_type=' + address_type);
    return Ajax.get(url).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  연락처 이동하려는 그룹에 이미 존재하는지 체크
 */
export function checkMoveContact(moveType, checkedList, moveGroupData, address_type) {
    let addrNoList = "";
    for(let i=0; i<checkedList.length; i++){
        if(i === 0){
            addrNoList += checkedList[0].address_service_no;
        }else{
            addrNoList += "," + checkedList[i].address_service_no;
        }
    }

    let param = {
        'addrNoList': addrNoList,
        'afterAddrGrpNo': moveGroupData[0].address_group_no,
        'address_type': address_type,
    };
    const url = globals.contactsApiUrl.concat('/address/group/checkmoveaddress');
    return Ajax.post(url, param).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}


/**
 *  연락처 공유멤버조회
 */
export function getSelectedSharedGroupData(address_group_no, company_no) {
    const url = globals.contactsApiUrl.concat('/address/group/getsharedgroupdata?groupNo=' + address_group_no + "&companyNo=" + company_no);
    return Ajax.get(url).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}


/**
 *  연락처 이동
 */
export function moveContact(checkedList, selectedGroupData, moveGroupData) {
    let addrNoList = "";
    let addressNameList = [];
    for(let i=0; i<checkedList.length; i++){
        addressNameList.push(checkedList[i].address_name);

        if(i === 0){
            addrNoList += checkedList[0].address_service_no;
        }else{
            addrNoList += "," + checkedList[i].address_service_no;
        }
    }

    let param = {
        'addrNoList':           addrNoList,
        'beforeAddrGrpNo':      selectedGroupData.address_group_no,
        'afterAddrGrpNo':       moveGroupData[0].address_group_no,
        'before_group_name':    selectedGroupData.group_name,
        'after_group_name':     moveGroupData[0].group_name,
        'addressNameList':      addressNameList,
    };
    const url = globals.contactsApiUrl.concat('/address/group/moveaddress2');
    return Ajax.post(url, param).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  연락처 복사
 */
export function copyContact(checkedList, selectedGroupData, moveGroupData) {
    let addrNoList = "";
    let addressNameList = [];
    for(let i=0; i<checkedList.length; i++){
        addressNameList.push(checkedList[i].address_name);

        if(i === 0){
            addrNoList += checkedList[0].address_service_no;
        }else{
            addrNoList += "," + checkedList[i].address_service_no;
        }
    }

    let param = {
        'afterAddrGrpNo':       moveGroupData[0].address_group_no,
        'addrNoList':           addrNoList,
        'before_group_name':    selectedGroupData.group_name,
        'after_group_name':     moveGroupData[0].group_name,
        'addressNameList':      addressNameList,
    };

    const url = globals.contactsApiUrl.concat('/address/group/copyaddress2');
    return Ajax.post(url, param).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  연락처 삭제
 */
export function removeContact(checkedList, selectedGroupData) {
    let addrNoList = checkedList[0].address_service_no;
    let addressNameList = checkedList[0].address_name;
    for(let i=1; i<checkedList.length; i++){
        addrNoList += "," + checkedList[i].address_service_no;
        addressNameList += "," + checkedList[i].address_name;
    }

    let param = {
        "addrNoList": addrNoList,
        "isGroupAddressDelete": selectedGroupData.address_group_no,
        "addressNameList": addressNameList,
    };

    const url = globals.contactsApiUrl.concat('/address/addressinfo/delete2');
    return Ajax.post(url, param).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  휴지통 비우기
 */
export function initTrash() {
    let param = {
        'removeAll' : 1,
    };
    const url = globals.contactsApiUrl.concat('/address/addressinfo/removecontacts');
    return Ajax.post(url, param).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  연락처 복원
 */
export function restoreContact(contactsList, groupList) {
    let param = {
        'contactsList' : contactsList,
        'groupList' : groupList,
    };
    const url = globals.contactsApiUrl.concat('/address/addressinfo/restorecontacts');
    return Ajax.post(url, param, true).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}






/** ############################# [END] AddressInfoManagementController API ############################# **/

/** ############################# [START] AddressListSearchController API ############################# **/

/**
 *  연락처 목록 조회
 */
export function getContactsList(groupIdx, sortIdx, isAscending, offset=null, limit=null, isShared=null) {

    const url = globals.contactsApiUrl.concat('/contact-list');
    // indexedDB 정보
    let idbInfo = {
        db: 'contacts_list',
        version: 1,
        store: 'contacts_list',
        pk: 'user_no',
    };

    let param = {
        'groupIdx': groupIdx,
        'sortIdx': sortIdx,
        'isAscending': isAscending,
        'offsetNum': offset,
        'limit_count': limit,
        'exclude': 'PHONE,EMAIL',
        'isShared': isShared,
    };

    if(groupIdx === -1 && sortIdx === -1 && isAscending === 'T') {
        return ajaxCache.post(url, param, {idb: idbInfo}).then((response) => {
            // response = JSON.parse(response);
            return response;
        }).catch(error => ({error}))
    } else {
        return Ajax.post(url, param).then((response) => {
            response = JSON.parse(response);
            return response;
        }).catch(error => ({error}))
    }

    // const url = globals.contactsApiUrl.concat('/list2');
    // let param = {
    //     'groupIdx': groupIdx,
    //     'sortIdx': sortIdx,
    //     'isAscending': isAscending,
    //     'offsetNum': offset,
    //     'limit_count': limit,
    //     'exclude': 'PHONE,EMAIL',
    // };

    // return Ajax.post(url, param).then((response) => {
    //     response = JSON.parse(response);
    //     return response;
    // }).catch(error => ({error}))
}

/**
 *  연락처(단건) 활동기록 조회
 */
export function getContactLog(address_service_no) {
    const url = globals.contactsApiUrl.concat('/address/getlist/getcontactslogs?address_service_no='
                    + address_service_no + '&page=1&pageSize=50&order=desc&orderKey=time&log_type=HISTORY_CONTACT');
    return Ajax.get(url).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  사용자 LINK 상태 조회
 */
export function getUserLinkState() {
    const url = globals.contactsApiUrl.concat('/address/getuserlinkstate');
    return Ajax.get(url).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  사용자 LINK 상태 변경
 */
export function setUserLinkState(userLinkState) {
    let param = {
        'is_linked' : userLinkState,
    };
    const url = globals.contactsApiUrl.concat('/address/updateuserlinkstate');
    return Ajax.post(url, param).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}




/** ############################# [END] AddressListSearchController API ############################# **/

/**
 *  내 연락처 조회
 */
export function getUserAllInfo() {
    const url = globals.wehagoCommonApiUrl.concat('/user/userinfo/selectuserallinfo');
    return Ajax.get(url).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}

/**
 *  명함입력센터 서비스 배포유무 조회
 */
export function selectIsNameCardServiceDeploy() {
    const url = globals.wehagoCommonApiUrl.concat('/company/deploy/namecard?service_code=namecard');
    return Ajax.get(url).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}


/**
 *  현재 접속한 사용자 요금제(플랜) 조회
 */
export function getMemberShip() {
    const url = globals.wehagoCommonApiUrl + "/market/membership";
    return Ajax.get(url).then((response) => {
        response = JSON.parse(response);
        return response;
    }).catch(error => ({error}))
}
