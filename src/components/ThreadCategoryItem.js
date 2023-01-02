import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategoryItem({ category }) {
  return (
    <div>
      <p>{`#${category}`}</p>
    </div>
  );
}

const threadItemShape = {
  category: PropTypes.string.isRequired,
};

ThreadCategoryItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadCategoryItem;
