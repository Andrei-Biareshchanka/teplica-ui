import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import {
  Package,
  Handshake,
  DollarSign,
  Truck,
  Clock,
  Users,
} from 'lucide-react';

const advantages = [
  {
    icon: <Package size={36} color="var(--green)" />,
    title: 'Складская программа',
    description: 'Большой ассортимент товаров всегда в наличии.',
  },
  {
    icon: <Handshake size={36} color="var(--green)" />,
    title: 'Приятные условия сотрудничества',
    description: 'Прогрессивная система лояльности для наших клиентов.',
  },
  {
    icon: <DollarSign size={36} color="var(--green)" />,
    title: 'Выгодные цены',
    description: 'Гибкая ценовая политика и прозрачная система скидок.',
  },
  {
    icon: <Truck size={36} color="var(--green)" />,
    title: 'Оперативная доставка',
    description: 'Доставка собственным транспортом по всей Беларуси.',
  },
  {
    icon: <Clock size={36} color="var(--green)" />,
    title: 'Высокая скорость',
    description: 'Оперативное сопровождение всех сделок.',
  },
  {
    icon: <Users size={36} color="var(--green)" />,
    title: 'Профессионализм',
    description: 'Команда квалифицированных и приветливых специалистов.',
  },
];

const AdvantagesSection = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 6,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          color: 'primary.main',
          fontSize: { xs: '1.8rem', md: '2.5rem' },
        }}
      >
        Преимущества нашей компании
      </Typography>

      <Grid container spacing={4}>
        {advantages.map((advantage, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between', // Равномерное заполнение пространства
                p: 2,
                borderRadius: 2,
                boxShadow: 1,
                backgroundColor: 'background.paper',
                height: '100%', // Занять всю высоту строки
              }}
            >
              {/* Иконка */}
              <Box sx={{ mb: 2 }}>{advantage.icon}</Box>

              {/* Заголовок */}
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  fontSize: '1.2rem',
                  color: 'text.primary',
                }}
              >
                {advantage.title}
              </Typography>

              {/* Описание */}
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', textAlign: 'center' }}
              >
                {advantage.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdvantagesSection;
