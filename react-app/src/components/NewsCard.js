import React from 'react';
import { Grid, Card, CardMedia, CardHeader, Avatar, IconButton, CardContent, Typography, Button, CardActions } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    avatar: {
        backgroundColor: blue[500],
    },
}));


const NewsCard = ({ news }) => {
    const classes = useStyles();
    return (
        <>
            <Hidden smDown>
                <Grid item={true} xs={6} >
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    N
                            </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                </IconButton>
                            }
                            title={news.title}
                            subheader={news.publishedAt}
                        />
                        <CardMedia
                            className={classes.media}
                            image={news.urlToImage}
                            title={news.source.name}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {news.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/detail/${news.id}`}>
                                <Button size="small" color="primary">
                                    Detail
                                </Button>
                            </Link>
                        </CardActions>
                    </Card >
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid item={true} xs={12} >
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    N
                            </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                </IconButton>
                            }
                            title={news.title}
                            subheader={news.publishedAt}
                        />
                        <CardMedia
                            className={classes.media}
                            image={news.urlToImage}
                            title={news.source.name}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {news.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/detail/${news.id}`}>
                                <Button size="small" color="primary">
                                    Detail
                        </Button>
                            </Link>
                        </CardActions>
                    </Card >
                </Grid>
            </Hidden>
        </>
    )
};

export default NewsCard;
