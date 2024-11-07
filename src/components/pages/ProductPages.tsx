'use client'
import React, { useEffect } from 'react'
import LayoutComponent from '../templates/LayoutComponent'
import { Grid } from '@mui/material'
import DataGridProduct from '../molecules/DataGridProduct'
import productStore from '@/context/useProductStore'
import ProtectedRoute from '../templates/ProtectedRoute'

const ProductPages = () => {
    const { getProduct } = productStore()
    useEffect(() => {
        getProduct()
    }, [])

    return (
        <ProtectedRoute>
            <LayoutComponent>
                <Grid sx={{ display: 'flex', flexDirection: 'column', p: '28px', gap: '16px' }}>
                    <Grid item xs={12} md={12} lg={12}>
                        <DataGridProduct />
                    </Grid>
                </Grid>
            </LayoutComponent>
        </ProtectedRoute>
    )
}

export default ProductPages