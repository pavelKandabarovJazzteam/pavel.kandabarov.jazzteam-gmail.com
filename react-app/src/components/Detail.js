import React, {useState }  from 'react';
import { Grid, Container, Card, CardMedia, CardHeader, Avatar, IconButton, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import _ from 'lodash';
import data from "../data.json";




const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blue[500],
    },
}));

const Detail = ({ match }) => {
    const [count, setCount] = useState(false);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function handleClick(e) {
      e.preventDefault();
      console.log('По ссылке кликнули.');
    }

    const {
        params: { newsId },
    } = match;

    let detailInfo = _.find(data, ['id', Number(newsId)]);

    return (
        <Container maxWidth="md">
            <Grid container spacing={6}>
                <Grid item={true} md={12}>
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    N
                                </Avatar>
                            }
                            title={detailInfo.source.name}
                            subheader={detailInfo.publishedAt}
                        />
                        <CardMedia
                            className={classes.media}
                            image={detailInfo.urlToImage}
                            title={detailInfo.source.name}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {detailInfo.title}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" onClick={() => setCount(true)}>
                                <FavoriteIcon   color={(count) ? "primary" : "none"}/>
                            </IconButton>{count}
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>{detailInfo.content}</Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Detail;
