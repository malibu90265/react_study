import * as types from '../constants/ActionTypes'

export * from './mail/mail';
export * from './mail/secure';
export * from './schedule/schedule';
export * from './expense/expense';
export * from './contacts/contacts';
export * from './common/common';
export * from './books/books';
export * from '../components/Services/Company/ReduxAndSaga/Actions';

export function increase(amount) {
    return {
        type: types.INCREASE,
        amount: amount
    }
}
