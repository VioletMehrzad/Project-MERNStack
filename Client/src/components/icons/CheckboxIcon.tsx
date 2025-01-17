import { SvgIcon } from '@mui/material';
import { type FC } from 'react';

const CheckboxIcon: FC = () => {
  return (
    <SvgIcon sx={{ marginLeft: '2px' }} fontSize="small">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="#F4F8FF" />
        <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#D0DAEE" />
      </svg>
    </SvgIcon>
  );
};

export default CheckboxIcon;
