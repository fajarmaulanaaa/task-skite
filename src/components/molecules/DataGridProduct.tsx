'use client'
import React, { useState } from 'react'
import ContainerProduct from '../atoms/ContainerProduct'
import { Box, useMediaQuery } from '@mui/material'
import GeneralButton from '../atoms/GeneralButton'
import RegulerTeks from '../atoms/RegulerText'
import colors from '@/utils/colors'
import productStore from '@/context/useProductStore'
import LoadingComponent from './LoadingComponent'
import DataGridComponent from '../atoms/DataGridComponent'
import EmptyData from './EmptyData'
import { ModalConfirmDelete } from './ModalConfirmDelete'
import { useRouter } from 'next/navigation'

const DataGridProduct = () => {
    const router = useRouter();
    const isMobile = useMediaQuery("(max-width: 768px)");
    const { loadingGetProduct, dataProduct, modal, setModal, setSelectItem, getProductDetail, resetForm } = productStore()
    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: isMobile ? 200 : 300,
            renderCell: (data: any) => {
                return (
                    <Box sx={{ margin: '8px 0' }}>
                        <RegulerTeks size='14px' text={data.value} />
                    </Box>
                )
            },
        },
        {
            field: 'sku',
            headerName: 'SKU',
            width: isMobile ? 80 : 200,
            renderCell: (data: any) => {
                return (
                    <Box sx={{ margin: '8px 0' }}>
                        <RegulerTeks size='14px' text={data.value} />
                    </Box>
                )
            },
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: isMobile ? 80 : 200,
            renderCell: (data: any) => {
                return (
                    <Box sx={{ margin: '8px 0' }}>
                        <RegulerTeks size='14px' text={data.value} />
                    </Box>
                )
            },
        },
        {
            field: 'price',
            headerName: 'Price',
            width: isMobile ? 80 : 200,
            renderCell: (data: any) => {
                return (
                    <Box sx={{ margin: '8px 0' }}>
                        <RegulerTeks size='14px' text={data.value} />
                    </Box>
                )
            },
        },
        {
            field: "actionColumn",
            headerName: "Action",
            width: 300,
            renderCell: (data: any) => {
                return (
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', p: '8px' }}>
                        <GeneralButton
                            variant='outlined'
                            color={colors.white}
                            bgColor={colors.warning}
                            onClick={() => {
                                getProductDetail(data.row.id)
                                router.push(`/products/${data.row.id}`)
                            }}
                        >
                            <RegulerTeks text='Edit Product' size='12px' color={colors.white} />
                        </GeneralButton>
                        <GeneralButton
                            variant='outlined'
                            color={colors.white}
                            bgColor={colors.error}
                            onClick={() => {
                                setModal(true)
                                setSelectItem(data.row)
                            }}
                        >
                            <RegulerTeks text='Delete Product' size='12px' color={colors.white} />
                        </GeneralButton>
                    </Box>
                );
            },
        }
    ]
    return (
        <ContainerProduct width={'100%'}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', p: '12px' }}>
                <RegulerTeks text='Product List' fontWeight='700' color={colors.black} size='14px' />
                <GeneralButton onClick={() => {
                    router.push('/products/add-product');
                    resetForm()
                }} variant='outlined' color={colors.white} bgColor={colors.success}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <RegulerTeks text='Add Product' size='12px' color={colors.white} />
                    </Box>
                </GeneralButton>
            </Box>

            {
                loadingGetProduct ?
                    <LoadingComponent />
                    :
                    dataProduct && dataProduct.response.length !== 0 ?
                        <DataGridComponent columns={columns} data={dataProduct.response} total={dataProduct.response.length} />
                        :
                        <EmptyData />
            }
            <ModalConfirmDelete open={modal} handleClose={() => setModal(false)} />
        </ContainerProduct>
    )
}

export default DataGridProduct