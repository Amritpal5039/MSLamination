import Header from "./Header"
import HeroSection from "./HeroSection"
import Services from "./Services"
import ReviewSlider from "./ReviewSlider"
import Location from "./Location"
import AboutUs from "./AboutUs"
import FAQ from "./FAQ"
// import Catalogue from "./Catalogue"
import Footer from "./Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutUs />
        <Services />
        {/* <Catalogue /> */}
        <ReviewSlider />
        <FAQ />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
