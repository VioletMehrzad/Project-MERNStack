import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { type FC } from 'react';
import table from '../../../../../../public/DiscoverCat-Table.svg';

const DiscoverCategories: FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography paddingBottom={2} component="h2" variant="fs14" fontWeight="bold">
        Categories
      </Typography>
      <Card variant="outlined" sx={{ bgcolor: 'neutral.aliceBlue', mb: 1 }}>
        <CardActionArea
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardContent sx={{ pl: 2.5, minWidth: 0.5 }}>
            <Typography gutterBottom fontWeight="bold">
              Table
            </Typography>
            <Box sx={{ color: 'neutral.greyBlue', display: 'flex', gap: 0.25 }}>
              <Typography variant="fs12" fontWeight="Bold" fontStyle="italic">
                3
              </Typography>
              <Typography variant="fs12" fontWeight="medium">
                products
              </Typography>
            </Box>
          </CardContent>
          <CardMedia component="img" image={table} />
        </CardActionArea>
      </Card>
      <Card variant="outlined" sx={{ bgcolor: 'neutral.aliceBlue', mb: 1 }}>
        <CardActionArea
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardContent sx={{ pl: 2.5, minWidth: 0.5 }}>
            <Typography gutterBottom fontWeight="bold">
              Table
            </Typography>
            <Box sx={{ color: 'neutral.greyBlue', display: 'flex', gap: 0.25 }}>
              <Typography variant="fs12" fontWeight="Bold" fontStyle="italic">
                3
              </Typography>
              <Typography variant="fs12" fontWeight="medium">
                products
              </Typography>
            </Box>
          </CardContent>
          <CardMedia component="img" image={table} />
        </CardActionArea>
      </Card>
      <Card variant="outlined" sx={{ bgcolor: 'neutral.aliceBlue', mb: 1 }}>
        <CardActionArea
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardContent sx={{ pl: 2.5, minWidth: 0.5 }}>
            <Typography gutterBottom fontWeight="bold">
              Table
            </Typography>
            <Box sx={{ color: 'neutral.greyBlue', display: 'flex', gap: 0.25 }}>
              <Typography variant="fs12" fontWeight="Bold" fontStyle="italic">
                3
              </Typography>
              <Typography variant="fs12" fontWeight="medium">
                products
              </Typography>
            </Box>
          </CardContent>
          <CardMedia component="img" image={table} />
        </CardActionArea>
      </Card>
      <Card variant="outlined" sx={{ bgcolor: 'neutral.aliceBlue', mb: 1 }}>
        <CardActionArea
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardContent sx={{ pl: 2.5, minWidth: 0.5 }}>
            <Typography gutterBottom fontWeight="bold">
              Table
            </Typography>
            <Box sx={{ color: 'neutral.greyBlue', display: 'flex', gap: 0.25 }}>
              <Typography variant="fs12" fontWeight="Bold" fontStyle="italic">
                3
              </Typography>
              <Typography variant="fs12" fontWeight="medium">
                products
              </Typography>
            </Box>
          </CardContent>
          <CardMedia component="img" image={table} />
        </CardActionArea>
      </Card>
      <Card variant="outlined" sx={{ bgcolor: 'neutral.aliceBlue', mb: 1 }}>
        <CardActionArea
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardContent sx={{ pl: 2.5, minWidth: 0.5 }}>
            <Typography gutterBottom fontWeight="bold">
              Table
            </Typography>
            <Box sx={{ color: 'neutral.greyBlue', display: 'flex', gap: 0.25 }}>
              <Typography variant="fs12" fontWeight="Bold" fontStyle="italic">
                3
              </Typography>
              <Typography variant="fs12" fontWeight="medium">
                products
              </Typography>
            </Box>
          </CardContent>
          <CardMedia component="img" image={table} />
        </CardActionArea>
      </Card>
      <Card variant="outlined" sx={{ bgcolor: 'neutral.aliceBlue', mb: 1 }}>
        <CardActionArea
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardContent sx={{ pl: 2.5, minWidth: 0.5 }}>
            <Typography gutterBottom fontWeight="bold">
              Table
            </Typography>
            <Box sx={{ color: 'neutral.greyBlue', display: 'flex', gap: 0.25 }}>
              <Typography variant="fs12" fontWeight="Bold" fontStyle="italic">
                3
              </Typography>
              <Typography variant="fs12" fontWeight="medium">
                products
              </Typography>
            </Box>
          </CardContent>
          <CardMedia component="img" image={table} />
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default DiscoverCategories;
