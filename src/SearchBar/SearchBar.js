
function SearchBar({
  // j'utilise ces deux props comme function pour remonter des datas vers App
  handleInputRequest,
  sendRequest,
}) {
  return (
    <div id="container-seaarchBar">
        <form action="">
            <input id="searchBar" type="text" placeholder="react" onChange={handleInputRequest} />
            <input type="submit" value="Search" onClick={sendRequest}/>
            {/* <button type="button" id="searchButton" onClick={sendRequest}> </button> */}
        </form>
    </div>
  );
}

export default SearchBar;
