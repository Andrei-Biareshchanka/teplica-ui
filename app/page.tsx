import Image from 'next/image';
import { Typography, Box } from '@mui/material';
import styles from './page.module.css';
import MainBox from './components/MainBox/MainBox';
import AboutUs from './components/AboutUs/AboutUs';
import ProjectsList from './components/ProjectsList/ProjectsList';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection';
import ProductCard from './components/Card/Card';
import Slider from './components/Slider/Slider';

export default function Home() {
  return (
    <div>
      <main>
        <MainBox />

        <AdvantagesSection />

        <Slider />

        <AboutUs />

        <ProductCard />

        <ProjectsList />

        <Box>
          {/* Текст с основным цветом темы */}
          <Typography variant="h4" color="primary">
            Primary Text
          </Typography>
          {/* Текст с вторичным цветом */}
          <Typography variant="body1" color="secondary">
            Secondary Text
          </Typography>
          {/* Текст с цветом по умолчанию */}
          <Typography variant="body2" color="textPrimary">
            Default Text
          </Typography>
          {/* Текст с дополнительным цветом */}
          <Typography variant="caption" color="textSecondary">
            Secondary Text Color
          </Typography>
        </Box>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
