import React from 'react'
import ContainerProduct from '../atoms/ContainerProduct'
import { Box, useMediaQuery } from '@mui/material'
import RegulerTeks from '../atoms/RegulerText'
import GeneralButton from '../atoms/GeneralButton'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import colors from '@/utils/colors'
import productStore from '@/context/useProductStore'
import LoadingComponent from './LoadingComponent'
import EmptyData from './EmptyData'
import productSoldDataDummy from '@/utils/dummyProductSold'
import FieldProductSold from '../atoms/FieldProductSold'

const TopSellingProduct = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const { loading, dataProductSold } = productStore()

    return (
        <ContainerProduct width={isMobile ? '100%' : ' 30%'}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', p: '12px' }}>
                <RegulerTeks text='Top Selling Product' fontWeight='700' color={colors.black} size='14px' />
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
                    dataProductSold ?
                        <Box sx={{ display: 'flex', flexDirection: 'column', p: '12px', gap: '16px' }}>
                            <FieldProductSold name='Name' value='Value' />
                            {
                                productSoldDataDummy.map((item, index) => (
                                    <FieldProductSold key={index} name={item.name} value={`$ ${item.value}`} />
                                ))
                            }
                        </Box>
                        :
                        <EmptyData />
            }
        </ContainerProduct>
    )
}

export default TopSellingProduct