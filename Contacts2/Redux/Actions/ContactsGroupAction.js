import * as contactsTypes from './ActionTypes/ContactsTypes';

// 전체, 즐겨찾는, 최근 연락처 count 및 그룹 목록 조회
export function getTotalCount() {
    console.log("groupAction >> getTotalCount");
    return { type: contactsTypes.GET_TOTAL_COUNT  }
}