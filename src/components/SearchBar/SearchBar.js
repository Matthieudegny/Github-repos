import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './searchBar.scss'

function SearchBar({
  onSubmit,
})
{
   // i am using this hook to save the value of the input;
   const [searchValue, setSearchValue] = useState('');

   //thanks onChange, the value of the input is change in fonction of what the user is writting
   const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  //the value of the input is  sent to the parent's component with onSubmit()
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchValue);
  }


  return (
    <div id="container-seaarchBar">
        <form onSubmit={handleSubmit}>
            {/* <input id="searchBar" type="text" placeholder="react" onChange={handleSearchChange} value={searchValue}/> */}
          <Box
            id="box-searchBar"
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" onChange={handleSearchChange} onSubmit={handleSubmit} value={searchValue} label="Write a repo's name here" variant="outlined" />
            <input type="submit" value="Search"/>
          </Box>
        </form>
    </div>
  );
}

export default SearchBar;
