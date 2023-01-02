import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadList({
  threads,
  upVote,
  downVote,
  neutralUpVote,
  neutralDownVote,
}) {
  return (
    <div>
      {threads.map((thread) => (
        <div key={thread.id}>
          <ThreadItem
            {...thread}
            upVote={upVote}
            downVote={downVote}
            neutralUpVote={neutralUpVote}
            neutralDownVote={neutralDownVote}
          />
          <hr className="my-6 border-gray-300" />
        </div>
      ))}
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralUpVote: PropTypes.func.isRequired,
  neutralDownVote: PropTypes.func.isRequired,
};

export default ThreadList;
