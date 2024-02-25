/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Box,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  SvgIcon
} from '@mui/material';
import { useState, type FC, useContext } from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { Link as routerLink, useNavigate, useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';
import Cookies from 'js-cookie';
import axios, { type AxiosResponse } from 'axios';
import instance from '../../../helpers/axiosInstance';
import ShowPassword from '../../../components/ShowPassword';
import context from '../../../helpers/states/context';
import SnackbarCloseAction from '../../../components/SnackbarCloseAction';
import handleUnavailableFeature from '../../../helpers/handlers/handleUnavailableFeature';

interface LoginSchema {
  email: string;
  password: string;
}

const loginSchema = yup.object({
  email: yup.string().email('Invalid email address!').required('Email is required!'),
  password: yup.string().required('Password is required!')
});

const LoginForm: FC = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(loginSchema) });
  const { showPassword } = useContext(context);

  const handleLogin = async (data: LoginSchema): Promise<void> => {
    try {
      const res: AxiosResponse<{ token: string; username: string }> = await instance.post(
        '/login',
        data
      );
      if (res.data.token !== '') {
        Cookies.set('token', res.data.token, checked ? { expires: 7 } : {});
      }
      enqueueSnackbar(`Welcome, ${res.data.username}`, {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        }
      });
      navigate('/home');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        enqueueSnackbar('Incorrect email or password. Please try again!', {
          variant: 'error',
          autoHideDuration: 6000,
          hideIconVariant: true,
          action: SnackbarCloseAction,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          }
        });
      } else {
        enqueueSnackbar('An unknown error occurred. Please try again later!', {
          variant: 'error',
          autoHideDuration: 6000,
          hideIconVariant: true,
          action: SnackbarCloseAction,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          }
        });
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleLogin)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      <TextField
        defaultValue={searchParams.get('email') ?? ''}
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
        autoFocus={searchParams.get('email') != null}
        margin="dense"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <ShowPassword />
            </InputAdornment>
          )
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(event) => {
                setChecked(event.target.checked);
              }}
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
          onClick={handleUnavailableFeature}
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
