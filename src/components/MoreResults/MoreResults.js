import React from 'react';
import PropTypes from 'prop-types';

function MoreResults({ fetchMore, ...rest }) {
  return (
    // <Segment align="center" {...rest}>
    //   <Button onClick={fetchMore}>
    //     Plus de résultats
    //   </Button>
    // </Segment>
    <button onClick={fetchMore}>
        Plus de résultats
    </button>
  );
}

MoreResults.propTypes = {
  fetchMore: PropTypes.func.isRequired,
};
MoreResults.defaultProps = {
};
export default React.memo(MoreResults);
