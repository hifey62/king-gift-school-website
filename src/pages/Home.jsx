import Carousel from "../components/carousel";
import Stats from "../components/Stats";
import Welcome from "../components/Welcome";
import Gallery from "../components/Gallery";
import News from "../components/News";
import Footer from "../components/Footer";
import Contact from "../components/contact";
const Home = () => {
  return (
    <div >
      <Carousel />
      <Welcome />
      <div className="mt-10">
        <Stats />
      </div>
      <Gallery />
      <News />
      <Contact />
      <Footer />
      

    </div>
  );
};
export default Home;
