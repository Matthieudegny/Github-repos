import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { GitHub, HelpCircle, Search } from 'react-feather';
import { sizing } from '@mui/system';
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
  const resetValue = () => {
    setSearchValue("")
  }

  return (
    <div id="container-seaarchBar">
        <form onSubmit={handleSubmit}>
            {/* <input id="searchBar" type="text" placeholder="react" onChange={handleSearchChange} value={searchValue}/> */}
          <Box
            sx={{width:"100%"}}
            id="box-searchBar"
            noValidate
            >
            <Stack direction="row" spacing={2} sx={{display:"flex", justifyContent:"center", margin:"3%"}}>
              <TextField id="outlined-basic" 
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
