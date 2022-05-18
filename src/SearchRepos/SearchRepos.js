// == Import
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Message from '../Message/Message';
import CardList from '../CardList/CardList';
// import data from '../../data/repos';

// Import request axios
import { requestsGithub } from '../requests/request';

function SearchRepos() {
  // J'utilise ces deux hooks pour stocker les infos de la requête soit datasRequest qui stocke tous les donnés de la requête (data.items)
  // et resultNumberRequest qui stocke le numbre de requêtes trouvées (data.total_count)
  const [datasRequest, setDatasRequest] = useState([]);
  const [resultNumberRequest, setResulNumberRequest] = useState(0);
  // J'utilise ce hook pour stocker et utiliser la valeur de l'input avec la const saveInputValue
  const [inputValue, setInputValue] = useState('');

  const saveInputValue = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleLoadData = async () => {
    try {
      const dataGit = await requestsGithub(inputValue);
      const datas = dataGit.data.items;
      const numberOfReserachs = dataGit.data.total_count;
      
      setResulNumberRequest(numberOfReserachs);
      setDatasRequest(datas);
      
    }
    catch (err) {
      console.error(err);
    }
  };

  const submitInitiate = (event) => {
    event.preventDefault();
    console.log("ok")
    handleLoadData();
  };

  return (
    <div className="app">
      <SearchBar
      // SearchBar comprend deux fonctions qui me permettent de remonter de l'info depuis les composants enfants vers App(valeur input + listener button)
      // manipulation de l'input
        handleInputRequest={saveInputValue}
      // manipulation du button
        sendRequest={submitInitiate}
      />
      {/* uniquement de l'hydratation de composant à partir d'ici, mes deux premiers hooks distribuent leurs data sur ces deux composants */}
      <Message result={resultNumberRequest} />
      <CardList datas={datasRequest} />
    </div>
  );
}

// == Export
export default React.memo(SearchRepos);
