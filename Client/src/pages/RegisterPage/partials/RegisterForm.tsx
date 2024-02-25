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
import { useState, type FC, type ReactElement } from 'react';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link as routerLink, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { closeSnackbar, enqueueSnackbar } from 'notistack';
import { instance } from './../../../App';
import axios from 'axios';

interface RegisterSchema {
  fullName: string;
  email: string;
  password: string;
}

const registerSchema = yup.object({
  fullName: yup.string().required('First name is required!'),
  email: yup.string().email('Invalid email address!').required('Email is required!'),
  password: yup.string().required('Password is required!')
  // .matches(
  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  //   'Password must contain 8 or more characters, with at least one uppercase letter, one lowercase letter and one number!'
  // )
});

const RegisterForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(registerSchema) });

  const handleRegister = async (data: RegisterSchema): Promise<void> => {
    try {
      const res = await instance.post('/register', data);
      enqueueSnackbar('Account created successfully. Please login to continue!', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        }
      });
      navigate(`/login?email=${res.data.email}`);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        enqueueSnackbar(
          'An account with this email address already exists! Please log in or use a different email to register',
          {
            variant: 'error',
            autoHideDuration: 6000,
            hideIconVariant: true,
            action: snackbarAction,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center'
            }
          }
        );
      } else {
        enqueueSnackbar('An unknown error occurred. Please try again later!', {
          variant: 'error',
          autoHideDuration: 6000,
          hideIconVariant: true,
          action: snackbarAction,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          }
        });
      }
    }
  };

  const snackbarAction = (): ReactElement => (
    <IconButton
      onClick={() => {
        closeSnackbar();
      }}>
      <CloseRoundedIcon />
    </IconButton>
  );

  const handleShowPassword = (): void => {
    setShowPassword((show) => !show);
  };

  const notify = (): void => {
    enqueueSnackbar('Sorry! This feature is currently unavailable!', { variant: 'warning' });
  };

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
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) => {
              setChecked(event.target.checked);
            }}
            name="termsAndConditions"
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
      <Button disabled={!checked} type="submit" variant="contained" fullWidth sx={{ py: 2.5 }}>
        Sign Up
      </Button>
    </Box>
  );
};

export default RegisterForm;
