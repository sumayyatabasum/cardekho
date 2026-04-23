import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MostSearchedCars from "./components/Mostsearchcars";
import ElectricCars from "./components/Electriccars";
import Upcomingcars from "./components/Upcomingcars";
import Lastestcars from "./components/Lastestcars";
import TrustedUsedCars from "./components/Trustusedcars";
import PopularBrands from "./components/Popularbrands";
import CarVisualStories from "./components/carvisualstories";
import CompareCars from "./components/Comparecars";
import UsedCarsNearby from "./components/Usedcarsnearby";
import NewsSection from "./components/Newssection";
import KnowMoreSection from "./components/Knowmoresection";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <MostSearchedCars />
      <ElectricCars />
      <Upcomingcars />
      <Lastestcars />
      <TrustedUsedCars />
      <PopularBrands />
      <CarVisualStories />
      <CompareCars />
      <UsedCarsNearby />
      <NewsSection />
      <KnowMoreSection />
      <Footer />
    </div>
  );
}
