import { getAppBarUtilityClass } from "@mui/material";

export const initialMessage = 'Veuillez saisir une recherche';
export const loadingMessage = 'La recherche est en cours';

export const getMessage = (total) => {
  if (total === 0) {
    return 'La recherche n\'a rien donné, veuillez écrire autre chose';
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
 * @param {String} [param.message] Le message d'erreur de la requête
 * @param {String} [param.codeError] Le code d'erreur de la requête
 * @returns {String} le message d'erreur en francais
 */
export const getErrorMessageLength = () => {
    return 'La recherche a besoin de 3 caractères minimum';
};

export const getErrorMessageFetch = (message, codeError) => {
  console.log(message,codeError)
  return "Veuillez nous exscuser mais nous rencontrons un problème avec l'appli veuillez renouvelez votre recherche plus tard"
}
