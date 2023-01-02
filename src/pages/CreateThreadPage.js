import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';

function CreateThreadPage() {
  const dispatch = useDispatch();

  const onThreadInput = (title, body, category) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <div className='mt-10'>
      <ThreadInput threadInput={onThreadInput} />
    </div>
  );
}

export default CreateThreadPage;
