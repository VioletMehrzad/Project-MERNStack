import { Box, Link, Divider, Typography } from '@mui/material';
import { type FC } from 'react';
import LoginHeader from './Partials/LoginHeader';
import LoginForm from './Partials/LoginForm';
import LoginOptions from './Partials/LoginOptions';
import { Link as routerLink } from 'react-router-dom';

const LoginPage: FC = () => {
  return (
    <Box>
      <LoginHeader />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, px: 2, py: 4 }}>
        <LoginForm />
        <Divider sx={{ fontSize: '0.75rem', fontWeight: 500, color: 'neutral.greyBlue' }}>
          Or login with
        </Divider>
        <LoginOptions />
        <Typography
          sx={{
            fontSize: '0.75rem',
            fontWeight: 500,
            color: 'neutral.greyBlue',
            textAlign: 'center'
          }}>
          Don&apos;t have an accout?
          <Link component={routerLink} to="/register" sx={{ fontWeight: 500, pl: 0.5 }}>
            Register
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
