/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

function ThreadInput({ threadInput }) {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const navigate = useNavigate();

  function threadInputHandler() {
    if (title.trim() && body.trim() && category.trim()) {
      threadInput(title, body, category);
      navigate('/');
    }
  }

  return (
    <div className='flex justify-center items-center'>
      <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow-md py-20">
        <form className="space-y-6" onSubmit={threadInputHandler}>
          <h5 className="text-xl font-medium text-gray-900 text-center">
            Tambahkan Thread
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Judul
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={onTitleChange}
              placeholder="Masukkan Judul..."
              className="title bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label htmlFor="thread" className="block mb-2 text-sm font-medium text-gray-90">Isi Thread</label>
            <textarea
              placeholder="Text..."
              style={{ height: 200 }}
              value={body}
              onChange={onBodyChange}
              id="thread"
              className="thread block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Kategori
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={onCategoryChange}
              placeholder="Isi Kategori..."
              className="category title bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Tambahkan Thread
          </button>
        </form>
      </div>
    </div>
  );
}

ThreadInput.propTypes = {
  threadInput: PropTypes.func.isRequired,
};

export default ThreadInput;
