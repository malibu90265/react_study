import { all } from 'redux-saga/effects';
import messageSagas from './communication/messageSaga';
import talkSaga from './communication/talkSaga';
import communicationSaga from './communication/communicationSaga';
import todoSaga from './todo/todoSaga';
// import contactsSaga from './contacts/contactsSaga';
import bizspaceSaga from '../components/Services/Bizspace/Sagas/bizspaceSaga';
import noteSaga from './note/noteSaga';
import commonSaga from './common/commonSaga';
import AlSaga from '../components/Services/Al/Redux/Sagas/AlSaga';
import AlStatusSaga from '../components/Services/Al/Redux/Sagas/AlStatusSaga';
import AlWeTalkSaga from '../components/Services/Al/Redux/Sagas/AlWeTalkSaga';
import CompanySaga from '../components/Services/Company/ReduxAndSaga/Sagas';
import WeCrmSaga from '../components/Services/WeCRM/Redux/Sagas/WeCrmSaga';
import ContactsGroupSaga from '../components/Services/Contacts2/Redux/Sagas/ContactsGroupSaga';
import ContactsInfoSaga from '../components/Services/Contacts2/Redux/Sagas/ContactsInfoSaga';
import ContactsUserInfoSaga from '../components/Services/Contacts2/Redux/Sagas/ContactsUserInfoSaga';
import ContactsListSaga from '../components/Services/Contacts2/Redux/Sagas/ContactsListSaga';

export default function* rootSaga() {
  yield all([
      ...messageSagas,      // 메시지 saga watchers
      ...talkSaga,          // 대화방 saga watchers
      ...communicationSaga, // 대화방 saga watchers
      ...todoSaga,          // 할일 saga
      // ...contactsSaga,      // 연락처 saga watchers
      ...ContactsGroupSaga,      // 연락처 saga watchers
      ...ContactsInfoSaga,      // 연락처 saga watchers
      ...ContactsUserInfoSaga,      // 연락처 saga watchers
      ...ContactsListSaga,      // 연락처 saga watchers
      ...bizspaceSaga,      // 비즈스페이스 saga watchers
      ...noteSaga,          // 노트 saga watchers
      ...commonSaga,        // common saga watchers
	  ...AlSaga, 			// 우리 세무사 Saga watchers
      ...AlStatusSaga,      // 우리 세무사 자금현황 Saga watchers
	  ...AlWeTalkSaga, 		// 우리 세무사 Saga watchers
      ...CompanySaga,       // 회사설정 Saga watchers
	  ...WeCrmSaga,			// CRM Saga watchers
  ])
}
