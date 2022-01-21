import React from "react";
import "./Home.css";
import { Grid, Paper, Box, Button, Typography,TextField } from "@material-ui/core";

function Home() {
    return (
      <>
       <Grid container direction="row" justifyContent="center" alignItems="center" className="box">
                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Dandara</Typography>
                        <Typography gutterBottom  component="h5" align="center" className='text'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} alignItems="center" >
                    <img src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg" alt="" width="500px" height="500px" className="img" />
                </Grid>
              
            </Grid>
      </>
    );
  }
  
  export default Home;
  