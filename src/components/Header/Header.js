import React from 'react';
import PropTypes from 'prop-types';
import logoGitHub from '../../public/GitHub_Logo.png'
import logoGitHub2 from '../../public/GitHub.png';
import './header.scss';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';


function Header() {
  const [value, setValue] = React.useState(0);
    return (
      <header>
          <div id="container-logos">
            <img class="logo" src={logoGitHub} alt="" /> 
            <img class="logo" src={logoGitHub2} alt="" />
          </div>
          <div>
              <a href="/">Recherche</a>
              <a href="/faq">FAQ</a>
          </div>
          <Box sx={{ width: 500 }}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction component={Link} to="/" label="Favorites"  />
              <BottomNavigationAction component={Link} to="/faq" label="Recents"  />
              <BottomNavigationAction component={Link} to="/about" label="Nearby"  />
            </BottomNavigation>
          </Box>
     
   
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