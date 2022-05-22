// == Import
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Message from '../Message/Message';
import CardList from '../CardList/CardList';
import MoreResults from '../MoreResults/MoreResults';

// Import request 
import { requestsGithub } from '../../requests/request';

function SearchRepos() {

  const [repos, setRepos] = useState([]);
  const [total, setTotal] = useState(0);  
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [hasError, setHasError] = useState('info');
  const [isLoading, setIsLoading] = useState(false);

 
  const reset = () => {
    setRepos([]);
    setTotal(0);
    setHasError('info');
    setPage(1);
  };

  const fetchResults = async () => {
    setHasError(''); 
    setIsLoading(true);
    
      try{
        const dataGit = await requestsGithub({search,page});
        const datas = dataGit.data.items;
        const totalCount = dataGit.data.total_count;
        setRepos([
          ...repos,
          ...datas
        ])        
        setTotal(totalCount);
        if(totalCount === 0) setHasError("warningResultZero"); 
        else{setHasError("success")}
      }
      catch(err) {
        console.log(err.response.data.message)
        setHasError('error'); 
      }
      finally {
        setIsLoading(false);
      }

  };

  const handleSearchSubmit = async (searchValue) => {
      const parsedSearchValue = searchValue.trim();
      if (parsedSearchValue.length < 3) {
        setHasError("warningLength");
        return;
      }
      reset();
      setSearch(parsedSearchValue);
  };

  useEffect(() => {

    let isCancelled = false;

    if (search !== '' && !isCancelled) {
      fetchResults();
    };

    //clean up
      return () => {
        isCancelled = true;
      }

  }, [search,page]);

  return (
    <div className="app">

      <SearchBar
        onSubmit={handleSearchSubmit}
      />

      <Message 
        stateRequest={hasError} 
        totalRequest={total}
        loading={isLoading}
      />

      <CardList 
        datas={repos}
        loading={isLoading}
      />

      { total !== repos.length && (
         <MoreResults
         fetchMore={() => {
           setPage(page+1)
         }}
         />
      ) }
    </div>
  );
}

// == Export
export default React.memo(SearchRepos);
