import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './githubStyles.scss'


function Github() {
  return (
 
    <div className='box'>

        <strong>GitHub </strong> is a code hosting platform for version control and collaboration. 

        It lets you and others work together on projects from anywhere.

        You can interact with people, repositories, and organizations on GitHub. 

        See what others are working on and who they are connecting with from your personal dashboard.

        <div className='new-line'></div>

        Let me introduce you, my personnal works on github. 
        
        <Stack direction="row" justifyContent="center" margin="3%">
            <Button variant="contained" href='https://github.com/Matthieudegny' target="_blank" size='large'>My github</Button>
        </Stack>

    </div>
  );
}

export default React.memo(Github);
