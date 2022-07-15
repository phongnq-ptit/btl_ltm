import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import CardFood from '../component/CardFood';
import ContentFood from '../component/ContentFood';
import ToggleLocation from '../component/ToggleLocation';
function Home() {
  const arr = [1, 2, 3];
  const contentArr = [
    {
      img: 'https://cdn.lauphan.com/photo-storage/myFile-1635486420351.png',
      backgroundColor: 'rgb(244,117,36)',
    },
    {
      img: 'https://cdn.lauphan.com/photo-storage/myFile-1632150968614.svg',
      backgroundColor: 'rgb(184,60,60)',
    },
  ]
  return (
    <>
      <Container>
        <Wrap>
          <img
            src='https://cdn.lauphan.com/photo-storage/myFile-1618050151695.jpeg'
            style={{ paddingBottom: '100px' }} />
        </Wrap>
        <Wrap>
          <ToggleLocation />
        </Wrap>
        <Wrap>
          {arr.map((item, index) => (
            <CardFood key={index} />
          ))}
        </Wrap>
        <Typography
          textTransform={'uppercase'}
          textAlign={'center'}
          fontSize={'24px'}
          fontWeight={900}
          fontFamily={'Roboto Slab'}>
          thương hiệu
        </Typography>
        <Content>
          {contentArr.map((item, index) => (
            <ContentFood img={item.img} backgroundColor={item.backgroundColor} key={index} />
          ))}
        </Content>
      </Container>
    </>
  )
}
const Container = styled.div`
  width: 100%;
  height: auto;
  `
const Wrap = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
  img{
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export default Home