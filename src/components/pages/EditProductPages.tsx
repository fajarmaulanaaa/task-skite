'use client'
import React, { useEffect } from 'react'
import LayoutComponent from '../templates/LayoutComponent'
import { Box, Grid } from '@mui/material'
import FormProduct from '../organisms/FormProduct'
import ImageUpload from '../organisms/ImageUpload'
import productStore from '@/context/useProductStore'
import TitleTeks from '../atoms/TitleText'
import colors from '@/utils/colors'
import LoadingComponent from '../molecules/LoadingComponent'

const EditProductPage = ({ params }: { params: any }) => {
    const { getProductDetail, loadingDetail } = productStore()
    useEffect(() => {
        if (params.id) {
            getProductDetail(params.id);
        } else {
            console.log('ID tidak ditemukan');
        }
    }, [params])
    return (
        <LayoutComponent>
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
        </LayoutComponent>
    )
}

export default EditProductPage