import React from 'react';
import { Card,CardActions,CardActionArea,CardContent,Button,CardMedia,Typography } from '@mui/material';
import useStyles from './styles';


const NewsCard = ({articles:{description,publishedAt,source,title,url,urlToImage},i}) => {
    const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'} title={title} />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" href={url}>Learn More</Button>
        <Typography variant="h5" color="textSecondary" component="h2">{i + 1}</Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard;