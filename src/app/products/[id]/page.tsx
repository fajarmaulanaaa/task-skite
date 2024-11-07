import EditProductPage from '@/components/pages/EditProductPages'
import ProtectedRoute from '@/components/templates/ProtectedRoute'
import React from 'react'

type Params = Promise<{ id: number }>
export default function Page(props: { params: Params }) {
    return (
        <ProtectedRoute>
            <EditProductPage params={props} />
        </ProtectedRoute>
    )
}