// == Import
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Message from '../Message/Message';
import CardList from '../CardList/CardList';

// Import request 
import { requestsGithub } from '../requests/request';

function SearchRepos() {

  const [repos, setRepos] = useState([]);
  //resultNumberRequest -> recieve the numbers of request's results
  const [total, setTotal] = useState(0);  
  //search -> result of 
  const [search, setSearch] = useState('');

  /*A FAIRE */
  //message a paramétrer en focntion de pls scénarios
  const [message, setMessage] = useState();
  // const [message, setMessage] = useState(initialMessage); // CONFIGURER UN MESSAGE INITIAL
  //à utiliser en fonction de materialize UI pour dynamiser 
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //reset only if the searchValue is validated
  const reset = () => {
    setRepos([]);
    setTotal(0);
    setHasError(false);
  };

  const fetchResults = async () => {
    /*A FAIRE*/
    // paramétrer message style
    // setMessage(loadingMessage); // CONGIGURER UN MESSAGE D'ATTENTE
    setHasError(false); 
    //paramètre card style
    setIsLoading(true);
    
      try{
        //search (hook) is sent to my request as parameter
        const dataGit = await requestsGithub(search);
        //datas required
        const datas = dataGit.data.items;
        //hooks modifications
        setRepos(datas)
        const { total_count: totalCount } = dataGit;
        setTotal(totalCount);// on met le resultat dans le state
        //setMessage(getMessage(totalCount));// CONFIGURER MESSAGE AVEC REULSTAT COUNT
      }
      catch(err) {
        /*A FAIRE*/
          // on a eu une erreur sur la requete
        // setMessage(getErrorMessage({ // CONFIGURER MESSAGE AVEC RETOUR ERREUR
        // message: err.response.data.message, //CONSERVER ?
        // codeError: getErrorCode(err.response),
        // }));
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
        // setMessage(getErrorMessage({//CONFIGURER MESSAGE AVEC RETOUR ERREUR
        //   codeError: 'searchValueTooSmall',
        // }));
        return;
      }

      reset();
      //the searchValue is validated and saved at the search hook
      setSearch(parsedSearchValue);
  };

  //if the state of search is modified and if different from null -> fetchResults
  useEffect(() => {
    if (search !== '') {
      fetchResults();
    }
  }, [search]);

  return (
    <div className="app">
      <SearchBar
        onSubmit={handleSearchSubmit}
      />
      {/* uniquement de l'hydratation de composant à partir d'ici, mes deux premiers hooks distribuent leurs data sur ces deux composants */}
      <Message result={total} />
      <CardList datas={repos} />
    </div>
  );
}

// == Export
export default React.memo(SearchRepos);
