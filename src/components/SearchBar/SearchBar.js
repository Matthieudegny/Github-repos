import React, { useState } from 'react';


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
        <form action="" onSubmit={handleSubmit}>
            <input id="searchBar" type="text" placeholder="react" onChange={handleSearchChange} value={searchValue}/>
            <input type="submit" value="Search"/>
        </form>
    </div>
  );
}

export default SearchBar;
