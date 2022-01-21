import React from "react";
import "./Home.css";
import { Grid, Paper, Box, Button, Typography, TextField } from "@material-ui/core";
import banner from "./banner.png";

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="box">
                <Grid alignItems="center" item xs={12}>
                    <Box>
                        <img src={banner} alt="banner com o nome dandara" className="banner"/>
                        <Typography gutterBottom component="h5" align="center" className='text'>[produtos]</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
