import React from 'react';
import { Grid, Container, Button } from '@material-ui/core';
import { Link } from "react-router-dom";


const Category = () => {
    return (
        <>
            <Container maxWidth="md">
                <Grid container spacing={6}>
                    <Link to={`/category/health`}>
                        <Button>Health</Button>
                    </Link>
                    <Link to={`/category/business`}>
                        <Button>Business</Button>
                    </Link>
                </Grid>
            </Container>
        </>
    );
}

export default Category;
