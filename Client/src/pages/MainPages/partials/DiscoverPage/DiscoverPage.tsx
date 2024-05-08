import { Box } from '@mui/material';
import { type FC } from 'react';
import SearchBar from '../../../../components/SearchBar';

const DiscoverPage: FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <SearchBar />
    </Box>
  );
};

export default DiscoverPage;
