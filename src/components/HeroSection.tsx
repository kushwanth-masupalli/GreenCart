
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20 pt-32 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-muted py-1 px-3 rounded-full mb-2">
              <Leaf className="w-4 h-4 text-greencart-green" />
              <span className="text-sm">From farm to table</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Fresh <span className="text-greencart-green">Local</span> Produce at Your Fingertips
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Connecting you directly with local farmers for the freshest fruits and vegetables. 
              Support sustainable agriculture while enjoying quality produce delivered to your door.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-greencart-green text-black hover:bg-greencart-green/90" size="lg" asChild>
                <Link to="/products">
                  Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            <div className="pt-4 grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center p-2 bg-muted/50 rounded-lg">
                <span className="text-2xl font-bold text-greencart-green">100+</span>
                <span className="text-xs text-center text-muted-foreground">Local Farmers</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-muted/50 rounded-lg">
                <span className="text-2xl font-bold text-greencart-green">500+</span>
                <span className="text-xs text-center text-muted-foreground">Fresh Products</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-muted/50 rounded-lg">
                <span className="text-2xl font-bold text-greencart-green">5k+</span>
                <span className="text-xs text-center text-muted-foreground">Happy Customers</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square relative z-10">
              <div className="absolute top-1/4 left-1/4 w-28 h-28 rounded-full bg-greencart-green/20 animate-pulse-green"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-greencart-brightgreen/20 animate-pulse-green animation-delay-500"></div>
              
              {/* Main product image */}
              <img 
                src="https://images.unsplash.com/photo-1627044682939-f854c3611729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                alt="Fresh vegetables and fruits"
                className="rounded-2xl w-full h-full object-cover shadow-lg animate-grow"
              />
              
              {/* Floating leaves for animation */}
              <div className="absolute -top-8 -right-8">
                <Leaf className="w-8 h-8 text-greencart-green animate-leaf-float" />
              </div>
              <div className="absolute -bottom-4 left-1/4">
                <Leaf className="w-6 h-6 text-greencart-brightgreen animate-leaf-float animation-delay-1000" />
              </div>
              <div className="absolute top-1/3 -left-10">
                <Leaf className="w-10 h-10 text-greencart-green animate-leaf-float animation-delay-2000" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 text-background"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C149.14,118.92,242.19,73.39,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
