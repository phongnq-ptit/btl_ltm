import { Card, Box, Typography, TextField, Button, Backdrop, Dialog } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setInfoClient } from '../store/Module.action'
import { Link, useNavigate } from 'react-router-dom'
import OrderContainerService from '../service/OrderContainer.service'
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import jwt_decode from "jwt-decode";
function Login() {
    const [user, setUser] = useState({
        phonenumber: '',
        password: '',
        open: false,
        rs: {}
    });
    const [dialog, setDialog] = useState(false);
    const navigate = useNavigate();
    const service = new OrderContainerService();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = async (e) => {
        setUser({ ...user, open: true })
        e.preventDefault();
        const rs = await service.login(user);
        setUser({ ...user, open: false, rs: rs });
        if (rs?.data?.err) {
            setDialog(true);
            console.log(rs?.data?.err);
        } else {
            console.log(rs);
            const token = jwt_decode(rs.data?.access_token);
            const userToken = (token?.sub + '').split('-');
            console.log(token);
            dispatch(setInfoClient({phonenumber: userToken[0], username: userToken[1], address: userToken[2]}))
            localStorage.setItem("USER_KEY", rs.data?.access_token);
            localStorage.setItem("KEY_ACCESS", rs.data?.refresh_token);
            navigate('/');
        }
    }
    const [forget, setForget] = useState(false);
    const [email, setEmail] = useState('');
    const handleForget = async () => {
        const rs = await service.forgetPass(email);
        console.log(rs);
        setUser({ ...user, rs })
    }
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url('https://phanexpress.com/WebLauPhan/order/bg-order.png')`,
            backgroundRepeat: 'no-repeat',
        }}>
            <form onSubmit={handleSubmit}>
                <Card sx={{
                    width: 400,
                    height: 500,
                    padding: 5,
                }}>
                    <Typography fontSize={20} fontFamily={'Roboto Slab'} fontWeight={900} paddingBottom={3}>
                        LOGIN
                    </Typography>
                    <Typography fontSize={15} fontFamily={'Roboto Slab'} paddingBottom={1}>
                        Phonenumber
                    </Typography>
                    <TextField
                        fullWidth
                        name='phonenumber'
                        id='phonenumber'
                        required
                        onChange={handleChange}
                        size='small' sx={{
                            marginBottom: 2
                        }} />
                    <Typography fontSize={15} fontFamily={'Roboto Slab'} paddingBottom={1}>
                        Password
                    </Typography>
                    <TextField
                        fullWidth
                        name='password'
                        id='password'
                        required
                        type={'password'}
                        onChange={handleChange}
                        size='small'
                        sx={{
                            marginBottom: 1
                        }} />
                    <Typography
                        onClick={() => { setForget(true) }}
                        sx={{ cursor: 'pointer' }}
                        fontSize={15}
                        fontFamily={'Roboto Slab'}
                        color={'blue'}
                        paddingBottom={7}>
                        Bạn quên mật khẩu ?
                    </Typography>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Button
                            type='submit'
                            sx={{
                                width: 200,
                                height: 50,
                                border: 1,
                                backgroundColor: 'rgb(22,41,56)',
                                borderColor: 'white',
                                borderRadius: 6,
                                color: 'white',
                                marginBottom: 1
                            }}>
                            Đăng nhập
                        </Button>
                    </Box>
                    <Typography
                        fontSize={15}
                        fontFamily={'Roboto Slab'}
                        textAlign={'center'}
                        paddingTop={7}
                        paddingBottom={1}>
                        Bạn chưa có tài khoản? Đăng kí&nbsp;
                        <Link to={'/signup'}>tại đây</Link>
                    </Typography>
                </Card>
            </form>
            <Dialog
                open={dialog}
                onClose={() => {
                    setDialog(false);
                }} >
                <Box sx={{
                    width: 500,

                    backgroundColor: 'white',
                    padding: 5
                }}>
                    <Typography
                        fontFamily={'Roboto Slab'}
                        fontSize={20}
                        textAlign={'center'}
                        textTransform={'uppercase'}
                        paddingBottom={5}
                        paragraph>
                        {user.rs.data?.err}
                    </Typography>
                    <Typography textAlign={'center'}>
                        {!(user.rs?.data?.err) ?
                            <CheckCircleOutlineIcon sx={{
                                color: 'rgb(35,188,35)',
                                fontSize: 200
                            }} /> :
                            <SentimentVeryDissatisfiedIcon sx={{
                                color: 'red',
                                fontSize: 200
                            }} />}
                    </Typography>
                </Box>
            </Dialog>
            <Dialog
                open={forget}
                onClose={() => {
                    setForget(false);
                }} >
                <Box sx={{
                    width: 500,

                    backgroundColor: 'white',
                    padding: 5
                }}>
                    <Typography
                        fontFamily={'Roboto Slab'}
                        fontWeight={900}
                        textAlign={'center'}
                        paddingBottom={5}
                        fontSize={'20px'}>Vui nhập email của bạn</Typography>
                    <div style={{ width: '100%' }}>
                        <Typography
                            fontFamily={'Roboto Slab'}
                            fontWeight={900}
                            fontSize={'16px'}
                            marginBottom={'5px'} >Email</Typography>
                        <TextField
                            fullWidth
                            variant="standard"
                            required
                            id='email'
                            // value={info.phone}
                            onChange={(e) => { setEmail(e.target.value) }}
                            placeholder='Nhập số email'
                            sx={{ padding: '5px' }}
                        />
                    </div>

                    <Button
                        sx={{ marginTop: 5 }}
                        variant='contained'
                        color='primary'
                        onClick={handleForget}>Submit</Button>
                </Box>
            </Dialog>
            <Backdrop
                sx={{ color: '#fff', zIndex: 100 }}
                open={user.open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    )
}

export default Login