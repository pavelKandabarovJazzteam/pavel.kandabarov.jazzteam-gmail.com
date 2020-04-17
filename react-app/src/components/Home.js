import React, { Component } from 'react';
import NewsCard from './NewsCard';
import { Grid, Container } from '@material-ui/core';
import _ from 'lodash';
import { Button } from '@material-ui/core';
import data from '../data.json';




export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: data,
            isSort: false,
            sortBy: "None",
            sortOrder: "",
        };
    }
    handleSort = (sortName, b) => {
        if (this.state.isSort) {
            let tmp = _.orderBy(this.state.users, sortName, 'desc');
            this.setState({ users: tmp, isSort: false, sortBy: sortName, sortOrder: "Z-A" });
        } else {
            let tmp = _.sortBy(this.state.users, function(item) { return item.title });
            this.setState({ users: tmp, isSort: true, sortBy: sortName, sortOrder: "A-Z" });
        }
    }
    render() {
        return (
            <>
                <Container maxWidth="md">
                    <Grid container spacing={6}>
                        <Grid item={true} md={3}>
                            <Button variant="contained" color="primary" onClick={(e) => this.handleSort("title", e)}>Sort by name</Button>
                        </Grid>
                        <Grid item={true} md={6}>
                            <Button variant="contained" color="primary" onClick={(e) => this.handleSort("publishedAt", e)}>Sort by date</Button>
                        </Grid>
                        <Grid item={true} md={3}>
                            <Button variant="outlined" color="primary">{this.state.sortBy} {this.state.sortOrder}</Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                        {this.state.users.map((item, index) =>
                            <NewsCard
                                key={index}
                                news={item}
                            />
                        )}
                    </Grid>
                </Container>
            </>
        );
    }
}
