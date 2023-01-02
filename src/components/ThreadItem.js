/* eslint-disable no-dupe-else-if */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { TfiComment } from 'react-icons/tfi';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { postedAt } from '../utils/index';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
  authUser,
  upVote,
  downVote,
  neutralUpVote,
  neutralDownVote,
}) {
  const navigate = useNavigate();
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

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/talks/${id}`);
    }
  };

  return (
    <div>
      <header>
        <span className="bg-white text-sm font-medium mr-2 px-3 py-1 rounded border">{`#${category}`}</span>
        <div role="button"
          tabIndex={0}
          onKeyDown={onThreadPress} onClick={onThreadClick} className="text-blue-600 text-xl font-medium my-3">{title}</div>
      </header>
      <div className='mb-3'>
        <div dangerouslySetInnerHTML={{ __html: body.length > 300 ? `${body.substring(0, 250)}...` : body }} />
      </div>
      <div className='flex'>
        <p className='mr-3 inline-flex items-center'>
          <button
            type="button"
            onClick={onUpVoteClick}
            className="mr-1"
          >
            {isThreadUpVote ? (
              <AiOutlineLike className='text-blue-500' />
            ) : (
              <AiOutlineLike />
            )}
          </button>
          {isThreadUpVote ? (
            <span className='text-blue-500'>{upVotesBy.length}</span>
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
              <AiOutlineDislike className='text-red-500' />
            ) : (
              <AiOutlineDislike />
            )}
          </button>
          {isThreadDownVote ? (
            <span className='text-red-500'>{downVotesBy.length}</span>
          ) : (
            <span>{downVotesBy.length}</span>
          )}
        </p>
        <p className='mr-3 inline-flex items-center'>
          <button
            href="/detail-thread"
            type="button"
            className="mr-1"
          >
            <TfiComment />
          </button>
          {totalComments}
        </p>
        <p className='mr-3'>{postedAt(createdAt)}</p>
        <p className='mr-3'>Dibuat Oleh <span className='font-semibold'>{user.name}</span></p>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  neutralUpVote: PropTypes.func,
  neutralDownVote: PropTypes.func,
};

ThreadItem.defaultProps = {
  upVote: null,
  downVote: null,
  neutralUpVote: null,
  neutralDownVote: null,
};

export { threadItemShape };

export default ThreadItem;
