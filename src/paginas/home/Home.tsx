import React from "react";
import "./Home.css";
import { Grid, Paper, Box, Button, Typography, TextField } from "@material-ui/core";
import banner from "./banner.png";
import bannerHome from "./bannerHome.png";
import ListaProdutoHome from "../../components/produtos/listaproduto/ListaProdutoHome";
import ListaHomeEstatica from "../../components/static/listaHomeEstatica/ListaHomeEstatica";
import useLocalStorage from "react-use-localstorage";
import { Link } from "react-router-dom";


function Home() {

    const [token, setToken] = useLocalStorage('token');

    
    function handlePath(){
        if(token==""){
            return "/login"
        }else{
            return"/produtos"
        }
    }

    return (
        <>

            <Grid container direction="row" justifyContent="center" alignItems="center" className="box">
                <Grid alignItems="center" item xs={12}>
                    <Box>
                        
                        <img src={banner} alt="banner com o nome dandara" className="banner" />
                        <Link  to={handlePath}>
                        <img src={bannerHome} alt="banner com promoções de verão" className="bannerHome" />
                        </Link>
                       
                        <Typography gutterBottom component="h5" align="center" className='text'>

                        </Typography>
                    </Box>
                </Grid>
                {token === "" ? (
                            <ListaHomeEstatica />) : (
                        ''
                        )
                        }

            </Grid>

        </>
    );
}

export default Home;