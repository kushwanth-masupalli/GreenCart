
import { Leaf, Truck, Recycle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SustainabilityFeature = () => {
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Background Leaf Decoration */}
      <div className="absolute -top-20 -right-20 w-96 h-96 opacity-5">
        <Leaf className="w-full h-full" />
      </div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 opacity-5 rotate-45">
        <Leaf className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-greencart-green/20 text-greencart-green rounded-full px-4 py-1 text-sm font-medium mb-4">
            Sustainability
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Growing a Greener Future Together</h2>
          <p className="text-muted-foreground">
            At GreenCart, we're committed to sustainable practices that benefit our environment, farmers, and communities.
            Discover how we're making a difference with every purchase.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-card p-6 rounded-lg border border-border hover:green-glow transition-all">
            <div className="bg-greencart-green/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-greencart-green" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Organic Farming</h3>
            <p className="text-muted-foreground">
              We partner with farmers who use organic and regenerative farming methods that protect soil health and biodiversity.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-card p-6 rounded-lg border border-border hover:green-glow transition-all">
            <div className="bg-greencart-green/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-greencart-green" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Low-Emission Delivery</h3>
            <p className="text-muted-foreground">
              Our delivery routes are optimized to reduce carbon emissions, and we're transitioning to electric vehicles where possible.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-card p-6 rounded-lg border border-border hover:green-glow transition-all">
            <div className="bg-greencart-green/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Recycle className="w-6 h-6 text-greencart-green" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Eco-Friendly Packaging</h3>
            <p className="text-muted-foreground">
              We use compostable or recyclable packaging materials to minimize waste and environmental impact.
            </p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-card p-6 rounded-lg border border-border hover:green-glow transition-all">
            <div className="bg-greencart-green/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-greencart-green" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Community Support</h3>
            <p className="text-muted-foreground">
              We reinvest in local communities and support fair wages for all workers in our supply chain.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button className="bg-greencart-green text-black hover:bg-greencart-green/90" size="lg" asChild>
            <Link to="/sustainability">Learn About Our Initiatives</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityFeature;
