// == Import
import React, { useState, useEffect } from 'react';
import {
  getMessage, getErrorMessageLength,getErrorMessageFetch, initialMessage, loadingMessage,
} from '../../utils/messages';
import SearchBar from '../SearchBar/SearchBar';
import Message from '../Message/Message';
import CardList from '../CardList/CardList';
import MoreResults from '../MoreResults/MoreResults';

// Import request 
import { requestsGithub } from '../../requests/request';

function SearchRepos() {

  const [repos, setRepos] = useState([]);
  //resultNumberRequest -> recieve the numbers of request's results
  const [total, setTotal] = useState(0);  
  //search -> result of 
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
   //message a paramétrer en focntion de pls scénarios
   const [message, setMessage] = useState(initialMessage);

  /*A FAIRE */
  //à utiliser en fonction de materialize UI pour dynamiser 
  //pour dynamiser le message enc as d'erreur ex semantic = negative={isError} fichier Message.js correction
  const [hasError, setHasError] = useState(false);
  //permet de dynamiser le repoResult avec un effet de skeleton (attente sur les cartes)
  // mise en condition du return ds card.group grace à semantic
  const [isLoading, setIsLoading] = useState(false);

  //reset only if the searchValue is validated
  const reset = () => {
    setRepos([]);
    setTotal(0);
    setHasError(false);
    setPage(1);
  };

  const fetchResults = async () => {
    // paramétrer message style
    setMessage(loadingMessage);
    /*A FAIRE*/
    setHasError(false); 
    //paramètre card style
    setIsLoading(true);
    
      try{
        const dataGit = await requestsGithub({search,page});
        //datas required
        const datas = dataGit.data.items;
        const totalCount = dataGit.data.total_count;
        //hooks modifications
        //i load the precedent results with news results, to have the totality of the reserchs on one page
        setRepos([
          ...repos,
          ...datas
        ])
        console.log(dataGit)
        setTotal(totalCount);
        setMessage(getMessage(totalCount));
      }
      catch(err) {
        setMessage(getErrorMessageFetch({ 
        message: err.response.data.message, 
        codeError: err.response,
        }));
         /*A FAIRE*/
        setHasError(true); // CONFIGURATION STYLE MESSAGE ERREUR -> ROUGE
      }
      finally {
        /*A FAIRE ANIMATION LOADINF CARD/REPO RESULT*/
        setIsLoading(false);
      }

  };

  //searchValue in now in my SearchRepos Component
  const handleSearchSubmit = async (searchValue) => {
      //searchValue is cleaned
      const parsedSearchValue = searchValue.trim();
      if (parsedSearchValue.length < 3) {
        setHasError(true); // A FAIRE
        setMessage(getErrorMessageLength());
        return;
      }
      reset();
      //the searchValue is validated and saved at the search hook
      setSearch(parsedSearchValue);
  };

  //if the state of search is modified and if different from null -> fetchResults
  /*A FAIRE NETOYAGE*/
  useEffect(() => {
    if (search !== '') {
      fetchResults();
    }
  }, [search,page]);

  return (
    <div className="app">
      <SearchBar
        onSubmit={handleSearchSubmit}
      />
      <Message resultMessage={message} />
      <CardList datas={repos} />

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
