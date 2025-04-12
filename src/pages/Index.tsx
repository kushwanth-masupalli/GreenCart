
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import SustainabilityFeature from "@/components/SustainabilityFeature";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCategories />
        <FeaturedProducts />
        <SustainabilityFeature />
        <TestimonialsSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
