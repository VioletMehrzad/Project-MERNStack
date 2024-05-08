import { Box } from '@mui/material';
import { type FC } from 'react';
import SearchBar from '../../../../components/SearchBar';
import RoomsSlider from './partials/RoomsSlider';

const DiscoverPage: FC = () => {
  return (
    <Box sx={{ pt: 3 }}>
      <SearchBar />
      <RoomsSlider />
    </Box>
  );
};

export default DiscoverPage;
