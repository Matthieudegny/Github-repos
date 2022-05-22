
import propTypes from 'prop-types';
import CardRepo from '../CardRepo/CardRepo';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import './cardsList.scss';

function CardList({

  datas,
  loading,

}) {
  
  return (
    
  <Grid id="grid" container spacing={4}>

    {loading ? (

      [...Array(15)].map((_, index) => (

        <Grid key={index+1} item xs={12} sm={6} md={4} container spacing={2} >

          <Skeleton variant="rectangular" sx={{height:"400px", width:"100%"}} />

        </Grid>

      ))

    ) : (

      <>
      {datas.map((data) => (
       
        <Grid item xs={12} sm={6} md={4} container spacing={2} >
         
          <CardRepo
          
            key={data.id}
            loading={loading}
            repoLogo={data.owner.avatar_url}
            titleRepo={data.name}
            subtitleRepo={data.owner.login}
            link={data.clone_url}
            descriptionRepo={data.description}
         
          /> 
      
        </Grid>

      ))}
      </>

    )}
    
  </Grid>
  );
}

CardList.prototype = {
  datas: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
  }).isRequired).isRequired,
  loading: propTypes.bool.isRequired,
};



export default CardList;
