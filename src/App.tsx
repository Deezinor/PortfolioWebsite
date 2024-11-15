import Header from './components/header';
import HeroSection from './components/Hero Section';
import AboutSection from './components/About Section';
import ServicesSection from './components/Services Section';
import ContactSection from './components/contact';
import ProjectsSection from './components/Projects Section';
import Footer from './components/footer';

function App() {
  return (
    <main className="main-container">
      <div className="body-wrapper min-h-screen">
        <Header />
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default App;
