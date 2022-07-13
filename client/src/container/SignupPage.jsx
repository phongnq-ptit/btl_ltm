import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Card, Box, Typography, TextField, Button, Backdrop, Dialog } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OrderContainerService from '../service/OrderContainer.service'
import CircularProgress from '@mui/material/CircularProgress';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { authentication } from '../config/firebase.config'
import { configPhoneNumber } from '../config/order.config';
import { useId } from 'react';
function Signup() {
    const id = useId();
    const [user, setUser] = useState({
        username: '',
        password: '',
        address: '',
        phone: '',
        open: false,
        id: id,
        rs: {}
    });
    
    const navigate = useNavigate();
    const [dialog, setDialog] = useState(false);
    const [otp, setOtp] = useState();
    const [isSign, setIsSign] = useState(false);
    const service = new OrderContainerService();

    const getCaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                console.log(response);
            }
        }, authentication);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const sendOTP = () => {
        getCaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, configPhoneNumber(user.phone) + '', appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                // ...
            }).catch((error) => {
                console.log(error.message);
            });
    }
    const otpSubmit = (e) => {
        e.preventDefault();
        let confirmationResult = window.confirmationResult;
        confirmationResult.confirm(otp).then((result) => {
            console.log(result);
            console.log(otp);
            navigate('/login', {replace: true})
        }).catch((error) => {
            console.log(e.message);
            // User couldn't sign in (bad verification code?)
            // ...
        });

    }
    const handleSubmit = async (e) => {
        setUser({...user, phone: configPhoneNumber(user.phone)});
        const temp = configPhoneNumber(user.phone);
        setUser({ ...user, open: true })
        e.preventDefault();
        const rs = await service.signup(user);
        if(!rs.data.err){
            sendOTP();
        }
        console.log(rs);
        setUser({ ...user, username: '', phone: '', address: '', password: '', open: false, rs: rs });
        setDialog(true);
        
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
            <form onSubmit={handleSubmit} style={{ display: !isSign ? "" : "none" }} >
                <Card sx={{
                    width: 400,
                    padding: 5,
                }}>
                    <Typography fontSize={20} fontFamily={'Roboto Slab'} fontWeight={900} paddingBottom={3}>
                        SIGNUP
                    </Typography>
                    <Typography fontSize={15} fontFamily={'Roboto Slab'} paddingBottom={1}>
                        Phone
                    </Typography>
                    <TextField
                        fullWidth
                        name='phone'
                        id='phone'
                        value={user.phone}
                        required
                        type={'tel'}
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
                        Address
                    </Typography>
                    <TextField
                        fullWidth
                        name='address'
                        id='address'
                        value={user.address}
                        required
                        onChange={handleChange}
                        size='small'
                        sx={{
                            marginBottom: 2
                        }}
                         />
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
                                backgroundColor: 'rgb(22,41,56)',
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
            <form onSubmit={otpSubmit} style={{ display: isSign ? "" : "none" }}>
                <Card sx={{
                    width: 400,
                    padding: 5,
                    marginTop: -20
                }}>
                    <Typography fontSize={20} fontFamily={'Roboto Slab'} fontWeight={900} paddingBottom={3}>
                        VERIFY OTP
                    </Typography>
                    <Typography fontSize={15} fontFamily={'Roboto Slab'} paddingBottom={1}>
                        OTP CODE
                    </Typography>
                    <TextField
                        fullWidth
                        name='password'
                        id='password'
                        value={otp}
                        required
                        type={'number'}
                        onChange={(e) => {setOtp(e.target.value)}}
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
                                backgroundColor: 'rgb(22,41,56)',
                                borderColor: 'white',
                                borderRadius: 6,
                                color: 'white',
                                marginTop: 3
                            }}>
                            Xác thực
                        </Button>
                    </Box>

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
                    setIsSign(true);
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
                        {user.rs?.data?.status === '404' ? 'SDT này đã được đăng kí. Vui lòng sử dụng SDT khác để tiếp tục đăng kí.'
                            : 'Bạn đã đăng kí thành công. Vui lòng kích hoạt tài khoản của bạn vừa đăng kí!'}
                    </Typography>
                    <Typography textAlign={'center'}>
                        {user.rs?.data?.status === '404' ?
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
            <div id='sign-in-button'></div>
        </Box>
    )
}

export default Signup