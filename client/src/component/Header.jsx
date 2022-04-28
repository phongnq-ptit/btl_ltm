import { Box, Button } from '@mui/material';
import React, { memo, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import CustomLink from './CustomLink';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { Login } from '@mui/icons-material';
import {url as arrUrl} from '../utils/fakeData'
function Header() {
  const url = useLocation();
  const [position, setPosition] = useState('relative');
  const pathname = url.pathname;
  const color = arrUrl.includes(pathname) ? 'rgb(22,41,56)' : '';
  const handleSignout = () => {
    localStorage.clear()
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 200) {
        setPosition('fixed');
      } else {
        setPosition('relative');
      }
    })
  })
  return (
    <Container
      style={{
        background: `${color}`,
        position: `${position}`,
      }}>
      <Wrap>
        <Link to='/'>
          <img src='https://lauphan.com/WebLauPhan/theme/logo_phan.svg' />
        </Link>
      </Wrap>
      <Nav>
        <ul>
          <li>
            <CustomLink to="/" title={"Home"} />
          </li>
          <li>
            <CustomLink to="/saleoff" title={"Sale off"} />
          </li>
          <li>
            <CustomLink to="/menu" title={"Menu"} />
          </li>
          <li>
            <CustomLink to="/book" title={"Book table"} />
          </li>
          <li>
            <CustomLink to="/order" title={"Order food"} />
          </li>
          <li>
            <CustomLink to="/address" title={"Address"} />
          </li>
        </ul>
      </Nav>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: -100
      }}>
        <Button
          sx={{
            width: 160,
            height: 40,
            border: 1,
            borderColor: 'white',
            borderRadius: 5
          }}
          onClick={handleSignout}
          endIcon={localStorage.getItem('USER_KEY') ?
            <Login sx={{ color: 'white', fontSize: 15 }} /> :
            <PersonOutlineRoundedIcon sx={{ color: 'white', fontSize: 15 }} />}>
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to={'/login'}>
            {localStorage.getItem('USER_KEY') ? 'Đăng xuất' : 'Đăng nhập'}
          </Link>
        </Button>
      </Box>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 76px;
  background-image: url("../../img/header.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  aligin-items: center;
  z-index: 11;
  box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
`
const Wrap = styled.div`
  width: 100px;
  height: inherit;
  img{
    width: 70%;
    object-fit: cover;
    object-position: center;
  }
  transform: translateX(-150px);
  a{
    text-decoration: none;
    color: white;
  }
`
const Nav = styled.div` 
  width: 50%;
  height: 76px;
  ul{
    width: 100%px;
    height: 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    a{
      text-decoration: none;
      color: white;
      font-size:20px; 
    }
  }
`
export default memo(Header)