import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardList from '../components/LeaderboardsList';
import { asyncPopulateLeaderboards } from '../states/shared/action';

function LeaderboardsPage() {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  const leaderboardsList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <div className="flex justify-center items-center">
      <div className="py-20 px-0 w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow-md">
        <h4 className="font-semibold text-xl my-3 pl-7">Klasmen Pengguna Aktif</h4>
        <LeaderboardList leaderboards={leaderboardsList} />
      </div>
    </div>
  );
}

export default LeaderboardsPage;
