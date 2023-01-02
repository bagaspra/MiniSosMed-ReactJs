/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { postedAt } from '../utils';

function ThreadCommentItem({ content, createdAt, owner }) {
  return (
    <div>
      <div className='flex justify-between mt-4'>
        <div className='inline-flex items-center'>
          <img className="w-6 h-6 rounded-full mr-1" src={owner.avatar} alt={`${owner.name}`} />
          <h5>{owner.name}</h5>
        </div>
        <div>
          <p>{postedAt(createdAt)}</p>
        </div>
      </div>
      <div className="mt-2">
        <p>{parse(content)}</p>
      </div>
      <hr className="my-6 border-gray-200" />
    </div>
  );
}

const ownerCommentItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadCommentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerCommentItemShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadCommentItem.propTypes = {
  ...threadCommentItemShape,
};

export { threadCommentItemShape };

export default ThreadCommentItem;
