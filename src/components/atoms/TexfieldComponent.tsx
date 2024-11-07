// components/atoms/InputField.tsx
import colors from '@/utils/colors';
import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

type InputFieldProps = TextFieldProps & {
    label?: string;
    multiline?: boolean;
};

const TextFieldComponent: React.FC<InputFieldProps> = (props) => {
    return <TextField
        sx={{
            '& input[type="number"]::-webkit-outer-spin-button, & input[type="number"]::-webkit-inner-spin-button': {
                WebkitAppearance: 'none',
                margin: 0,
            },
            '& input[type="number"]': {
                MozAppearance: 'textfield',
            },
            '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                '& fieldset': {
                    borderRadius: 3,
                },
                bgcolor: colors.white,
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: colors.primary,
            },
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: colors.primary,
            },
            '& .MuiInputBase-input': {
                color: colors.primary,
            },

            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                borderColor: colors.primary,
            },

        }}
        fullWidth variant="outlined" margin="normal" {...props} />;
};

export default TextFieldComponent;
