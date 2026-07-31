import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ConsultingPackages from "./components/ConsultingPackages";
import FreeAssessment from "./components/FreeAssessment";
import ConsultingProcess from "./components/ConsultingProcess";
import Industries from "./components/Industries";
import WhoThisIsFor from "./components/WhoThisIsFor";
import About from "./components/About";
import Skills from "./components/Skills";
import CaseStudies from "./components/CaseStudies";
import Resources from "./components/Resources";
import Recommendations from "./components/Recommendations";
import FAQ from "./components/FAQ";
import BookMeeting from "./components/BookMeeting";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";

export default function App() {
  return (
    <>
    <Navbar />

<main>
  <Hero />

  <Stats />

  <Services />

  <ConsultingPackages />

  <FreeAssessment />

  <ConsultingProcess />

  <Industries />

  <WhoThisIsFor />

  <About />

  <Skills />

  <CaseStudies />

  <Resources />

  <Recommendations />

  <FAQ />

  <BookMeeting />

  <Contact />
</main>

<Footer />
    </>
  );
}