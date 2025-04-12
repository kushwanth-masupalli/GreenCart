
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic - redirect to search results
    console.log(`Searching for: ${searchQuery}`);
    // For now we'll just redirect to products page
    window.location.href = `/products?search=${searchQuery}`;
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-border" 
          : "bg-transparent border-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-greencart-green" />
          <span className="text-xl font-bold tracking-tight">
            Green<span className="text-greencart-green">Cart</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-greencart-green transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-foreground hover:text-greencart-green transition-colors">
            Shop
          </Link>
          <Link to="/about" className="text-foreground hover:text-greencart-green transition-colors">
            About
          </Link>
          <Link to="/farmers" className="text-foreground hover:text-greencart-green transition-colors">
            Our Farmers
          </Link>
        </div>
        
        {/* Search, Cart & Profile for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <Input 
              type="text"
              placeholder="Search products..."
              className="w-64 pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </form>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-greencart-green text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
          
          <Link to="/login">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Link to="/cart" className="mr-2">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-greencart-green text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-grow">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <Input 
                type="text"
                placeholder="Search products..."
                className="w-full pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </form>
            
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-foreground hover:text-greencart-green transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-foreground hover:text-greencart-green transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-greencart-green transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/farmers" 
                className="text-foreground hover:text-greencart-green transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Farmers
              </Link>
              <Link 
                to="/login" 
                className="text-foreground hover:text-greencart-green transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login/Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
