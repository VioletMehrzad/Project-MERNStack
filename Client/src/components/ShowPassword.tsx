import { IconButton } from '@mui/material';
import { useContext, type FC } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import context from '../helpers/states/context';

const ShowPassword: FC = () => {
  const { showPassword, setShowPassword } = useContext(context);

  const handleShowPassword = (): void => {
    setShowPassword((show) => !show);
  };

  return (
    <IconButton onClick={handleShowPassword}>
      {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
    </IconButton>
  );
};

export default ShowPassword;
