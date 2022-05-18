import React from 'react';
import PropTypes from 'prop-types';

function Header() {
    return (
      <header>
          <div>
              <a href="/">Recherche</a>
              <a href="/faq">FAQ</a>
          </div>
      </header>
    );
  }
  
  Header.propTypes = {
    className: PropTypes.string,
  };
  Header.defaultProps = {
    className: '',
  };
  export default React.memo(Header);