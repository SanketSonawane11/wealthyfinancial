import Footer from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import ContactUs from "../Components/Contact";
import Mp from "../Components/Map";

const About = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col h-fit ">
      <Navbar />
      <ContactUs />
      <Mp/>
      <Footer />
    </div>
  );
};

export default About;
