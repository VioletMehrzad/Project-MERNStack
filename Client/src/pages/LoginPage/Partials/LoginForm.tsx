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
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link as routerLink } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { type SnackbarKey, enqueueSnackbar } from 'notistack';

interface LoginSchema {
  email: string;
  password: string;
}

const loginSchema = yup.object({
  email: yup.string().email('Invalid email address!').required('Email is required!'),
  password: yup
    .string()
    .min(3, 'Password must be at least 8 characters!')
    .required('Password is required!')
});

const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginSchema): void => {
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
      onSubmit={handleSubmit(handleLogin)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
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
        autoFocus
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
        margin="dense"
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
          label="Remember me"
        />
        <Link
          component={routerLink}
          onClick={notify}
          to="#"
          sx={{ fontSize: '0.75rem', fontWeight: 'medium' }}>
          Forgot password?
        </Link>
      </Box>
      <Button type="submit" variant="contained" fullWidth sx={{ py: 2.5, mt: 1.5 }}>
        Log In
      </Button>
    </Box>
  );
};

export default LoginForm;
