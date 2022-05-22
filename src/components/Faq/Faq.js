import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './faqStyles.scss'


function Faq() {
  return (
 
    <div className='box'>

      <div className='titles'>What is the purpose of this application?</div>
      <p>Give you the possibility to find a list of github repos, in fonction of a topic of your choice.</p>

      <div className='titles'>How proceed to make a research?</div>
      <p>On the research repos page, complete the field "Write something here" and validate the research.</p>

      <div className='titles'>May i make a research about anything?</div>
      <p>You are totally free, anything you need to research.</p>

    </div>
  );
}

Faq.propTypes = {
  className: PropTypes.string,
};
Faq.defaultProps = {
  className: '',
};
export default React.memo(Faq);
