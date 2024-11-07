'use client'
import productStore from '@/context/useProductStore'
import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import FormProduct from './FormProduct'
import ImageUpload from './ImageUpload'
import TitleTeks from '../atoms/TitleText'
import colors from '@/utils/colors'
import LoadingComponent from '../molecules/LoadingComponent'

const EditProductSection = ({ params }: { params: { id: number } }) => {
    const { getProductDetail, loadingDetail } = productStore()
    useEffect(() => {
        if (params) {
            getProductDetail(params.id);
        } else {
            console.log('ID tidak ditemukan');
        }
    }, [params])
    return (
        <Box>
            <Grid container spacing={1} sx={{ p: '28px', }}>
                <Grid item xs={12} md={8} lg={9}>
                    <Box sx={{ p: '10px 28px' }}>
                        <TitleTeks text='Edit Product' color={colors.black} />
                    </Box>
                    {
                        loadingDetail ?
                            <LoadingComponent />
                            :
                            <FormProduct />
                    }
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    {
                        loadingDetail ?
                            <LoadingComponent />
                            :
                            <ImageUpload />
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default EditProductSection