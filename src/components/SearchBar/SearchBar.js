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

    <div className="container-seaarchBar">

        <form onSubmit={handleSubmit}>
            
          <Box
            sx={{width:"100%"}}
            className="box-searchBar"
            noValidate
            >

            <Stack direction="row" spacing={2} sx={{display:"flex", justifyContent:"center",alignItems:"center", margin:"2%"}}>

              <TextField 
                onChange={handleSearchChange} 
                onSubmit={handleSubmit} 
                value={searchValue} 
                label="Write a repo's name here" 
                variant="outlined" 
                onClick={resetValue}
              />
              <Button variant="contained" type="submit" endIcon={<Search size={30}/>} >
                Search
              </Button>

            </Stack>

          </Box>

        </form>
    </div>
  );
}

export default SearchBar;
