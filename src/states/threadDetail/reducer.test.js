/**
 *  Test scenario for threadDetail Reducer
 *
 *  - threadDetailReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREAD_DETAIL action
 *  - should return null when given by CLEAR_THREAD_DETAIL action
 *  - should return the threads with the comment when given by ADD_COMMENT action
 *  - should return the threads with the upvoteby thread when given by UPVOTE_THREAD action
 *  - should return the threads with the downvoteby thread when given by DOWNVOTE_THREAD action
 *  - should return the threads with the upvoteby when given by NEUTRALUPVOTE_THREAD action
 *  - should return the threads with the downvoteby thread when given by NEUTRALDOWNVOTE_THREAD action
 *
 */

import threadDetailReducer from './reducer';

describe('threadDetailReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the theads when given by RECEIVE_THREADS_DETAIL action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Title 1',
          body: 'Thread Body 1',
          category: 'Category 1',
          user: 'user-1',
          upVotesBy: [],
          downVotesBy: [],
          created: '2023-01-04T10:21:45.588Z',
          totalComments: 0,
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return null when given by CLEAR_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Title 1',
      body: 'Thread Body 1',
      category: 'Category 1',
      user: 'user-1',
      upVotesBy: [],
      downVotesBy: [],
      created: '2023-01-04T10:21:45.588Z',
      totalComments: 0,
    };

    const action = {
      type: 'CLEAR_THREAD_DETAIL',
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(null);
  });

  it('should return the threads with the comment when given by ADD_COMMENT action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title 1',
        body: 'Thread Body 1',
        category: 'Category 1',
        user: 'user-1',
        upVotesBy: [],
        downVotesBy: [],
        created: '2023-01-04T10:21:45.588Z',
        comments: [],
      },
    ];

    const action = {
      type: 'ADD_COMMENT',
      payload: {
        comment: 'comment',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload]);
  });

  it('should return the threads with upvoteby thread when given by UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Title 1',
      body: 'Thread Body 1',
      category: 'Category 1',
      user: 'user-1',
      upVotesBy: [],
      downVotesBy: [],
      created: '2023-01-04T10:21:45.588Z',
    };

    const action = {
      type: 'UP_VOTE_THREAD_DETAIL',
      payload: {
        id: 'thread-1',
        userId: 'user-1',
      },
    };

    // action: upvote thread
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
    });
  });

  it('should return the threads with upvoteby thread when given by DOWN_VOTE_THREAD action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Title 1',
      body: 'Thread Body 1',
      category: 'Category 1',
      user: 'user-1',
      upVotesBy: [],
      downVotesBy: [],
      created: '2023-01-04T10:21:45.588Z',
    };

    const action = {
      type: 'DOWN_VOTE_THREAD_DETAIL',
      payload: {
        id: 'thread-1',
        userId: 'user-1',
      },
    };

    // action: upvote thread
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      downVotesBy: [action.payload.userId],
    });
  });
});
