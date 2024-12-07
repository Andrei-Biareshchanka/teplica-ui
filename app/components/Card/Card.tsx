'use client';

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export default function ProductCard() {
  const products = [
    {
      image: '',
      title: 'Промышленная теплица',
      description:
        'Теплица из поликарбоната, подходит для выращивания растений круглый год.',
      price: '20 000 ₽',
    },
    {
      image: '',
      title: 'Система орошения',
      description:
        'Автоматическая система для равномерного полива сельскохозяйственных культур.',
      price: '15 000 ₽',
    },
    {
      image: '',
      title: 'Климатическая камера',
      description:
        'Контролируемые условия для выращивания и хранения растений.',
      price: '35 000 ₽',
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
        mt: 4,
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
