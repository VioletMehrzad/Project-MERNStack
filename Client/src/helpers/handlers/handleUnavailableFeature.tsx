import { enqueueSnackbar } from 'notistack';

const handleUnavailableFeature = (): void => {
  enqueueSnackbar('Sorry! This feature is currently unavailable!', { variant: 'warning' });
};

export default handleUnavailableFeature;
