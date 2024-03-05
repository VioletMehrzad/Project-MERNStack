import { Box, Divider, Paper, Typography } from '@mui/material';
import { type FC } from 'react';
import { Icon } from '@iconify/react';

const AccountOverview: FC = () => {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          bgcolor: 'neutral.midnightBlue',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <Box
          onClick={() => {
            console.log('hi');
          }}
          sx={{ display: 'flex', alignItems: 'center', p: 2, gap: 0.5 }}>
          <Icon icon="fluent:wallet-24-filled" height="auto" color="#FE7E00" />
          <Box>
            <Typography variant="subtitle3" color="neutral.tropicalBlue" fontWeight="medium">
              Wallet
            </Typography>
            <Typography color="white" fontWeight="bold">
              $2,700
            </Typography>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: 'neutral.clayBlue' }}
        />
        <Box
          onClick={() => {
            console.log('hi');
          }}
          sx={{ display: 'flex', alignItems: 'center', p: 2, gap: 0.5 }}>
          <Icon icon="solar:medal-star-bold" height="auto" color="#FE7E00" />
          <Box>
            <Typography variant="subtitle3" color="neutral.tropicalBlue" fontWeight="medium">
              Points
            </Typography>
            <Typography color="white" fontWeight="bold">
              4500
            </Typography>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: 'neutral.clayBlue' }}
        />
        <Box
          onClick={() => {
            console.log('hi');
          }}
          sx={{ display: 'flex', alignItems: 'center', p: 2, gap: 0.5 }}>
          <Icon icon="iconamoon:discount-fill" height="auto" color="#FE7E00" />
          <Box>
            <Typography variant="subtitle3" color="neutral.tropicalBlue" fontWeight="medium">
              Vouchers
            </Typography>
            <Typography color="white" fontWeight="bold">
              2
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default AccountOverview;
