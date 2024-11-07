import dynamic from 'next/dynamic'
import React from 'react'

const SettingPages = dynamic(
    () => import('@/components/pages/SettingPages'),
    { ssr: false })

const Page = () => {
    return (
        <SettingPages />
    )
}

export default Page