import React from 'react'
import MenuCard from '../component/MenuCard'
import FormOder from '../component/FormOrder'
import { Typography, Box, CardMedia, Backdrop } from '@mui/material'
import { initOrderedFood } from '../config/order.config'
import { initOrderedFood as initOrder } from '../store/Module.action'
import OrderContainerService from '../service/OrderContainer.service'
import CircularProgress from '@mui/material/CircularProgress';
import Bill from '../component/Bill'
class Order extends React.Component {
    constructor(props) {
        super(props);
        const service = new OrderContainerService();
        this.service = service;
        this.state = {
            data: [],
            district: [],
            open: false,
        }
    }
    componentDidMount = async () => {
        this.setState({
            open: true,
        })
        const data = await this.service.getAllProduct();
        const district = await this.service.getAllDistrict();
        this.setState({
            district: district.data.results,
            open: false,
        });
        // console.log(new Date().getFullYear()
        //     + '-' + (new Date().getMonth() + 1 < 10 ?
        //         '0' + (new Date().getMonth() + 1) :
        //         new Date().getMonth() + 1)
        //     + '-' + (new Date().getDate() + 1));
        this.storeToRedux(data.data);
    }
    storeToRedux = (data) => {
        const { dispatch } = this.props;
        const initOrderData = initOrderedFood(data);
        dispatch(initOrder(initOrderData))
    }
    handleSubmit = (data) => {
        console.log(data);
        this.setState({
            backdrop: data,
        })
    }

    render() {
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
                    <FormOder district={this.state.district} handleSubmit={this.handleSubmit} />
                    <MenuCard />
                </Box>
                <Backdrop
                    sx={{ color: '#fff', zIndex: 100 }}
                    open={this.state.open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Box>
        )
    }
}


export default Order