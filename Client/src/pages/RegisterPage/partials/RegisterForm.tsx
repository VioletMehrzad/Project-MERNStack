/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Box,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  SvgIcon,
  IconButton
} from '@mui/material';
import { useState, type FC } from 'react';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link as routerLink } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { type SnackbarKey, enqueueSnackbar } from 'notistack';

interface RegisterSchema {
  fullName: string;
  email: string;
  password: string;
}

const registerSchema = yup.object({
  fullName: yup.string().required('First name is required!'),
  email: yup.string().email('Invalid email address!').required('Email is required!'),
  password: yup
    .string()
    .min(3, 'Password must be at least 8 characters!')
    .required('Password is required!')
});

const RegisterForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(registerSchema) });

  const handleRegister = (data: RegisterSchema): void => {
    console.log(data);
  };

  const handleClickShowPassword = (): void => {
    setShowPassword((show) => !show);
  };

  const notify = (): SnackbarKey =>
    enqueueSnackbar('Sorry! This feature is not available now!', { variant: 'warning' });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleRegister)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
      <TextField
        error={!(errors.fullName == null)}
        helperText={errors.fullName?.message}
        inputProps={{ ...register('fullName') }}
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <AccountBoxRoundedIcon />
            <Box>Full Name</Box>
          </Box>
        }
        fullWidth
        autoFocus
        autoComplete="name"
      />
      <TextField
        error={!(errors.email == null)}
        helperText={errors.email?.message}
        inputProps={{ ...register('email') }}
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <EmailRoundedIcon />
            <Box>Email</Box>
          </Box>
        }
        type="email"
        fullWidth
        autoComplete="email"
      />
      <TextField
        error={!(errors.password == null)}
        helperText={errors.password?.message}
        inputProps={{ ...register('password') }}
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <LockRoundedIcon />
            <Box>Password</Box>
          </Box>
        }
        type={showPassword ? 'text' : 'password'}
        fullWidth
        autoComplete="current-password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            name="rememberMe"
            icon={
              <SvgIcon sx={{ marginLeft: '2px' }} fontSize="small">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="#F4F8FF" />
                  <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#D0DAEE" />
                </svg>
              </SvgIcon>
            }
            checkedIcon={
              <SvgIcon sx={{ marginLeft: '2px' }} fontSize="small">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="#FE7E00" />
                  <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#FE7E00" />
                  <path
                    d="M14 7.5L9 12.5L6.5 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SvgIcon>
            }
          />
        }
        label={
          <>
            I accept the{' '}
            <Link component={routerLink} onClick={notify} to="#">
              Terms and Conditions
            </Link>
            .
          </>
        }
      />
      <Button type="submit" variant="contained" fullWidth sx={{ py: 2.5 }}>
        Sign Up
      </Button>
    </Box>
  );
};

export default RegisterForm;
