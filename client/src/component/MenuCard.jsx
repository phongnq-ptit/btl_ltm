import { CardHeader, Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import OrderCard from './OrderCard'
import { useSelector } from 'react-redux'
import OrderContainerService from '../service/OrderContainer.service'
function MenuCard({category}) {
  const dataOrder = useSelector(state => state.listFood);
  console.log(category);
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
      {category.map((item, index) => (
        <Box key={item}>
          <Typography
            textTransform={'uppercase'}
            color={'white'}
            fontFamily={'Roboto Slab'}
            fontWeight={900}
            sx={{ backgroundColor: 'rgb(255,114,22)', paddingLeft: 5 }}
          >{item.categoryName}</Typography>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}>
            {dataOrder.map((it, index) => {
              if(item.categoryName === it.category.categoryName){
                return <OrderCard data={it} key={index} />
              }
            })}
          </div>
        </Box>
      ))}
    </Card>
  )
}

export default MenuCard