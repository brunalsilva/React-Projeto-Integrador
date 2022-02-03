import React from "react";
import "./Home.css";
import { Grid, Paper, Box, Button, Typography, TextField } from "@material-ui/core";
import banner from "./banner.png";
import bannerHome from "./bannerHome.png";
import bannerMobile from "./bannerMobile.png";
import ListaProdutoHome from "../../components/produtos/listaproduto/ListaProdutoHome";
import ListaHomeEstatica from "../../components/static/listaHomeEstatica/ListaHomeEstatica";
import useLocalStorage from "react-use-localstorage";
import { Link } from "react-router-dom";


function Home() {

    const [token, setToken] = useLocalStorage('token');


    function handlePath() {
        if (token == "") {
            return "/login"
        } else {
            return "/produtos"
        }
    }

    return (
        <>

            <Grid container direction="row" justifyContent="center" alignItems="center" className="box">
                <Grid alignItems="center" item xs={12}>
                    <Box>

                        <img src={banner} alt="banner com o nome dandara" className="banner" />
                        <Link to={handlePath}>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <img src={bannerHome} alt="banner com promoções de verão" className="bannerHome" />
                            </Box>
                            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                                <img src={bannerMobile} alt="banner com promoções de verão" className="bannerMobile" />
                            </Box>
                        </Link>
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