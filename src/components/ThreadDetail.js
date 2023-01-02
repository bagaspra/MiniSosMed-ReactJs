/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { postedAt } from '../utils';
import ThreadCommentInput from './ThreadCommentInput';
import ThreadCommentItem, { threadCommentItemShape } from './ThreadCommentItem';

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
  authUser,
  upVote,
  downVote,
  neutralUpVote,
  neutralDownVote,
  addCommentThread,
}) {
  const isThreadUpVote = upVotesBy.includes(authUser);
  const isThreadDownVote = downVotesBy.includes(authUser);

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    if (!isThreadUpVote && !isThreadDownVote) {
      upVote(id);
    } else if (isThreadDownVote) {
      neutralDownVote(id);
      upVote(id);
    } else if (isThreadUpVote) {
      neutralUpVote(id);
    }
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    if (!isThreadUpVote && !isThreadDownVote) {
      downVote(id);
    } else if (isThreadUpVote) {
      neutralUpVote(id);
      downVote(id);
    } else if (isThreadDownVote) {
      neutralDownVote(id);
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow-md py-24 px-9">
        <header>
          <span className="bg-white text-sm font-medium mr-2 px-3 py-1 rounded border">{`#${category}`}</span>
          <div className="text-slate-800 text-3xl font-bold my-3">{title}</div>
        </header>
        <div className='mb-3'>
          <div className='text-lg'>
            {parse(body)}
          </div>
        </div>
        <div className='flex mb-7'>
          <p className='mr-3 inline-flex items-center'>
            <button
              type="button"
              onClick={onUpVoteClick}
              className="mr-1"
            >
              {isThreadUpVote ? (
                <AiOutlineLike style={{ color: 'blue' }} />
              ) : (
                <AiOutlineLike />
              )}
            </button>
            {isThreadUpVote ? (
              <span style={{ color: 'blue' }}>{upVotesBy.length}</span>
            ) : (
              <span>{upVotesBy.length}</span>
            )}
          </p>

          <p className='mr-3 inline-flex items-center'>
            <button
              type="button"
              onClick={onDownVoteClick}
              className="mr-1"
            >
              {isThreadDownVote ? (
                <AiOutlineDislike style={{ color: 'red' }} />
              ) : (
                <AiOutlineDislike />
              )}
            </button>
            {isThreadDownVote ? (
              <span style={{ color: 'red' }}>{downVotesBy.length}</span>
            ) : (
              <span>{downVotesBy.length}</span>
            )}
          </p>
          <p className='mr-4'>{postedAt(createdAt)}</p>
          <div className="inline-flex items-center">
            <img className="w-5 h-5 rounded-full mr-2" src={owner.avatar} alt={owner.name} />
            <p className='mr-3'>Dibuat Oleh <span className='font-semibold'>{owner.name}</span>
            </p>
          </div>
        </div>
        <ThreadCommentInput commentThread={addCommentThread} />
        <div>
          <h2>{`Komentar (${comments.length})`}</h2>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <ThreadCommentItem key={comment.id} {...comment} />
            ))
          ) : (
            <div>- Tidak ada komentar</div>
          )}
        </div>

      </div>
    </div>
  );
}
const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(threadCommentItemShape))
    .isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  neutralUpVote: PropTypes.func,
  neutralDownVote: PropTypes.func,
  addCommentThread: PropTypes.func,
};

ThreadDetail.defaultProps = {
  upVote: null,
  downVote: null,
  neutralUpVote: null,
  neutralDownVote: null,
  addCommentThread: null,
};

export { userShape };

export default ThreadDetail;
