import { Card, CardMedia, Box, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
function CardMedi() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
      <div style={{ width: '70%', display: 'flex', justifyContent: 'space-around' }}>
        <Box sx={{
          width: 200,
          height: 300,
        }}>
          <CardMedia
            component={'image'}
            image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
            sx={{
              width: 200,
              height: 200,
              borderRadius: 3
            }}
          />
          <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
            <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
              Chill cung rap viet
            </Typography>
            <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
              Chill nhac cung anh long vo dung dep trai nao lll
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{
          width: 200,
          height: 300,
        }}>
          <CardMedia
            component={'image'}
            image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
            sx={{
              width: 200,
              height: 200,
              borderRadius: 3
            }}
          />
          <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
            <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
              Chill cung rap viet
            </Typography>
            <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
              Chill nhac cung anh long vo dung dep trai nao lll
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{
          width: 200,
          height: 300,
        }}>
          <CardMedia
            component={'image'}
            image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
            sx={{
              width: 200,
              height: 200,
              borderRadius: 3
            }}
          />
          <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
            <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
              Chill cung rap viet
            </Typography>
            <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
              Chill nhac cung anh long vo dung dep trai nao lll
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{
          width: 200,
          height: 300,
        }}>
          <CardMedia
            component={'image'}
            image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
            sx={{
              width: 200,
              height: 200,
              borderRadius: 3
            }}
          />
          <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
            <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
              Chill cung rap viet
            </Typography>
            <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
              Chill nhac cung anh long vo dung dep trai nao lll
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{
          width: 200,
          height: 300,
        }}>
          <CardMedia
            component={'image'}
            image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
            sx={{
              width: 200,
              height: 200,
              borderRadius: 3
            }}
          />
          <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
            <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
              Chill cung rap viet
            </Typography>
            <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
              Chill nhac cung anh long vo dung dep trai nao lll
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{
          width: 200,
          height: 300,
        }}>
          <CardMedia
            component={'image'}
            image={'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/b/c/3ebc8b9437d6cb31de5f287b2cc179c3.jpg'}
            sx={{
              width: 200,
              height: 200,
              borderRadius: 3
            }}
          />
          <CardContent sx={{ paddingBlock: 1, paddingInline: 0 }}>
            <Typography fontFamily={'Roboto Slab'} fontSize={15} color={'white'} fontWeight={900}>
              Chill cung rap viet
            </Typography>
            <Typography fontFamily={'Roboto Slab'} fontSize={14} color={'rgb(130,126,137)'} fontWeight={900}>
              Chill nhac cung anh long vo dung dep trai nao lll
            </Typography>
          </CardContent>
        </Box>

      </div>
    </>
  )
}

const Container = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 10px;
  transition: 0.25s ease-out;
  &::hover{
    background: rgb(104, 105, 104, .5)
  }
`
const Media = styled.div`
width: 200px;
height: 200px;
overflow: hidden;
img{
  width: 100%;
  object-position: center;
  transition: 0.25s ease-out;
}
&:hover{
  img{
    width: 120%;
    object-fit: cover;
  }

  
}
`

export default CardMedi