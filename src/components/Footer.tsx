
import { Link } from "react-router-dom";
import { Leaf, Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted pt-16 pb-8 border-t border-border mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-greencart-green" />
              <span className="text-xl font-bold tracking-tight">
                Green<span className="text-greencart-green">Cart</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Connecting local farmers with consumers. Fresh produce delivered 
              directly to your doorstep with sustainability in mind.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-greencart-green"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-greencart-green"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-greencart-green"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:info@greencart.com" 
                className="hover:text-greencart-green"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/fruits" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  Fruits
                </Link>
              </li>
              <li>
                <Link to="/products/vegetables" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link to="/products/organic" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  Organic
                </Link>
              </li>
              <li>
                <Link to="/products/bundles" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  Bundle Boxes
                </Link>
              </li>
              <li>
                <Link to="/products/seasonal" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  Seasonal
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/farmers" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  Our Farmers
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-greencart-green transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} GreenCart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
