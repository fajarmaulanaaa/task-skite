import dynamic from 'next/dynamic'
import React from 'react'

const ProductPages = dynamic(
    () => import('@/components/pages/ProductPages'),
    { ssr: false })
export default function Page() {
    return (
        <ProductPages />
    )
}
