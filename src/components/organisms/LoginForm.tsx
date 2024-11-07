'use client'
import { Box, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import GeneralButton from '../atoms/GeneralButton'
import colors from '@/utils/colors'
import TextFieldComponent from '../atoms/TexfieldComponent'
import TitleTeks from '../atoms/TitleText'
import authStore from '@/context/useAuthStore'
import RegulerTeks from '../atoms/RegulerText'

const LoginForm = () => {
    const { email, setEmail, password, setPassword, handleClickLogin, loading } = authStore()

    return (
        <Box sx={{ width: '100%' }}>
            <TextFieldComponent
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextFieldComponent
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <GeneralButton disable={loading} variant='contained' color={colors.white} bgColor={colors.primary} onClick={() => { handleClickLogin() }} >
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    {loading ?
                        <CircularProgress color='inherit' size={18} /> :
                        <RegulerTeks text='Sign In' size='14px' />
                    }
                </Box>
            </GeneralButton>
        </Box>
    )
}

export default LoginForm