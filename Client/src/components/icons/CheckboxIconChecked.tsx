import { SvgIcon } from '@mui/material';
import { type FC } from 'react';

const CheckboxIconChecked: FC = () => {
  return (
    <SvgIcon sx={{ marginLeft: '2px' }} fontSize="small">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="#FE7E00" />
        <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#FE7E00" />
        <path
          d="M14 7.5L9 12.5L6.5 10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default CheckboxIconChecked;
