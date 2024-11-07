import { Box } from '@mui/material'
import React from 'react'
import RegulerTeks from '../atoms/RegulerText';
import productStore from '@/context/useProductStore';
import colors from '@/utils/colors';
import GeneralButton from '../atoms/GeneralButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LoadingComponent from './LoadingComponent';
import EmptyData from './EmptyData';
import ChartComponent from '../atoms/ChartComponent';
import { formatDate } from '@/utils/helper';
import ContainerProduct from '../atoms/ContainerProduct';

const ProductSold = () => {
    const { loading, dataProductSold } = productStore()
    return (
        <ContainerProduct>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', p: '12px' }}>
                <RegulerTeks text='Product Sold' fontWeight='700' color={colors.black} size='14px' />
                <GeneralButton onClick={() => { }} variant='outlined' color={colors.buttonOff} bgColor={colors.white}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <RegulerTeks text='This Week' size='12px' />
                        <KeyboardArrowDownOutlinedIcon fontSize='small' />
                    </Box>
                </GeneralButton>

            </Box>
            {
                loading ?
                    <LoadingComponent />
                    :
                    dataProductSold && dataProductSold.length !== 0 ?
                        <ChartComponent xaxisData={dataProductSold.map(item => formatDate(item.created_at))} data={dataProductSold.map(item => item.total)} />
                        :
                        <EmptyData />
            }
        </ContainerProduct>
    )
}

export default ProductSold