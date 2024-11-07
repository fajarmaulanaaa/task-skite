
import dynamic from 'next/dynamic'

const AddProductPage = dynamic(
    () => import('@/components/pages/AddProductPages'),
    { ssr: false })
import React from 'react'

export default function Page() {
    return (
        <AddProductPage />
    )
}
