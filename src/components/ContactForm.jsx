
'use client';
// import { useApi } from '@hooks/useApi';
import { ResponseModal } from '@components/ResponseModal';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
// import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { forwardRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import * as Yup from 'yup';
import { IMaskInput } from 'react-imask';

const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="{0}00-0000000"
            // definitions={{
            //     '#': /[1-9]/,
            // }}
            // lazy={false}
            // placeholderChar="X"
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

const theme = () =>
    createTheme({
        direction: 'rtl',
        palette: {
            primary: {
                main: '#2A60FF', // Your custom blue
            },
        },
    });

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('נא להזין שם מלא'),
    email: Yup.string()
        .email('כתובת אימייל לא תקינה')
        .required('נא להזין אימייל'),
    phoneNumber: Yup.string()
        .required('נא להזין מספר טלפון'),
    projectDescription: Yup.string()
        .required('נא לספר על הפרויקט שלכם'),
});

const ContactForm = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: validationSchema,
    });
    // const { request } = useApi();
    const [responseModalSettings, setResponseModalSettings] = useState({
        open: false,
        message: '',
        variant: 'success',
    });

    const onSubmit = async (data) => {
        try {
            // const { message } = await request('/api/contact', 'POST', data);
            setResponseModalSettings({
                ...responseModalSettings,
                open: true,
                variant: 'success',
                message,
            })
            //eslint-disable-next-line
        } catch (error) {
            let variant = 'error';
            if (error?.code === 1000) variant = 'warning';

            setResponseModalSettings({
                ...responseModalSettings,
                open: true,
                variant,
                message: error?.message || 'שגיאה בשליחת הטופס',
            })
        }
    };

    const handleCloseModal = () => setResponseModalSettings({ ...responseModalSettings, open: false });

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Box
                    className="contact-form"
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <div className="upper-fields">
                        <TextField
                            className="field"
                            autoComplete="off"
                            label="שם מלא"
                            {...register('fullName')}
                            error={!!errors.fullName}
                            helperText={errors.fullName?.message}
                        />

                        <TextField
                            className="field"
                            autoComplete="off"
                            label="אימייל"
                            {...register('email')}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    </div>
                    <div className="lower-fields">

                        <TextField
                            className="field"
                            autoComplete="off"
                            label="מספר טלפון"
                            error={!!errors.phoneNumber}
                            helperText={errors.phoneNumber?.message}
                            {...register('phoneNumber')}
                            slotProps={{
                                input: {
                                    inputComponent: TextMaskCustom,
                                },
                            }}
                            fullWidth
                        />
                        <TextField
                            className="field"
                            autoComplete="off"
                            label="ספרו לי על הפרויקט שלכם"
                            multiline
                            minRows={4}
                            {...register('projectDescription')}
                            error={!!errors.projectDescription}
                            helperText={errors.projectDescription?.message}
                        />
                    </div>
                    <Button className="send-btn" type="submit">
                        שליחת הפרטים
                    </Button>
                </Box>
                <ResponseModal
                    handleClose={handleCloseModal}
                    {...responseModalSettings}
                />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default ContactForm;
