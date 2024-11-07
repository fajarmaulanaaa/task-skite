import React from 'react'
import LayoutComponent from '../templates/LayoutComponent'
import { Box, Grid } from '@mui/material'
import FormProduct from '../organisms/FormProduct'
import ImageUpload from '../organisms/ImageUpload'
import TitleTeks from '../atoms/TitleText'
import colors from '@/utils/colors'
import ProtectedRoute from '../templates/ProtectedRoute'

const AddProductPage = () => {
    return (
        <ProtectedRoute>
            <LayoutComponent>

                <Grid container spacing={1} >
                    <Grid item xs={12} md={8} lg={9}>
                        <Box sx={{ p: '10px 28px' }}>
                            <TitleTeks text='Add New Product' color={colors.black} />
                        </Box>
                        <FormProduct />
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <ImageUpload />
                    </Grid>
                </Grid>
            </LayoutComponent>
        </ProtectedRoute>
    )
}

export default AddProductPage