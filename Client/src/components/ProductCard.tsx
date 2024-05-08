import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';
import { type FC } from 'react';
import { Icon } from '@iconify/react';
import productImageChair from '../../public/productImage_chair.svg';

const ProductCard: FC = () => {
  return (
    <Card variant="outlined" sx={{ maxWidth: '10.5rem', position: 'relative' }}>
      <CardActionArea>
        <CardMedia component="img" image={productImageChair} />
        <CardContent sx={{ bgcolor: 'neutral.aliceBlue', p: 1.5 }}>
          <Typography gutterBottom variant="fs14" fontWeight="bold">
            Brown Chair
          </Typography>
          <Typography fontSize="0.625rem" component="span">
            $
          </Typography>
          <Typography variant="fs18" fontWeight="bold" fontStyle="italic" component="span">
            250
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: 0 }} disableSpacing={true}>
        <Button
          variant="containedIcon"
          color="tertiary"
          sx={{
            color: 'secondary.main',
            p: 1.5,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 0,
            position: 'absolute',
            top: 0,
            right: 0
          }}>
          <Icon icon="solar:bookmark-bold" height="20" />
        </Button>
        <Button
          variant="containedIcon"
          size="small"
          sx={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem' }}>
          <Icon icon="lucide:plus" height="auto" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
