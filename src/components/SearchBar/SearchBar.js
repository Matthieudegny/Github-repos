import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Search } from 'react-feather';
import './searchBar.scss'

function SearchBar({

  onSubmit,

})
{
   const [searchValue, setSearchValue] = useState('');

   const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchValue);
  }

  const resetValue = () => {
    setSearchValue("")
  }

  return (

    <div >

        <form 
        className="container-seaarchBar"
        onSubmit={handleSubmit}>
            
          {/* <Box
            sx={{width:"100%"}}
            className="box-searchBar"
            noValidate
            > */}
            <div className="searchBar">

              <Stack>

                <TextField 
                  className='searchBar-input'
                  onChange={handleSearchChange} 
                  onSubmit={handleSubmit} 
                  value={searchValue} 
                  label="Write a repo's category here" 
                  variant="outlined" 
                  onClick={resetValue}
                />

                <Button className='searchBar-button' sx ={{margin:"auto", marginTop:"3%"}} variant="contained" type="submit" endIcon={<Search size={30}/>} >
                  Search
                </Button>

              </Stack>

            </div>
          {/* </Box> */}

        </form>
    </div>
  );
}

export default SearchBar;
