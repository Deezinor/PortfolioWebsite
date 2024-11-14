import "./inbex.css";
import Footer from "./components/footer";
import HeroSection from "./components/Hero Section";
import Header from "./components/header";
import ContactSection from "./components/contact";
import AboutSection from "./components/About Section";

function App() {
  return (
    <>
      <Header />
      <body className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <section id="services"></section>
        <section id="projects"></section>
        <ContactSection />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
      <Footer />
    </>
  );
}

export default App;
