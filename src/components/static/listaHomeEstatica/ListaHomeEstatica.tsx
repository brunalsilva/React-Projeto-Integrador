import { Link } from 'react-router-dom'
import { Box, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { CardMedia, Card } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./ListaHomeEstatica"

function ListaHomeEstatica() {

  return (
    <>
      <Grid container
        direction="row"
        justifyContent="center"
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
              <Box className='box-descricao' >
                <Typography variant="body2" component="p" className='card-descricao'>
                  óculos de sol com proteção UV
                </Typography>
                <Typography variant="body2" component="p" className='card-categoria'>
                  acessorios de moda
                </Typography>
              </Box>
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
            <CardMedia component="img" height="194" image="https://i.zst.com.br/thumbs/51/3c/38/-241206701.jpg" alt="Carteira em couro" />
            <CardContent>
              <Typography color="textSecondary" gutterBottom className='card-secondary'>
                Produto
              </Typography>
              <Typography variant="h5" component="h2" className='card-h2'>
                Carteira em couro
              </Typography>
              <Box className='box-descricao' >
                <Typography variant="body2" component="p" className='card-descricao'>
                  carteira clutch em couro com detalhes
                </Typography>
                <Typography variant="body2" component="p" className='card-categoria'>
                  acessorios de moda
                </Typography>
              </Box>
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
            <CardMedia component="img" height="194" image="https://cea.vtexassets.com/arquivos/ids/6191635/Bone-Masculino-Aba-Curva-com-Bordado-ET-Rose-9397027-Rose_1.jpg?v=636790288567130000" alt="Boné bordado alien" />
            <CardContent>
              <Typography color="textSecondary" gutterBottom className='card-secondary'>
                Produto
              </Typography>
              <Typography variant="h5" component="h2" className='card-h2'>
                Boné bordado alien
              </Typography>
              <Box className='box-descricao' >
                <Typography variant="body2" component="p" className='card-descricao'>
                  boné rosa bordado
                </Typography>
                <Typography variant="body2" component="p" className='card-categoria'>
                  acessorios de moda
                </Typography>
              </Box>
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
            <CardMedia component="img" height="194" image="https://amaroecp-res.cloudinary.com/image/upload/v1633740855/images/capa-de-almofada-bordada-waves-multi-colorido-01.jpg" alt="Almofada" />
            <CardContent>
              <Typography color="textSecondary" gutterBottom className='card-secondary'>
                Produto
              </Typography>
              <Typography variant="h5" component="h2" className='card-h2'>
                Almofada
              </Typography>
              <Box className='box-descricao' >
                <Typography variant="body2" component="p" className='card-descricao'>
                  kit com 2 almofadas, em algodão
                </Typography>
                <Typography variant="body2" component="p" className='card-categoria'>
                  casa
                </Typography>
              </Box>
              <Typography variant="body2" component="p" className='card-preco'>
                <b>R$ 42.9</b>
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
            <CardMedia component="img" height="194" image="https://photos.enjoei.com.br/public/1200x1200/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xNzE2NzAwOS9lZjhmYjQ2NjljNjMxNWU5ZDNiNGFhMTlkZDM0ZjEzOC5qcGc" alt="Globo terrestre" />
            <CardContent>
              <Typography color="textSecondary" gutterBottom className='card-secondary'>
                Produto
              </Typography>
              <Typography variant="h5" component="h2" className='card-h2'>
                Globo terrestre
              </Typography>
              <Box className='box-descricao' >
                <Typography variant="body2" component="p" className='card-descricao'>
                  globo giratório com detalhes rosa
                </Typography>
                <Typography variant="body2" component="p" className='card-categoria'>
                  casa
                </Typography>
              </Box>
              <Typography variant="body2" component="p" className='card-preco'>
                <b>R$ 75.9</b>
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
            <CardMedia component="img" height="194" image="https://i.pinimg.com/736x/95/b4/f1/95b4f1558c05a211adece252715892b2.jpg" alt="Agasalho moletom" />
            <CardContent>
              <Typography color="textSecondary" gutterBottom className='card-secondary'>
                Produto
              </Typography>
              <Typography variant="h5" component="h2" className='card-h2'>
                Agasalho moletom
              </Typography>
              <Box className='box-descricao' >
                <Typography variant="body2" component="p" className='card-descricao'>
                  blusa de moletom preta com bordado
                </Typography>
                <Typography variant="body2" component="p" className='card-categoria'>
                  roupas
                </Typography>
              </Box>
              <Typography variant="body2" component="p" className='card-preco'>
                <b>R$ 49.9</b>
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
            <CardMedia component="img" height="194" image="https://cdn.awsli.com.br/1000x1000/411/411095/produto/59480463/35605782ab.jpg" alt="Camiseta rosa" />
            <CardContent>
              <Typography color="textSecondary" gutterBottom className='card-secondary'>
                Produto
              </Typography>
              <Typography variant="h5" component="h2" className='card-h2'>
                Camiseta rosa
              </Typography>
              <Box className='box-descricao' >
                <Typography variant="body2" component="p" className='card-descricao'>
                  camiseta em algodão com detalhes
                </Typography>
                <Typography variant="body2" component="p" className='card-categoria'>
                  roupas
                </Typography>
              </Box>
              <Typography variant="body2" component="p" className='card-preco'>
                <b>R$ 24.9</b>
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
            <CardMedia component="img" height="194" image="https://cf.shopee.com.br/file/2599f8e625752fa204b999abebf13847" alt="Abajur de mesa" />
            <CardContent>
              <Typography color="textSecondary" gutterBottom className='card-secondary'>
                Produto
              </Typography>
              <Typography variant="h5" component="h2" className='card-h2'>
                Abajur de mesa
              </Typography>
              <Box className='box-descricao' >
                <Typography variant="body2" component="p" className='card-descricao'>
                  abajur de madeira, base de tecido
                </Typography>
                <Typography variant="body2" component="p" className='card-categoria'>
                  casa
                </Typography>
              </Box>
              <Typography variant="body2" component="p" className='card-preco'>
                <b>R$ 68.9</b>
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
            <CardMedia component="img" height="194" image="https://i.pinimg.com/originals/7f/11/5a/7f115a60693f5bfd6f276187aedd77b1.jpg" alt="Kit de suculentas" />
            <CardContent>
              <Typography color="textSecondary" gutterBottom className='card-secondary'>
                Produto
              </Typography>
              <Typography variant="h5" component="h2" className='card-h2'>
                Kit de suculentas
              </Typography>
              <Box className='box-descricao' >
                <Typography variant="body2" component="p" className='card-descricao'>
                  kit com 8 suculentas, vasos decorados
                </Typography>
                <Typography variant="body2" component="p" className='card-categoria'>
                  casa
                </Typography>
              </Box>
              <Typography variant="body2" component="p" className='card-preco'>
                <b>R$ 34.9</b>
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
            <CardMedia component="img" height="194" image="https://www.littlecolibri.com/wp-content/uploads/2019/07/GB801.jpg" alt="Bolsa transversal" />
            <CardContent>
              <Typography color="textSecondary" gutterBottom className='card-secondary'>
                Produto
              </Typography>
              <Typography variant="h5" component="h2" className='card-h2'>
                Bolsa transversal
              </Typography>
              <Box className='box-descricao' >
                <Typography variant="body2" component="p" className='card-descricao'>
                  bolsa transversal colorida, tamanho pequeno
                </Typography>
                <Typography variant="body2" component="p" className='card-categoria'>
                  acessorios de moda
                </Typography>
              </Box>
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