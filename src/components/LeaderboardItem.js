import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ user, score }) {
  return (
    <tbody>
      <tr className="bg-white hover:bg-gray-50">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
          {user.name}
        </th>
        <td className="py-4 px-6">
          {score}
        </td>
      </tr>
    </tbody>

  );
}

const userLeaderboardItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(userLeaderboardItemShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
};

export { leaderboardItemShape };

export default LeaderboardItem;
