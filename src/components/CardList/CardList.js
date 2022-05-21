import propTypes from 'prop-types';
import MultiCard from '../Card/Card';
import Grid from '@mui/material/Grid';
import './cardsList.scss';

// hydratation de composant classique ici avec la props datas qui représente le résultat de la requête axios (avec affinement data.items)
function CardList({
  // j'ai une erreur ici que je ne comprends pas (datas' is missing in props validation) alors que je l'ai bien déclaré, j'ai également essaayé avec defaultProps
  // ligne 34 sans succès
  datas,
}) {
  return (
    <Grid id="grid" container spacing={4}>
      { /* je boucle ici mon tableau de data(requête) stocké ds datas, et je distribue les valeurs provenant de la requête à mon composant
      Card que j'ai directement importé ici ds CardList */}
      {datas.map((data) => (
        <Grid item xs={12} sm={6} md={4} container spacing={2} >
          <MultiCard
            key={data.id}
            repoLogo={data.owner.avatar_url}
            titleRepo={data.name}
            subtitleRepo={data.owner.login}
            link={data.clone_url}
            descriptionRepo={data.description}
          />
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
