import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import LoginForm from '../organisms/LoginForm';
import LogoCompany from '../molecules/LogoCompany';
import colors from '@/utils/colors';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const LoginPage: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                bgcolor: colors.white,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    m: '20px',
                    padding: 4,
                    maxWidth: 400,
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                <LogoCompany titleColor={colors.primary} />
                <LoginForm />
            </Paper>
            <ToastContainer />
        </Box>
    );
};

export default LoginPage;
