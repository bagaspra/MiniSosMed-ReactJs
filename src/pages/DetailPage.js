import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/ThreadDetail';
import {
  asyncAddComment,
  asyncReceiveThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralDownVoteThreadDetail,
  asyncNeutralUpVoteThreadDetail,
  asyncUpVoteThreadDetail,
} from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onCommentThread = (content) => {
    dispatch(asyncAddComment({ content, commentTo: id }));
  };

  const onUpVoteThreadDetail = (threadId) => {
    dispatch(asyncUpVoteThreadDetail(threadId));
  };

  const onDownVoteThreadDetail = (threadId) => {
    dispatch(asyncDownVoteThreadDetail(threadId));
  };

  const onNeutralUpVoteThreadDetail = (threadId) => {
    dispatch(asyncNeutralUpVoteThreadDetail(threadId));
  };

  const onNeutralDownVoteDetail = (threadId) => {
    dispatch(asyncNeutralDownVoteThreadDetail(threadId));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <div>
      <ThreadDetail
        {...threadDetail}
        authUser={authUser.id}
        upVote={onUpVoteThreadDetail}
        downVote={onDownVoteThreadDetail}
        neutralUpVote={onNeutralUpVoteThreadDetail}
        neutralDownVote={onNeutralDownVoteDetail}
        addCommentThread={onCommentThread}
      />
    </div>
  );
}

export default DetailPage;
