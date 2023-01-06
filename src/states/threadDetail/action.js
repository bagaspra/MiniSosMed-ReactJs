import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRAL_UP_VOTE_THREAD_DETAIL: 'NEUTRAL_UP_VOTE_THREAD_DETAIL',
  NEUTRAL_DOWN_VOTE_THREAD_DETAIL: 'NEUTRAL_DOWN_VOTE_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function addCommentActionCreator(idThread, content) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      idThread,
      content,
    },
  };
}

function upVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralUpVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRAL_UP_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}
function neutralDownVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRAL_DOWN_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment({ content, commentTo }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ content, commentTo });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(
      upVoteThreadDetailActionCreator({ threadId, userId: authUser.id })
    );

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        upVoteThreadDetailActionCreator({ threadId, userId: authUser.id })
      );
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(
      downVoteThreadDetailActionCreator({ threadId, userId: authUser.id })
    );

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        downVoteThreadDetailActionCreator({ threadId, userId: authUser.id })
      );
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralUpVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(
      neutralUpVoteThreadDetailActionCreator({ threadId, userId: authUser.id })
    );

    try {
      await api.neutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        neutralUpVoteThreadDetailActionCreator({
          threadId,
          userId: authUser.id,
        })
      );
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralDownVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(
      neutralDownVoteThreadDetailActionCreator({
        threadId,
        userId: authUser.id,
      })
    );

    try {
      await api.neutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        neutralDownVoteThreadDetailActionCreator({
          threadId,
          userId: authUser.id,
        })
      );
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  neutralUpVoteThreadDetailActionCreator,
  neutralDownVoteThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralUpVoteThreadDetail,
  asyncNeutralDownVoteThreadDetail,
  addCommentActionCreator,
};
