/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Box,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  Link
} from '@mui/material';
import { useState, type FC, useContext } from 'react';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { Link as routerLink, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';
import axios from 'axios';
import ShowPassword from '../../../../components/ShowPassword';
import SnackbarCloseAction from '../../../../components/SnackbarCloseAction';
import instance from '../../../../helpers/axiosInstance';
import handleUnavailableFeature from '../../../../helpers/handlers/handleUnavailableFeature';
import context from '../../../../helpers/states/context';
import CheckboxIcon from '../../../../components/icons/CheckboxIcon';
import CheckboxIconChecked from '../../../../components/icons/CheckboxIconChecked';

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
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(registerSchema) });
  const { showPassword } = useContext(context);

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
          'An account with this email address already exists! Please log in or use a different email to register.',
          {
            variant: 'error',
            autoHideDuration: 6000,
            hideIconVariant: true,
            action: SnackbarCloseAction,
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
              <ShowPassword />
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
            icon={<CheckboxIcon />}
            checkedIcon={<CheckboxIconChecked />}
          />
        }
        label={
          <>
            I accept the{' '}
            <Link component={routerLink} onClick={handleUnavailableFeature} to="#">
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
