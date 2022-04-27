import { CardHeader, Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import OrderCard from './OrderCard'
import { useSelector } from 'react-redux'
function MenuCard() {
  const arr = [1, 2, 3, 4, 5]
  const dataOrder = useSelector(state => state.listFood);
  return (
    <Card
      sx={{
        width: 850,
        borderRadius: 4,
        paddingTop: 2,
        paddingBottom: 2,
      }}>
      <Typography
        textTransform={'uppercase'}
        fontFamily={'Roboto Slab'}
        fontWeight={900}
        textAlign={'center'}
        marginBottom={'30px'}
        variant={'h5'}
      >Thông tin món ăn
      </Typography>
      {arr.map((item, index) => (
        <Box key={item}>
          <Typography
            textTransform={'uppercase'}
            color={'white'}
            fontFamily={'Roboto Slab'}
            fontWeight={900}
            sx={{ backgroundColor: 'rgb(255,114,22)', paddingLeft: 5 }}
          >món đặc biệt</Typography>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}>
            {dataOrder.map((item, index) => (
              <OrderCard data={item} key={index} />
            ))}
          </div>
        </Box>
      ))}
    </Card>
  )
}

export default MenuCard