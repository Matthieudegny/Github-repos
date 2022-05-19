export const initialMessage = 'Veuillez saisir une recherche';
export const loadingMessage = 'La recherche est en cours';

export const getMessage = (total) => {
  if (total === 0) {
    return 'La recherche n\'a rien donné';
  }

  return `La recherche a donné ${total} résultat${total > 1 ? 's' : ''}`;
};

/**
 * Recupere un objet d'erreur de axios, et regarde si il reconnais une erreur spécifique
 * Si il reconnais l'erreur il retourne un code pour la fonction getErrorMessage
 * @param {Object} responseError L'erreur de requete axios
 * @returns {String} le code erreur
 */
export const getErrorCode = (responseError) => {
  if (responseError.data.errors[0].field === 'q' && responseError.data.errors[0].code) {
    return 'searchValueTooSmall';
  }
  return null;
};

/**
 * Permet de récuperer un message d'erreur
 * @param {Object} param
 * @param {String} [param.message] Le message d'erreur à afficher par defaut
 * @param {String} [param.codeError] Un code erreur pour avoir un message d'erreur particulier
 * @returns {String} le message d'erreur en francais
 */
export const getErrorMessage = ({ message = '', codeError = null }) => {
  try {
    if (codeError === 'searchValueTooSmall') {
      return 'La recherche a besoin de 3 caractères minimum';
    }
  }
  catch (err) {
    // on a mis un try catch au cas où notre if plante, si il y a une erreur, on fait le return si dessous
  }

  return `Une erreur est survenue: ${message}`;
};
