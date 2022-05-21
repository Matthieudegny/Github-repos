import propTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// hydratation de composant classique ici avec la props result qui représente le nbre de recheches
function Message({
  resultMessage,
  stateRequest,
  totalRequest,
}) {
  let test = "success"
  let messageAlert = ""
  if(stateRequest==="success") messageAlert=`Votre recherche a donné ${totalRequest} résultats`
  if(stateRequest==="error") messageAlert="Problème avec fetch "
  if(stateRequest==="warningLength") {
    stateRequest="warning" 
    messageAlert="Veuillze rentrer au moins 3 lettres "
  }
  if(stateRequest==="warningResultZero") {
    stateRequest="warning" 
    messageAlert="aucun résultat pour votre recherche "
  }
  if(stateRequest==="info") messageAlert="Bienevnu ds la recherce de repos "
  return (
    <div id="message">{resultMessage}
        <Stack sx={{ width: '90%' }} spacing={2}>
      
    
          {/* <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="warning">This is a warning alert — check it out!</Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert> */}
          <Alert severity={stateRequest}>{messageAlert}</Alert> 
         
          
        </Stack>
    </div>
  );
}

Message.prototype = {
  result: propTypes.number.isRequired,
};

export default Message;
