import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'
import { Box, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom'
import { CardMedia, Card } from '@mui/material';
import User from '../../../models/User';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ListaHomeEstatica() {
    
  return (
    <>
      <Grid container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        xs={12}>
            <Box m={2} >
              <Card variant="outlined" sx={{ maxWidth: 250, minHeight: 407 }} className='card'>
                <CardMedia component="img" height="194" image="https://www.livo.com.br/arquivos/Banner-Vitrine-Mobile-Premium-1.jpg?v=637648988617500000" alt="Óculos de sol" />
                <CardContent>
                  <Typography color="textSecondary" gutterBottom className='card-secondary'>
                    Produto
                  </Typography>
                  <Typography variant="h5" component="h2" className='card-h2'>
                  Óculos de sol
                  </Typography>
                  <Typography variant="body2" component="p" className='card-descricao'>
                  óculos de sol com proteção UV
                  </Typography>
                  <Typography variant="body2" component="p" className='card-descricao'>
                  acessorios de moda
                  </Typography>
                  <Typography variant="body2" component="p" className='card-preco'>
                    <b>R$ 189.9</b>
                  </Typography>
                  <Typography variant="body2" component="p" className='card-preco'></Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5}>
                    <Link to={``} className="text-decorator-none" >
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                          <FavoriteIcon className='icon heart-icon' />
                        </Button>
                      </Box>
                    </Link>
                    <Link to={``} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' color="secondary">
                          Comprar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>

            <Box m={2} >
              <Card variant="outlined" sx={{ maxWidth: 250, minHeight: 407 }} className='card'>
                <CardMedia component="img" height="194" image="https://i.zst.com.br/thumbs/51/3c/38/-241206701.jpg" alt= "Carteira em couro" />
                <CardContent>
                  <Typography color="textSecondary" gutterBottom className='card-secondary'>
                    Produto
                  </Typography>
                  <Typography variant="h5" component="h2" className='card-h2'>
                  Carteira em couro
                  </Typography>
                  <Typography variant="body2" component="p" className='card-descricao'>
                  carteira clutch em couro com detalhes
                  </Typography>
                  <Typography variant="body2" component="p" className='card-descricao'>
                  acessorios de moda
                  </Typography>
                  <Typography variant="body2" component="p" className='card-preco'>
                    <b>R$ 79.9</b>
                  </Typography>
                  <Typography variant="body2" component="p" className='card-preco'></Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5}>
                    <Link to={``} className="text-decorator-none" >
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                          <FavoriteIcon className='icon heart-icon' />
                        </Button>
                      </Box>
                    </Link>
                    <Link to={``} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' color="secondary">
                          Comprar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
            <Box m={2} >
              <Card variant="outlined" sx={{ maxWidth: 250, minHeight: 407 }} className='card'>
                <CardMedia component="img" height="194" image="https://cea.vtexassets.com/arquivos/ids/6191635/Bone-Masculino-Aba-Curva-com-Bordado-ET-Rose-9397027-Rose_1.jpg?v=636790288567130000" alt= "Boné bordado alien" />
                <CardContent>
                  <Typography color="textSecondary" gutterBottom className='card-secondary'>
                    Produto
                  </Typography>
                  <Typography variant="h5" component="h2" className='card-h2'>
                  Boné bordado alien
                  </Typography>
                  <Typography variant="body2" component="p" className='card-descricao'>
                  boné rosa bordado
                  </Typography>
                  <Typography variant="body2" component="p" className='card-descricao'>
                  acessorios de moda
                  </Typography>
                  <Typography variant="body2" component="p" className='card-preco'>
                    <b>R$ 19.9</b>
                  </Typography>
                  <Typography variant="body2" component="p" className='card-preco'></Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5}>
                    <Link to={``} className="text-decorator-none" >
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                          <FavoriteIcon className='icon heart-icon' />
                        </Button>
                      </Box>
                    </Link>
                    <Link to={``} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' color="secondary">
                          Comprar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
            <Box m={2} >
              <Card variant="outlined" sx={{ maxWidth: 250, minHeight: 407 }} className='card'>
                <CardMedia component="img" height="194" image= "https://www.littlecolibri.com/wp-content/uploads/2019/07/GB801.jpg" alt=  "Bolsa transversal" />
                <CardContent>
                  <Typography color="textSecondary" gutterBottom className='card-secondary'>
                    Produto
                  </Typography>
                  <Typography variant="h5" component="h2" className='card-h2'>
                  Bolsa transversal
                  </Typography>
                  <Typography variant="body2" component="p" className='card-descricao'>
                  bolsa transversal colorida, tamanho pequeno
                  </Typography>
                  <Typography variant="body2" component="p" className='card-descricao'>
                  acessorios de moda
                  </Typography>
                  <Typography variant="body2" component="p" className='card-preco'>
                    <b>R$ 28.5</b>
                  </Typography>
                  <Typography variant="body2" component="p" className='card-preco'></Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5}>
                    <Link to={``} className="text-decorator-none" >
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                          <FavoriteIcon className='icon heart-icon' />
                        </Button>
                      </Box>
                    </Link>
                    <Link to={``} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' color="secondary">
                          Comprar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
      </Grid>
    </>
  )
}

export default ListaHomeEstatica;