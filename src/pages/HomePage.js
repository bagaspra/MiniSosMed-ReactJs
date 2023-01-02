import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadCategoryList from '../components/ThreadCategoryList';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncDownVoteThread,
  asyncNeutralDownVoteThread,
  asyncNeutralUpVoteThread,
  asyncUpVoteThread,
} from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVote = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVote = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralUpVote = (id) => {
    dispatch(asyncNeutralUpVoteThread(id));
  };

  const onNeutralDownVote = (id) => {
    dispatch(asyncNeutralDownVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const threadCategoryList = threads.filter(
    (thread, index) =>
      threads.findIndex((item) => item.category === thread.category) === index
  );

  return (
    <div className='flex justify-center items-center'>
      <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow-md py-24 px-9">
        <div>
          <h1 className='text-lg font-semibold'>Kategori Popular</h1>
          <ThreadCategoryList threads={threadCategoryList} />
        </div>
        <div className='mt-8'>
          <h1 className='text-2xl font-semibold mb-6'>Diskusi Tersedia</h1>
          <ThreadsList
            threads={threadList}
            upVote={onUpVote}
            downVote={onDownVote}
            neutralUpVote={onNeutralUpVote}
            neutralDownVote={onNeutralDownVote}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
