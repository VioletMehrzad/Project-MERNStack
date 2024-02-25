import styled from '@emotion/styled';
import { MaterialDesignContent } from 'notistack';

const StyledSnackbar = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-warning': {
    backgroundColor: '#EC3476'
  },
  '&.notistack-MuiContent-info': {
    backgroundColor: '#041330'
  },
  '&.notistack-MuiContent-success': {
    backgroundColor: '#0AC9BD'
  }
}));

export default StyledSnackbar;
