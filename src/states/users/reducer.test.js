/**
 * test scenario for usersReducer
 *
 * - threadReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by RECEIVE_USERS action
 *
 */

import usersReducer from './reducer';

describe('threadReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_USERS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        threads: [
          {
            id: 'user-1',
            name: 'Name 1',
            email: 'Email 1',
          },
          {
            id: 'user-2',
            name: 'Name 2',
            email: 'Email 3',
          },
        ],
      },
    };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.users);
  });
});
