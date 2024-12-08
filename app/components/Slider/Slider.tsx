'use client';

import { Box, Typography, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: '/images/teplica1.jpg',
    title: 'Промышленная теплица',
    description: 'Теплицы из поликарбоната для круглогодичного использования.',
  },
  {
    image: '/images/teplica3.jpg',
    title: 'Автоматическое система проветривания',
    description: 'Форточки можно установить на разном уровне',
  },
  {
    image: '/images/teplica4.jpg',
    title: 'Автоматическое зашторивание',
    description: 'Позволяет создавать нужный микроклимат в теплице',
  },
  {
    image: '/images/teplica5.jpg',
    title: 'Промышленные теплицы с разной высотой',
    description:
      'Можно выбрать высоту стен теплицы до 2м и в коньке будет 5.5м',
  },
  {
    image: '/images/teplica6.jpg',
    title: 'Фермерские теплицы под пленку',
    description: 'Устанавливаем теплицы под пленку и под поликарбонат',
  },
  {
    image: '/images/angar3.jpg',
    title: 'Ангар с поликарбонатным покрытием',
    description: 'Изготавливаем ангары для промышленных нужд',
  },
  {
    image: '/images/angar2.jpg',
    title: 'Металлические конструкции',
    description: 'Теплицы, навесы и ангары любой сложности.',
  },
];

export default function Slider() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 5,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4,
          color: 'primary.main',
          fontSize: { xs: '1.8rem', md: '2.5rem' },
        }}
      >
        Фото наших работ
      </Typography>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                overflow: 'hidden',
                backgroundColor: '#fff',
              }}
            >
              <Box
                component="img"
                src={slide.image}
                alt={slide.title}
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                }}
              />
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {slide.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {slide.description}
                </Typography>
                {/* <Button variant="contained" size="small">
                  Подробнее
                </Button> */}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
