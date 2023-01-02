import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem, { threadCommentItemShape } from './ThreadCommentItem';

function ThreadCommentList({ comments }) {
  return (
    <div>
      <h4>{`Komentar (${comments.length})`}</h4>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <ThreadCommentItem key={comment.id} {...comment} />
        ))
      ) : (
        <div>- No Comment</div>
      )}
    </div>
  );
}

ThreadCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(threadCommentItemShape))
    .isRequired,
};

export default ThreadCommentList;
