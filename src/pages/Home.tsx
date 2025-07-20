import AgencySection from "../components/AgencySection"
import Features from "../components/Features"
import GrowthStats from "../components/GrowthStats"
import { Hero1 } from "../components/hero/Hero1"
import LogoSlider from "../components/LogoSlider"
import NewsLetter from "../components/NewsLetter"
import Team from "../components/Team"
import Testimonials from "../components/Testimonials"
import WhyChooseUs from "../components/OurProcess"
import Faq from "../components/Faq"
import BrandGrowth from "../components/BrandGrowth"
import PricingSection from "../components/PricingSection"
import BlogSection from "../components/BlogSection"
import FloatingChat from "../components/FloatingChat"


const Home = () => {
  return (
    <>
    <Hero1/>
    <LogoSlider/>
    <AgencySection/>
    <BrandGrowth/>
    <Features/>
    <GrowthStats/>
    <WhyChooseUs/>
    <Team/>
    <Testimonials/>
    <PricingSection/>
    <BlogSection/>
    <Faq/>
    <NewsLetter/>
    <FloatingChat/>
    </>
  )
}

export default Home