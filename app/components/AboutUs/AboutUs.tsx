'use client';

import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { CheckCircle, Sprout, Factory, Droplet } from 'lucide-react';

// Массив данных для блоков
const blocks = [
  {
    icon: CheckCircle,
    title: 'Индивидуальный подход',
    description:
      'Мы учитываем любые пожелания наших клиентов, советуемся с ними на каждом этапе разработки и помогаем добиться максимального эффекта от заказанного изделия. Наши специалисты работают над тем, чтобы каждый проект был уникальным и максимально полезным.',
  },
  {
    icon: Sprout,
    title: 'Разработка и улучшение',
    description:
      'Мы постоянно разрабатываем и совершенствуем новые модели, чтобы повысить надежность и снизить стоимость продукции. Наши инновации помогают создать решения, которые служат дольше и работают эффективнее.',
  },
  {
    icon: Factory,
    title: 'Широкий ассортимент',
    description:
      'Мы производим и устанавливаем теплицы от малых фермерских с пленочным, поликарбонатным или комбинированным покрытием до больших промышленных теплиц и ангаров. Также предлагаем решения для автоматизированного полива и многое другое по индивидуальному запросу клиента.',
  },
  {
    icon: Droplet,
    title: 'Системы полива',
    description:
      'Мы предлагаем оросительное оборудование для теплиц и полей: системы микродождевания, динамический рамповый полив и автоматизированные системы для орошения больших площадей.',
  },
];

// Общий компонент для блока
function AboutBlock({ icon: Icon, title, description }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="flex-start"
      sx={{
        mb: 4,
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'center', sm: 'flex-start' }, // Центрируем на маленьких экранах
        textAlign: { xs: 'center', sm: 'left' },
      }}
    >
      <Box sx={{ flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
        <Icon size={isSmallScreen ? 40 : 48} color="#4CAF50" />
      </Box>
      <Box>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 'bold',
            mb: 1,
            fontSize: { xs: '1.2rem', md: '1.5rem' },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Stack>
  );
}

export default function AboutUs() {
  return (
    <Container
      maxWidth="xl" // Используем максимальную ширину xl
      sx={{
        py: 5,
        px: { xs: 2, sm: 3, md: 5 }, // Добавим адаптивные отступы
      }}
    >
      {/* Главный заголовок */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4,
          color: 'primary.main',
          fontSize: { xs: '1.5rem', md: '2.5rem' },
        }}
      >
        Мы создаем инновационные решения для теплиц
      </Typography>

      {/* Генерация блоков */}
      {blocks.map((block, index) => (
        <AboutBlock key={index} {...block} />
      ))}
    </Container>
  );
}
