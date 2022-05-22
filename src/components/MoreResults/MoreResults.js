import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function MoreResults({ 

  fetchMore, 

  }) {

  const backToTheTop= () => {
    document.getElementById("container-logos").scrollIntoView({behavior:"smooth", block:"start"})
  }

  return (

      <Stack spacing={2} 
      direction="row" 
      justifyContent="center"
      alignItems="center"
      sx={{height:"15vh"}}
      >
        <Button variant="contained" onClick={fetchMore} size="large" >More Result</Button>
        <Button variant="outlined" size="large" onClick={backToTheTop} >Back to research</Button>
      </Stack>
  );
}

MoreResults.propTypes = {
  fetchMore: PropTypes.func.isRequired,
};

export default React.memo(MoreResults);
