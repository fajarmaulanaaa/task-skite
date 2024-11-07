'use client'
import productStore from '@/context/useProductStore'
import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import GeneralButton from '../atoms/GeneralButton'
import RegulerTeks from '../atoms/RegulerText'
import colors from '@/utils/colors'

const CategoriesProduct = () => {
    const { getDataCategory, dataCategory, formProduct, setFormProduct } = productStore()
    useEffect(() => {
        getDataCategory()
    }, [])
    return (
        <Box>

            {
                dataCategory && dataCategory.response.length != 0 && (
                    <Grid spacing={1} container>
                        {
                            dataCategory.response.map((item, index) => (
                                <Grid key={index} item>
                                    <GeneralButton color={formProduct.category_id === item.id ? colors.white : colors.primary} bgColor={formProduct.category_id === item.id ? colors.buttonActive : colors.primaryLight} variant='contained' onClick={() => { setFormProduct('category_id', item.id) }}>
                                        <RegulerTeks text={item.name} />
                                    </GeneralButton>
                                </Grid>
                            ))
                        }
                    </Grid>
                )
            }


        </Box>
    )
}

export default CategoriesProduct