'use client'
import { Box, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import TextFieldComponent from '../atoms/TexfieldComponent'
import RegulerTeks from '../atoms/RegulerText'
import colors from '@/utils/colors'
import productStore from '@/context/useProductStore'
import CategoriesProduct from '../molecules/CategoriesProduct'
import GeneralButton from '../atoms/GeneralButton'
import { useParams } from 'next/navigation'

const FormProduct = () => {
  const { formProduct, setFormProduct, getProductDetail, handleCreateProduct, handleUpdateProduct } = productStore()
  const isMobile = useMediaQuery("(max-width: 768px)");
  const params = useParams()
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: '28px', width: '100%', backgroundColor: colors.SecondaryLight }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <RegulerTeks text='Product Name' size='14px' color={colors.primary} />
          <TextFieldComponent
            value={formProduct.name || ''}
            onChange={(e) => setFormProduct('name', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <RegulerTeks text='Description' size='14px' color={colors.primary} />
          <TextFieldComponent
            multiline
            minRows={5}
            value={formProduct.description || ''}
            onChange={(e) => setFormProduct('description', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RegulerTeks text='SKU' size='14px' color={colors.primary} />
          <TextFieldComponent
            value={formProduct.sku || ''}
            onChange={(e) => setFormProduct('sku', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RegulerTeks text='Stock' size='14px' color={colors.primary} />
          <TextFieldComponent
            type='number'
            value={formProduct.stock || 0}
            onChange={(e) => setFormProduct('stock', parseInt(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <RegulerTeks text='Category' size='14px' color={colors.primary} />
          <CategoriesProduct />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <RegulerTeks text='Price' size='14px' color={colors.primary} />
          <TextFieldComponent
            type='number'
            value={formProduct.price || 0}
            onChange={(e) => setFormProduct('price', parseInt(e.target.value))}
          />
        </Grid>
        {!isMobile && (<Grid item xs={12} md={4} lg={4}><Box width={'100%'} /></Grid>)}
        {!isMobile && (
          <Grid item xs={12} md={4} lg={4}>
            <Box height={40} />
            <GeneralButton variant='contained'
              onClick={() => {
                if (params.id) {
                  handleUpdateProduct(params.id)
                } else {
                  handleCreateProduct()
                }
              }} color={colors.white} bgColor={colors.success}>
              <RegulerTeks text='Publish' />
            </GeneralButton>
          </Grid>
        )}
      </Grid>


    </Box>
  )
}

export default FormProduct