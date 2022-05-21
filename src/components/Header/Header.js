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
import { GitHub, HelpCircle, Search } from 'react-feather';



function Header() {
  const [value, setValue] = React.useState(0);
    return (
      <header>
          <div id="container-logos">
            <img class="logo" src={logoGitHub} alt="" /> 
            <img class="logo" src={logoGitHub2} alt="" />
          </div>
          <Box id="header-box">
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction component={Link} to="/"  label="Reserach repos" icon={<Search size={50}/>}/>
              <BottomNavigationAction component={Link} to="/faq" label="Github" icon={<GitHub size={50}/>} />
              <BottomNavigationAction component={Link} to="/faq" label="FAQ" icon={<HelpCircle size={50}/>} />
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