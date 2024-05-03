import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import productUnoG from '../../assets/image-product-1.jpg'
import carritoSvg from '../../assets/icon-cart.svg'

export default function ImgMediaCard() {



    return (
        <Card className='md:flex md:justify-center md:items-center md:p-20' sx={{ minWidth: 375, paddingBottom: 5, maxWidth: 1440 }} >
            <div>
                <CardMedia className='md:rounded-[25px]'
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={productUnoG}
                />
            </div>
            <div className='md:px-[90px] ' >


                <CardContent >
                    <Typography className=' font-fontProyect font-bold ' sx={{
                        fontWeight: 500, fontSize: 15, color: '#FF7D1A',
                        '@media (min-width: 1000px)': {
                            fontSize: '18px'
                        }
                    }} >SNEAKER COMPANY</Typography>
                    <Typography className=' font-fontProyect ' sx={{
                        fontWeight: 500, fontSize: 30,
                        '@media (min-width: 1000px)': {
                            fontSize: '50px',
                            marginY: '30px',
                            fontWeight: '900'
                        }
                    }}
                        gutterBottom variant="h5" component="div">
                        Fall Limited Edition Sneakers
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: 16 }} variant="body2" color="text.secondary"
                        className=' font-fontProyect '
                    >
                        These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    display: 'flex', justifyContent: 'space-between', paddingX: 2,
                    '@media (min-width: 1000px)': {
                        display: 'block'
                    }
                }} >
                    <div className='flex justify-center items-center gap-3 md:justify-start  ' >
                        <Typography sx={{
                            fontWeight: 700, fontSize: 30,

                        }}
                            className=' font-fontProyect '
                        >
                            $125.00
                        </Typography>
                        <Typography sx={{
                            fontWeight: 700, fontSize: 17,
                            color: '#FF7D1A',
                            background: '#FFECE2',
                            width: 37,
                            height: 27,
                            borderRadius: 2
                        }}
                            className=' font-fontProyect '
                        >
                            50%
                        </Typography>
                        {/* <span>50%</span> */}
                    </div>
                    <Typography sx={{ fontWeight: 500, fontSize: 16, color: 'GrayText' }}
                        className=' font-fontProyect '
                    >
                        $250.00
                    </Typography>
                </CardActions>
                <div className='md:flex' >
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-around', gap: 6 }} >
                        <Button sx={{ width: 8, height: 40, color: '#FF7D1B', fontSize: 40 }} size="small">-</Button>
                        <Typography sx={{ fontWeight: 700, fontSize: 18 }}
                            className=' font-fontProyect '
                        >
                            0
                        </Typography>
                        <Button sx={{ width: 8, height: 40, color: '#FF7D1B', fontSize: 25 }} size="small">+</Button>
                    </CardActions>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }} >
                        <Button sx={{
                            background: '#FF7D1B', width: 320, height: 53, color: 'white', gap: 1.5, transition: 'none', '&:hover': { background: '#FF7D1B', }
                        }} >
                            <img src={carritoSvg} alt="logoCarritoSvg" />
                            Add to cart
                        </Button>
                    </CardActions>
                </div>
            </div>
        </Card >
    );
}