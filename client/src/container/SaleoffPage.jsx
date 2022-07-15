import React from 'react'
import styled from 'styled-components'
import { Card, CardMedia, Typography, CardContent, CardActions } from '@mui/material'
import ToggleLocation from '../component/ToggleLocation'
import { content, contentFood } from '../utils/fakeData'
import SaleCard from '../component/SaleCard'
import { Link, useParams } from 'react-router-dom'
function Saleoff() {
  const data = contentFood;
  const {id} = useParams();
  console.log(id);
  return (
    <Container>
      <Typography
        textTransform={'uppercase'}
        textAlign={'center'}
        fontSize={'24px'}
        fontWeight={900}
        fontFamily={'Roboto Slab '}
        marginTop={'100px'}
        paddingBottom={'30px'}>
        tin ưu đãi
      </Typography>
      <Card sx={{
        width: 1170,
        height: 1600,
        padding: '7px',
        display: id ? '' : 'none',
        borderRadius: '10px',
        margin: '15px',
      }}>
        <CardMedia
          sx={{
            borderRadius: '5px',
            marginBottom: 5
          }}
          component={'img'}
          image={'https://cdn.lauphan.com/photo-storage/myFile-1650424268076.jpeg'}>
        </CardMedia>
        <Typography
          variant='p'
          fontFamily={'Roboto Slab'}
          fontWeight={700}
          marginTop={20}
          fontSize={28}
        >⭐️ DEADLINE DZÍ, XÍ DEAL XỊN ⭐️</Typography>
        <CardContent sx={{ marginTop: '10px' }}>
          {content.map((item, index) => (
            <>
              <Typography variant='p' fontFamily={'Roboto Slab'} key={index}>
                {item}
              </Typography>
              <br></br>
              <br></br>
            </>
          ))}
        </CardContent>
      </Card>
      <ToggleLocation />
      <Content>
        {data.map((item, index) => (
          <SaleCard
            img={item.img}
            avt={item.avt}
            header={item.header}
            content={item.content}
            id={item.id}
            key={index} />
        ))}
      </Content>
    </Container >
  )
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export default Saleoff