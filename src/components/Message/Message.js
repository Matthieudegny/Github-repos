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

  let messageAlert = ""
  if(stateRequest==="success") messageAlert=`Your research match with ${totalRequest} repos`
  if(stateRequest==="error") messageAlert="Sorry, we encounter a dysfunction with the application, please retry later "
  if(stateRequest==="warningLength") {
    stateRequest="warning" 
    messageAlert="Please enter at least 3 letters "
  }
  if(stateRequest==="warningResultZero") {
    stateRequest="warning" 
    messageAlert="No result for your request, please try something else "
  }
 
  return (

    <>

      {loading ? (

        <Box sx={{ display: 'flex',justifyContent:"center", alignItems:"center", margin:"1%"}}>
          <CircularProgress />
        </Box>

      ) : (

        <Stack sx={{ width: '100%', display:"flex", justifyContent:"center", alignItems:"center", margin:"1% 0"}}>

          {(stateRequest==='info') ? (
         
              <>
              </>

          ) : (

            <Alert severity={stateRequest}>
              {messageAlert}
            </Alert>     

          )}
                
      </Stack>

      )}
    </>
  );
}

Message.prototype = {
  totalRequest: propTypes.number.isRequired,
  stateRequest: propTypes.string.isRequired,
  loading: propTypes.bool.isRequired
};

export default Message;
