import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

function LeaderboardsList({ leaderboards }) {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-6">
              Pengguna
            </th>
            <th scope="col" className="py-3 px-6">
              Skor
            </th>
          </tr>
        </thead>
        {leaderboards.map((leaderboard) => (
          <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
        ))}
      </table>
    </div>
  );
}

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape))
    .isRequired,
};

export default LeaderboardsList;
