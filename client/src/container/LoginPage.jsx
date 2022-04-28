import { Card, Box, Typography, TextField, Button, Backdrop, Dialog } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OrderContainerService from '../service/OrderContainer.service'
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
        open: false,
        rs: {}
    });
    const [dialog, setDialog] = useState(false);
    const navigate = useNavigate();
    const service = new OrderContainerService();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = async (e) => {
        setUser({ ...user, open: true })
        e.preventDefault();
        const rs = await service.login(user);
        console.log(rs);
        localStorage.setItem("USER_KEY", rs.data?._id);
        localStorage.setItem("USER_ROLE", rs.data?.role);
        setUser({ ...user, open: false, rs: rs });
        if (rs?.data?.err === 2007 || rs?.data?.err === 2001) {
            setDialog(true)
        } else {
            navigate('/');
        }
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
                        Email
                    </Typography>
                    <TextField
                        fullWidth
                        name='email'
                        id='email'
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
                    <Typography fontSize={15} fontFamily={'Roboto Slab'} paddingBottom={7}>
                        Bạn quên mật khẩu ?
                        <Link to={'/signup'}>bạn ngu vl</Link>
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
                                backgroundColor: 'rgb(255,114,22)',
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
                        Bạn chưa có tải khoản đăng kí
                        <Link to={'/signup'}> tại đây</Link>
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
                        {!(user.rs?.data?.err === 2001) ? 'Mật khẩu hoặc email của bạn sai.'
                            : 'Email này chưa được kích hoạt. Vui lòng kích hoạt tài khoản để đăng nhập.'}
                    </Typography>
                    <Typography textAlign={'center'}>
                        {!(user.rs?.data?.err === 2001) ?
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