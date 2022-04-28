import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Card, Box, Typography, TextField, Button, Backdrop, Dialog } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OrderContainerService from '../service/OrderContainer.service'
import CircularProgress from '@mui/material/CircularProgress';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
function Signup() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        phone: '',
        open: false,
        rs: {}
    });
    const [dialog, setDialog] = useState(false);
    const service = new OrderContainerService();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = async (e) => {
        setUser({ ...user, open: true })
        e.preventDefault();
        const rs = await service.signup(user);
        console.log(rs);
        setUser({ ...user, username: '', phone: '', email: '', password: '', open: false, rs: rs });
        setDialog(true);
    }
    console.log(user);
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
                    padding: 5,
                }}>
                    <Typography fontSize={20} fontFamily={'Roboto Slab'} fontWeight={900} paddingBottom={3}>
                        SIGNUP
                    </Typography>
                    <Typography fontSize={15} fontFamily={'Roboto Slab'} paddingBottom={1}>
                        Email
                    </Typography>
                    <TextField
                        fullWidth
                        name='email'
                        id='email'
                        value={user.email}
                        required
                        onChange={handleChange}
                        size='small' sx={{
                            marginBottom: 2
                        }} />
                    <Typography fontSize={15} fontFamily={'Roboto Slab'} paddingBottom={1}>
                        Username
                    </Typography>
                    <TextField
                        fullWidth
                        name='username'
                        id='username'
                        required
                        onChange={handleChange}
                        size='small' 
                        value={user.username}
                        sx={{
                            marginBottom: 2
                        }} />
                    <Typography fontSize={15} fontFamily={'Roboto Slab'} paddingBottom={1}>
                        Phone
                    </Typography>
                    <TextField
                        fullWidth
                        name='phone'
                        id='phone'
                        value={user.phone}
                        required
                        onChange={handleChange}
                        size='small' 
                        sx={{
                            marginBottom: 2
                        }} />
                    <Typography fontSize={15} fontFamily={'Roboto Slab'} paddingBottom={1}>
                        Password
                    </Typography>
                    <TextField
                        fullWidth
                        name='password'
                        id='password'
                        value={user.password}
                        required
                        type={'password'}
                        onChange={handleChange}
                        size='small'
                        sx={{
                            marginBottom: 1
                        }} />
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
                                marginTop: 3
                            }}>
                            Đăng kí
                        </Button>
                    </Box>
                    <Typography
                        fontSize={15}
                        fontFamily={'Roboto Slab'}
                        textAlign={'center'}
                        paddingTop={5}
                        paddingBottom={1}>
                        Bạn đã có tài khoản? Đăng nhập
                        <Link to={'/login'}> tại đây</Link>
                    </Typography>
                </Card>
            </form>

            <Backdrop
                sx={{ color: '#fff', zIndex: 100 }}
                open={user.open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
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
                        {user.rs?.data?.err === 2007 ? 'Email này đã được đăng kí. Vui lòng sử dụng email khác để tiếp tục đăng kí.'
                            : 'Bạn đã đăng kí thành công. Vui lòng kích hoạt tài khoản của bạn trong mail vừa đăng kí!'}
                    </Typography>
                    <Typography textAlign={'center'}>
                        {user.rs?.data?.err === 2007 ?
                            <SentimentVeryDissatisfiedIcon sx={{
                                color: 'red',
                                fontSize: 200
                            }} /> : <CheckCircleOutlineIcon sx={{
                                color: 'rgb(35,188,35)',
                                fontSize: 200
                            }} />}
                    </Typography>
                </Box>
            </Dialog>
        </Box>
    )
}

export default Signup