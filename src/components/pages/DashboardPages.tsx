'use client'
import React, { useEffect } from 'react'
import LayoutComponent from '../templates/LayoutComponent'
import RegulerTeks from '../atoms/RegulerText'
import colors from '@/utils/colors'
import productStore from '@/context/useProductStore'
import GeneralButton from '../atoms/GeneralButton'
import { Box, Grid } from '@mui/material'
import ProductSold from '../molecules/ProductSold'
import TopSellingProduct from '../molecules/TopSellingProduct'
import ProtectedRoute from '../templates/ProtectedRoute'

const DashboardPages = () => {
    const { getDataProductSold, dataProductSold } = productStore()
    useEffect(() => {
        getDataProductSold()
    }, [])
    return (
        <ProtectedRoute>
            <LayoutComponent>
                <Grid sx={{ display: 'flex', flexDirection: 'column', p: '28px', gap: '16px' }}>
                    <Grid item xs={12} md={12} lg={12}>
                        <ProductSold />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <TopSellingProduct />
                    </Grid>
                </Grid>
            </LayoutComponent>
        </ProtectedRoute>
    )
}

export default DashboardPages