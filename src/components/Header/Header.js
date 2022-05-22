import React from 'react';
import logoGitHub from '../../public/GitHub_Logo.png'
import logoGitHub2 from '../../public/GitHub.png';
import './header.scss';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from 'react-router-dom';
import { GitHub, HelpCircle, Search } from 'react-feather';

function Header() {

  /*logos appearance*/
  const [value, setValue] = React.useState(0);

    return (

      <header>

          <div className='container-logos'>

            <img class="logo" src={logoGitHub} alt="" /> 
            <img class="logo" src={logoGitHub2} alt="" />

          </div>

          <Box>

            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction component={Link} to="/"  label="Reserach" icon={<Search size={50}/>}/>
              <BottomNavigationAction component={Link} to="/github" label="Github" icon={<GitHub size={50}/>} />
              <BottomNavigationAction component={Link} to="/faq" label="FAQ" icon={<HelpCircle size={50}/>} />
            </BottomNavigation>

          </Box>   

      </header>
    );
  }
  
export default React.memo(Header);