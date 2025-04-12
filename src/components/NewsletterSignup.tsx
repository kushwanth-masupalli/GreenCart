
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Leaf } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
      setLoading(false);
    }, 1000);
  };
  
  return (
    <section className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse-green absolute w-12 h-12 rounded-full bg-greencart-green/20"></div>
              </div>
              <Leaf className="w-8 h-8 text-greencart-green relative" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Stay Fresh with Updates</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for seasonal recipes, farm news, special offers, and sustainability tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
            />
            <Button 
              type="submit" 
              className="bg-greencart-green text-black hover:bg-greencart-green/90 whitespace-nowrap"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from GreenCart.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
