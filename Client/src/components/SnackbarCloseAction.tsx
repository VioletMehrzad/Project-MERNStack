import { IconButton } from '@mui/material';
import { closeSnackbar } from 'notistack';
import { type FC } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const SnackbarCloseAction: FC = () => {
  return (
    <IconButton
      onClick={() => {
        closeSnackbar();
      }}>
      <CloseRoundedIcon />
    </IconButton>
  );
};

export default SnackbarCloseAction;
