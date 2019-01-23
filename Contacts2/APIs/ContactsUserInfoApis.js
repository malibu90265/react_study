import Ajax from '../../../../utils/ajax';
import ajaxCache from "../../../../utils/ajax-cache";
import Validation from "../../../../utils/validation";
import "jquery.cookie";
const globals = require("../../config/" + process.env.BUILD_ENV + "/Portal/globals");

/** ############################# ContactsUserInfo API ############################# **/

/**
 * 전체, 즐겨찾는, 최근 연락처 count 조회
 */
// export function getTotalCount(isShared) {
//     const url = globals.contactsApiUrl.concat('/address/addressinfo/gettotalcount?type=WEB&isShared=' + isShared);
//     return Ajax.post(url, {}).then((response) => {
//         response = JSON.parse(response);
//         return response;
//     }).catch(error => ({error}))
// }
//
// /**
//  *  연락처 상세 정보 조회
//  */
// export function getContactData(address_service_no) {
//     let param = {
//         "addrNo" : address_service_no,
//     };
//     const url = globals.contactsApiUrl.concat('/address/addressinfo/getdetailinfo');
//     return Ajax.post(url, param).then((response) => {
//         response = JSON.parse(response);
//         return response;
//     }).catch(error => ({error}))
// }
//
// /**
//  *  연락처 즐겨찾기 설정/해제
//  */
// export function setContactBookmark(address_service_no, isBookmark) {
//     let param = {
//         "addrNoList": address_service_no,
//         "setFavorite": isBookmark ? "T" : "F",
//     };
//     const url = globals.contactsApiUrl.concat('/address/addressinfo/setfavorite');
//     return Ajax.post(url, param).then((response) => {
//         response = JSON.parse(response);
//         return response;
//     }).catch(error => ({error}))
// }

