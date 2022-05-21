import propTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// hydratation de composant classique ici avec la props result qui représente le nbre de recheches
function Message({
  stateRequest,
  totalRequest,
  loading
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
    <>
      {loading ? (
        <Box sx={{ display: 'flex',justifyContent:"center", alignItems:"center", marginBottom:"3%"}}>
          <CircularProgress />
        </Box>
      ) : (
        <Stack sx={{ width: '100%', display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"3%"}} spacing={2}>
        <Alert severity={stateRequest}>
          {messageAlert}
        </Alert>           
      </Stack>
      )}
    </>
  );
}

Message.prototype = {
  result: propTypes.number.isRequired,
};

export default Message;
