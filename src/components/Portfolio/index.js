import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "2rem",
  },
});

const ImgMediaCard = (props) => {
  const classes = useStyles();
  const { exp } = props;
  const { img, alt, title, desc } = exp;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={alt}
          height="140"
          image={img}
          title={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{ color: 'black' }}>
            {title}
          </Typography>
          <Typography variant="body2" component="p" style={{ color: '#565656' }}>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ImgMediaCard;