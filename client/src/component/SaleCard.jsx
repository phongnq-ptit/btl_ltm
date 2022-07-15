import { Card, CardMedia, Typography, CardContent, CardActions } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CustomLink from './CustomLink';

function SaleCard(props) {
    const { header, img, avt, content, id } = props;
    return (
        <Card sx={{
            width: 370,
            height: 350,
            padding: '7px',
            borderRadius: '10px',
            margin: '15px',
        }}>
            <Link to={'/saleoff/' + id}>
                <CardMedia
                    sx={{
                        borderRadius: '5px',
                    }}
                    component={'img'}
                    image={img}>
                </CardMedia>
            </Link>
            <Wrap>
                <img src={avt} alt="" />
            </Wrap>
            <Typography
                variant='p'
                fontFamily={'Roboto Slab'}
                fontWeight={700}
                fontSize={'18px'}
            >{header}</Typography>
            <CardContent sx={{ marginTop: '10px' }}>
                <Typography paragraph fontFamily={'Roboto Slab'}>
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Link
                    to={'/saleoff/' + id}
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontSize: '13px',
                        fontWeight: 700
                    }}>
                    Xem chi tiết
                    <img src='https://lauphan.com/WebLauPhan/tinuudai/arrow.svg' />
                </Link>
            </CardActions>
        </Card>
    )
}
const Wrap = styled.div`
    width: 60px;
    heigth: 60px;
    img{
        border-radius: 50%;
        border: 5px solid white;
        margin-top: -35px;
        width: 100%;
        object-fit: cover;
        object-position: center;
        box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    }
    padding-bottom: 15px;
`
export default SaleCard