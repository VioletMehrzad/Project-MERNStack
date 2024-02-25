import { Box, Button } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { type FC } from 'react';

const notify = (): void => {
  enqueueSnackbar('Sorry! This feature is currently unavailable!', { variant: 'warning' });
};

const LoginOptions: FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
      <Button onClick={notify} variant="containedIconCircular">
        <img src="./Google.svg" alt="" />
      </Button>
      <Button onClick={notify} variant="containedIconCircular">
        <img src="./Apple.svg" alt="" />
      </Button>
      <Button onClick={notify} variant="containedIconCircular">
        <img src="./Facebook.svg" alt="" />
      </Button>
    </Box>
  );
};

export default LoginOptions;
