/**
 * test scenario for threadsReducer
 *
 * - threadReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREAD action
 *  - should return the threads with the new thread when given by ADD_THREAD action
 *  - should return the threads with the upvoteby thread when given by UPVOTE_THREAD action
 *  - should return the threads with the downvoteby thread when given by DOWNVOTE_THREAD action
 *  - should return the threads with the upvoteby when given by NEUTRALUPVOTE_THREAD action
 *  - should return the threads with the downvoteby thread when given by NEUTRALDOWNVOTE_THREAD action
 *
 */

import threadsReducer from './reducer';

describe('threadReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the theads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Title 1',
            body: 'Thread Test 1',
            category: 'Category 1',
            user: 'user-1',
            upVotesBy: [],
            downVotesBy: [],
            created: '2023-01-04T10:21:45.588Z',
            totalComments: 0,
          },
          {
            id: 'thread-2',
            title: 'Title 2',
            text: 'Thread Test 2',
            category: 'Category 2',
            user: 'user-2',
            upVotesBy: [],
            downVotesBy: [],
            created: '2023-01-04T10:21:45.588Z',
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the thread with new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title 1',
        body: 'Thread Test 1',
        category: 'Category 1',
        user: 'user-1',
        upVotesBy: [],
        downVotesBy: [],
        created: '2023-01-04T10:21:45.588Z',
        totalComments: 0,
      },
    ];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Title 2',
          text: 'Thread Test 2',
          category: 'Category 2',
          user: 'user-2',
          upVotesBy: [],
          downVotesBy: [],
          created: '2023-01-04T10:21:45.588Z',
          totalComments: 0,
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with upvoteby thread when given by UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title 1',
        body: 'Thread Test 1',
        category: 'Category 1',
        user: 'user-1',
        upVotesBy: [],
        downVotesBy: [],
        created: '2023-01-04T10:21:45.588Z',
      },
    ];

    const action = {
      type: 'UP_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action: upvote thread
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the downvoteby thread when given by DOWN_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title 1',
        body: 'Thread Test 1',
        category: 'Category 1',
        user: 'user-1',
        upVotesBy: [],
        downVotesBy: [],
        created: '2023-01-04T10:21:45.588Z',
      },
    ];

    const action = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action: like thread
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the upvoteby when given by NEUTRAL_UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title 1',
        body: 'Thread Test 1',
        category: 'Category 1',
        user: 'user-1',
        upVotesBy: ['user-1'],
        downVotesBy: [],
        created: '2023-01-04T10:21:45.588Z',
      },
    ];

    const action = {
      type: 'NEUTRAL_UP_VOTE_THREAD',
      payload: {
        userId: 'user-1',
      },
    };

    // action: like thread
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with downvoteby thread when given by NEUTRAL_DOWN_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title 1',
        body: 'Thread Test 1',
        category: 'Category 1',
        user: 'user-1',
        upVotesBy: [],
        downVotesBy: ['user-1'],
        created: '2023-01-04T10:21:45.588Z',
      },
    ];

    const action = {
      type: 'NEUTRAL_DOWN_VOTE_THREAD',
      payload: {
        userId: 'user-1',
      },
    };

    // action: like thread
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
});
