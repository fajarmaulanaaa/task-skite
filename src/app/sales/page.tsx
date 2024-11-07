
import dynamic from 'next/dynamic'
import React from 'react'

const SalesPages = dynamic(
    () => import('@/components/pages/SalesPages'),
    { ssr: false })
const Page = () => {
    return (
        <SalesPages />
    )
}

export default Page