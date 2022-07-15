import React, { useCallback, useState, useEffect, useRef } from 'react'
import MenuCard from '../component/MenuCard'
import FormOder from '../component/FormOrder'
import { Typography, Box, CardMedia, Backdrop } from '@mui/material'
import { initOrderedFood } from '../config/order.config'
import { initOrderedFood as initOrder } from '../store/Module.action'
import OrderContainerService from '../service/OrderContainer.service'
import CircularProgress from '@mui/material/CircularProgress';
import Bill from '../component/Bill'
import { useDispatch } from 'react-redux'
function Order() {
    const service = new OrderContainerService();
    const [open, setOpen] = useState('false');
    const dispatch = useDispatch();
    const [category, setCategory] = useState([]);
    const [district, setDistrict] = useState([]);
    console.log('render');
    const callAPI = useCallback(async () => {
        setOpen(true);
        await service.getAllProduct().then(res => {return dispatch(initOrder(initOrderedFood(res.data)))});
        await service.getAllDistrict().then(res => setDistrict(res?.data?.results))
        await service.getAllCategory().then(res => setCategory(res.data));
        setOpen(false);
    }, [district]);
    useEffect(() => {
        callAPI();
    }, []);
    const handleSubmit = (data) => {
        console.log(data);
        this.setState({
            backdrop: data,
        })
    }

    return (
        <Box sx={{
            backgroundImage: `url('https://phanexpress.com/WebLauPhan/order/bg-order.png')`,
            backgroundRepeat: 'no-repeat',
            paddingTop: 10,
        }}>
            <Typography
                variant='h5'
                color={'white'}
                textTransform={'uppercase'}
                fontFamily={'Roboto Slab'}
                fontWeight={900}
                textAlign={'center'}>đặt hàng</Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 3
            }}>
                <CardMedia
                    component={'img'}
                    image={'https://cdn.lauphan.com/photo-storage/myFile-1636044693643.jpeg'}
                    sx={{
                        width: '1300px',
                        borderRadius: 3,
                    }}

                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    padding: 10,
                }}>
                <FormOder district={district} handleSubmit={handleSubmit} />
                <MenuCard category={category} />
            </Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: 100 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    )
}


export default Order