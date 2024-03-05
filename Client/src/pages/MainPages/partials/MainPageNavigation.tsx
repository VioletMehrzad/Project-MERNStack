import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useState, type FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

const MainPageNavigation: FC = () => {
  const [value, setValue] = useState('home');

  const handleChange = (_event: React.SyntheticEvent, newValue: string): void => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        maxWidth: 'mobile',
        mx: 'auto',
        bottom: 0,
        left: 0,
        right: 0,
        pb: 2,
        px: 1,
        boxShadow: {
          xs: 3,
          mobile: 0
        }
      }}
      square>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          value="home"
          icon={<Icon icon="mingcute:home-5-fill" height="auto" />}
          component={RouterLink}
          to="/main"
        />
        <BottomNavigationAction
          value="categories"
          icon={<Icon icon="mage:archive-drawer-fill" height="auto" />}
          component={RouterLink}
          to="/main/categories"
        />
        <BottomNavigationAction
          value="wishlist"
          icon={<Icon icon="solar:bookmark-bold" height="auto" />}
          component={RouterLink}
          to="/main/wishlist"
        />
        <BottomNavigationAction
          value="account"
          icon={<Icon icon="mingcute:user-3-fill" height="auto" />}
          component={RouterLink}
          to="/main/account"
        />
      </BottomNavigation>
    </Paper>
  );
};

export default MainPageNavigation;
