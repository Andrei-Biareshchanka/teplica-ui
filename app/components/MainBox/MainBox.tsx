'use client';

import { Typography, Box, Container, Stack } from '@mui/material';
import Image from 'next/image';

export default function MainBox() {
  return (
    <Stack>
      <Container maxWidth="xl" disableGutters>
        <Box
          sx={{
            position: 'relative', // Для наложения текста
            width: '100%',
            overflow: 'hidden', // Обрезка лишнего
          }}
        >
          <Image
            alt="промышленные теплицы"
            src="/images/teplica2.jpg"
            width={1200}
            height={600}
            layout="responsive"
            objectFit="cover" // Сохраняет пропорции и обрезает лишнее
            priority
            style={{ display: 'block' }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Полупрозрачный фон
              padding: '1rem',
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2} // Расстояние между линией и текстом
              sx={{
                textAlign: 'left',
                color: '#fff', // Цвет текста
              }}
            >
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 'bold',
                    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Тень для читаемости
                    fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', // Адаптивный размер текста
                    lineHeight: 1.2, // Межстрочный интервал
                  }}
                >
                  Промышленные теплицы
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: '300', // Легкий текст
                    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                    fontSize: 'clamp(1rem, 4vw, 2.5rem)', // Адаптивный размер текста
                  }}
                >
                  От производителя в РБ
                </Typography>
              </Box>
            </Stack>
          </Box>
          {/* Текстовый блок поверх картинки */}
          {/* <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Полупрозрачный фон
              color: '#fff', // Цвет текста
              textAlign: 'center',
              padding: '1rem',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                position: 'absolute',
                color: '#ffffff', // Белый цвет текста
                textAlign: 'center',
                fontWeight: 'bold',
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Тень для читаемости
                fontSize: 'clamp(1.5rem, 5vw, 4rem)', // Адаптивный размер текста
                zIndex: 10, // Поверх картинки
              }}
            >
              Промышленные теплицы от производителя в РБ
            </Typography>
          </Box> */}
        </Box>
      </Container>
    </Stack>
  );
}
