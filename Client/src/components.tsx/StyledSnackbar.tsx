import styled from '@emotion/styled';
import { MaterialDesignContent } from 'notistack';

const StyledSnackbar = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-warning': {
    backgroundColor: '#EC3476'
  },
  '&.notistack-MuiContent-info': {
    backgroundColor: '#041330'
  }
}));

export default StyledSnackbar;
