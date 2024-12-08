import MainBox from './components/MainBox/MainBox';
import AboutUs from './components/AboutUs/AboutUs';
import ProjectsList from './components/ProjectsList/ProjectsList';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection';
// import ProductCard from './components/Card/Card';
import Slider from './components/Slider/Slider';
// import ContactForm from './components/ContactForm/ContactForm';

export default function Home() {
  return (
    <div>
      <main>
        <MainBox />

        {/* <ContactForm /> */}

        <AdvantagesSection />

        <Slider />

        <AboutUs />

        {/* <ProductCard /> */}

        <ProjectsList />
      </main>
    </div>
  );
}
