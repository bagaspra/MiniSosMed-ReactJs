import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadCommentInput({ commentThread }) {
  const [content, setContent] = useState('');

  function commentThreadHandler() {
    if (content.trim()) {
      commentThread(content);
      setContent('');
    }
  }

  function handleCommentChange({ target }) {
    if (target.value.length <= 320) {
      setContent(target.value);
    }
  }

  return (
    <div className="pb-5">
      <h4 className='text-xl font-semibold'>Beri komentar</h4>
      <form onSubmit={commentThreadHandler}>
        <textarea rows="5" value={content}
          onChange={handleCommentChange} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 my-3" />
        <button type="submit" className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Tambahkan Komentar</button>
      </form>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  commentThread: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
