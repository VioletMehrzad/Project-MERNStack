import { Badge, Box, Button } from '@mui/material';
import { type FC } from 'react';
import { Icon } from '@iconify/react';

const MainPageHeader: FC = () => {
  const handleClick = (): void => {
    console.log('it works!');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
      <img src="./Umah-Logo-lettermark.svg" alt="" />
      <Button variant="containedIcon" color="tertiary" onClick={handleClick}>
        <Badge badgeContent={4} color="customRose">
          <Icon icon="mdi:cart" height="auto" />
        </Badge>
      </Button>
    </Box>
  );
};

export default MainPageHeader;
