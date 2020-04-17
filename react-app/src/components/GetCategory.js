import React from 'react';
import { Grid, Container } from '@material-ui/core';
import _ from 'lodash';
import data from '../data.json';
import NewsCard from './NewsCard';


const GetCategory = ({ match }) => {
    const {
        params: { categoryId },
    } = match;
    let detailInfo = _.filter(data, ['category', categoryId]);
    return (
        <Container maxWidth="md">
            <h2>{categoryId}</h2>
            <Grid container spacing={6}>
                {
                    detailInfo.map((item, index) =>
                        <NewsCard
                            key={index}
                            news={item}
                        />
                    )}
            </Grid>
        </Container>
    );
}

export default GetCategory;
