import axios from 'axios';
// je prépare ma requête ds un fichier externe qui est exporté non par défault mais nommé
// inputValue est la valeur récupérée en paramètre depuis le composant App, représentant la valeur de l'input, il sera utilisé ds la requête
export async function requestsGithub({search,page,perPage = 9}) {
  try {
    //https://docs.github.com/en/rest/search#search-repositories
    const response = await axios.get('https://api.github.com/search/repositories', {
      params: {
        q: search,
        sort:'stars',
        order:'desc',
        page,
        per_page: perPage,
      },
    });
    return response;
  }
  catch (err) {
    console.error(err);
    throw err;
  }
}
