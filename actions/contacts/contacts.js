import * as contacts_types from './contacts_types';

// 사용자가 선택한 그룹/연락처 정보 setting
export function setSelectedData({selectedData}) {
    return { type: contacts_types.SET_SELECTED_DATA, selectedData }
}