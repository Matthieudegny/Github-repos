import propTypes from 'prop-types';
import MultiCard from '../Card/Card';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import './cardsList.scss';

function CardList({
  datas,
  loading,
}) {

  return (
    
    <Grid id="grid" container spacing={4}>
    
      {datas.map((data) => (
        <Grid item xs={12} sm={6} md={4} container spacing={2} >
          {/* <MultiCard
            loading={loading}
            key={data.id}
            repoLogo={data.owner.avatar_url}
            titleRepo={data.name}
            subtitleRepo={data.owner.login}
            link={data.clone_url}
            descriptionRepo={data.description}
          /> */}
          <Skeleton animation="wave" variant="circular" width={40} height={40} />
        </Grid>
      ))}

    </Grid>
  );
}

CardList.prototype = {
  datas: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
  }).isRequired).isRequired,
};

CardList.defaultProps = {
  datas: [],
};

export default CardList;
