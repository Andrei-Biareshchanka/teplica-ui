'use client';

import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';

const projects = [
  {
    name: 'Гомельский опытный лесхоз',
    description:
      'Четыре промышленные теплицы с автоматическим поливом, размер каждой 9×86 метра',
    size: '3096 м²',
    flag: '/images/by.webp',
  },
  {
    name: 'ООО «Красный Маяк», Ярославская область',
    description: 'Промышленная теплица, размер 9×50 метра',
    size: '450 м²',
    flag: '/images/ru.webp',
  },
  {
    name: 'Светлогорский лесхоз',
    description: 'Промышленная теплица, размер 9×112 метра',
    size: '1008 м²',
    flag: '/images/by.webp',
  },
  {
    name: 'Гомельский опытный лесхоз',
    description: 'Поле доращивания с затенением и системой орошения',
    size: '3096 м²',
    flag: '/images/by.webp',
  },
  {
    name: 'Калинковичский лесхоз',
    description: 'Промышленная теплица с установкой, размер 9×100 метра',
    size: '900 м²',
    flag: '/images/by.webp',
  },
  {
    name: 'Кореневская экспериментальная лесная база',
    description:
      'Две промышленные теплицы с установкой, размер каждой 9×32 метра',
    size: '576 м²',
    flag: '/images/by.webp',
  },
  {
    name: 'Буда-Кошелевский лесхоз',
    description: 'Промышленная теплица, размер 9×78 метра',
    size: '702 м²',
    flag: '/images/by.webp',
  },
  {
    name: 'Лоевский лесхоз',
    description:
      'Две промышленные теплицы с рамповым поливом, размер каждой 9×26 метра',
    size: '468 м²',
    flag: '/images/by.webp',
  },
];

export default function ProjectsList() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 5,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4,
          color: 'primary.main',
          fontSize: { xs: '1.8rem', md: '2.5rem' },
        }}
      >
        Наши крупные проекты
      </Typography>

      {/* Список проектов */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Для перехода в одну колонку на узких экранах
          gap: 3,
          justifyContent: 'space-between',
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              flex: '1 1 calc(50% - 12px)', // Две колонки (50%), минус отступ между блоками
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              p: 3,
              borderRadius: 2,
              boxShadow: 1,
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'grey.300',
              minHeight: '180px', // Задать минимальную высоту для выравнивания блоков
            }}
          >
            {/* Верхняя часть с названием и флагом */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: 'text.primary',
                }}
              >
                {project.name}
              </Typography>
            </Box>

            {/* Описание проекта */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 'auto', // Автоматический отступ снизу, чтобы количество м² было внизу
              }}
            >
              {project.description}
            </Typography>

            {/* Количество квадратных метров */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Image
                alt="Флаг страны"
                width={24}
                height={16}
                src={project.flag}
                style={{
                  marginLeft: '8px',
                  borderRadius: '2px',
                }}
              />
              <Box
                sx={{
                  textAlign: 'right',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  color: 'primary.main',
                  mt: 2,
                }}
              >
                Площадь: {project.size}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
