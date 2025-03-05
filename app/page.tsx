import CarDisplay from "./components/CarDisplay";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
    <>
    <Header/> 
    <Landing />
    <CarDisplay/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  );
}
