// import ProductPages from '@/components/pages/ProductPages'
import dynamic from 'next/dynamic'
import React from 'react'

const ProductPages = dynamic(
    () => import('@/components/pages/ProductPages'),
    { ssr: false })
export default function Page() {
    return (
        // <ProtectedRoute>
        // </ProtectedRoute>
        <ProductPages />
    )
}
