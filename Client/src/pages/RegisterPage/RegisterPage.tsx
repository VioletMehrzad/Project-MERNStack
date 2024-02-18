import { Box, Link, Divider, Typography } from '@mui/material';
import { type FC } from 'react';
import RegisterHeader from './partials/RegisterHeader';
import RegisterForm from './partials/RegisterForm';
import RegisterOptions from './partials/RegisterOptions';
import { Link as routerLink } from 'react-router-dom';

const RegisterPage: FC = () => {
  return (
    <Box>
      <RegisterHeader />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, px: 2, py: 4 }}>
        <RegisterForm />
        <Divider sx={{ fontSize: '0.75rem', fontWeight: 500, color: 'neutral.greyBlue' }}>
          Or sign up with
        </Divider>
        <RegisterOptions />
        <Typography
          sx={{
            fontSize: '0.75rem',
            fontWeight: 500,
            color: 'neutral.greyBlue',
            textAlign: 'center'
          }}>
          Already have an accout?
          <Link component={routerLink} to="/login" sx={{ fontWeight: 500, pl: 0.5 }}>
            Log In
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterPage;
