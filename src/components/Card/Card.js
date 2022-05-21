import propTypes from 'prop-types';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './card.scss';


function MultiCard({
  repoLogo,
  titleRepo,
  subtitleRepo,
  link,
  descriptionRepo,
   
}) {
  return (
    <Card id="card">
      <CardActionArea>
        <CardMedia
          id="card-picture"
          component="img"
          image={repoLogo}
          alt={repoLogo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {titleRepo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {descriptionRepo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" href={link} target="_blank">
          Link Repo
        </Button>
      </CardActions>
    </Card>
  );
}

Card.prototype = {
  titleRepo: propTypes.string.isRequired,
  repoLogo: propTypes.string.isRequired,
  subtitleRepo: propTypes.string.isRequired,
  descriptionRepo: propTypes.string.isRequired,
};

export default MultiCard;
