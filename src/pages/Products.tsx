import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard, { ProductProps } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Filter,
  SlidersHorizontal,
  Search,
  ChevronDown,
  X,
  Grid2X2,
  List
} from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Sample product data
const products = [
  {
    id: "p1",
    name: "Organic Red Apples",
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    price: 3.99,
    unit: "lb",
    category: "Fruits",
    isOrganic: true,
    inStock: true,
    farmerId: "f1",
    farmerName: "Green Valley Orchards",
    rating: 4.8,
    discount: 0
  },
  {
    id: "p2",
    name: "Fresh Broccoli",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1601&q=80",
    price: 2.49,
    unit: "bunch",
    category: "Vegetables",
    isOrganic: false,
    inStock: true,
    farmerId: "f2",
    farmerName: "Fresh Fields Farm",
    rating: 4.5,
    discount: 10
  },
  {
    id: "p3",
    name: "Organic Carrots",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    price: 1.99,
    unit: "lb",
    category: "Vegetables",
    isOrganic: true,
    inStock: true,
    farmerId: "f3",
    farmerName: "Roots & Greens Co.",
    rating: 4.7,
    discount: 0
  },
  {
    id: "p4",
    name: "Strawberries",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2630&q=80",
    price: 4.99,
    unit: "pint",
    category: "Berries",
    isOrganic: false,
    inStock: true,
    farmerId: "f4",
    farmerName: "Berry Good Farms",
    rating: 4.9,
    discount: 0
  },
  {
    id: "p5",
    name: "Bell Peppers Mix",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    price: 3.49,
    unit: "pack",
    category: "Vegetables",
    isOrganic: false,
    inStock: false,
    farmerId: "f2",
    farmerName: "Fresh Fields Farm",
    rating: 4.6,
    discount: 15
  },
  {
    id: "p6",
    name: "Organic Avocados",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2575&q=80",
    price: 2.99,
    unit: "each",
    category: "Fruits",
    isOrganic: true,
    inStock: true,
    farmerId: "f5",
    farmerName: "Avocado Grove",
    rating: 4.8,
    discount: 0
  },
  {
    id: "p7",
    name: "Tomato Cluster",
    image: "https://images.unsplash.com/photo-1592924357257-91404638111d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    price: 2.79,
    unit: "lb",
    category: "Vegetables",
    isOrganic: false,
    inStock: true,
    farmerId: "f2",
    farmerName: "Fresh Fields Farm",
    rating: 4.4,
    discount: 0
  },
  {
    id: "p8",
    name: "Fresh Spinach",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80",
    price: 3.29,
    unit: "bunch",
    category: "Greens",
    isOrganic: true,
    inStock: true,
    farmerId: "f3",
    farmerName: "Roots & Greens Co.",
    rating: 4.7,
    discount: 5
  },
  {
    id: "p9",
    name: "Organic Bananas",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
    price: 1.99,
    unit: "bunch",
    category: "Fruits",
    isOrganic: true,
    inStock: true,
    farmerId: "f1",
    farmerName: "Green Valley Orchards",
    rating: 4.6,
    discount: 0
  },
  {
    id: "p10",
    name: "Fresh Cucumber",
    image: "https://images.unsplash.com/photo-1589621316382-008455b857c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    price: 1.29,
    unit: "each",
    category: "Vegetables",
    isOrganic: false,
    inStock: true,
    farmerId: "f2",
    farmerName: "Fresh Fields Farm",
    rating: 4.3,
    discount: 0
  },
  {
    id: "p11",
    name: "Red Onions",
    image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    price: 1.49,
    unit: "lb",
    category: "Vegetables",
    isOrganic: false,
    inStock: true,
    farmerId: "f2",
    farmerName: "Fresh Fields Farm",
    rating: 4.5,
    discount: 0
  },
  {
    id: "p12",
    name: "Organic Blueberries",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
    price: 5.99,
    unit: "pint",
    category: "Berries",
    isOrganic: true,
    inStock: true,
    farmerId: "f4",
    farmerName: "Berry Good Farms",
    rating: 4.9,
    discount: 10
  },
  {
    id: "p13",
    name: "Green Kale",
    image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    price: 2.99,
    unit: "bunch",
    category: "Greens",
    isOrganic: true,
    inStock: true,
    farmerId: "f3",
    farmerName: "Roots & Greens Co.",
    rating: 4.7,
    discount: 0
  },
  {
    id: "p14",
    name: "Zucchini",
    image: "https://images.unsplash.com/photo-1587411768638-ec71f8e33b78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    price: 1.89,
    unit: "each",
    category: "Vegetables",
    isOrganic: false,
    inStock: true,
    farmerId: "f2",
    farmerName: "Fresh Fields Farm",
    rating: 4.4,
    discount: 0
  },
  {
    id: "p15",
    name: "Organic Lemons",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2575&q=80",
    price: 0.99,
    unit: "each",
    category: "Fruits",
    isOrganic: true,
    inStock: true,
    farmerId: "f1",
    farmerName: "Green Valley Orchards",
    rating: 4.6,
    discount: 0
  },
  {
    id: "p16",
    name: "Sweet Potatoes",
    image: "https://images.unsplash.com/photo-1596095627882-99691f70a131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2502&q=80",
    price: 2.49,
    unit: "lb",
    category: "Vegetables",
    isOrganic: false,
    inStock: false,
    farmerId: "f2",
    farmerName: "Fresh Fields Farm",
    rating: 4.5,
    discount: 15
  }
];

// Define available categories
const categories = ["All", "Fruits", "Vegetables", "Berries", "Greens"];

// Define sorting options
const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A to Z", value: "name-asc" },
  { label: "Name: Z to A", value: "name-desc" },
];

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearchQuery = queryParams.get("search") || "";
  
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [showOrganic, setShowOrganic] = useState(false);
  const [showInStock, setShowInStock] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter(
        product => product.name.toLowerCase().includes(lowerCaseQuery) ||
                   product.category.toLowerCase().includes(lowerCaseQuery) ||
                   product.farmerName.toLowerCase().includes(lowerCaseQuery)
      );
    }
    
    // Apply category filter
    if (selectedCategory !== "All") {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply price range filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply organic filter
    if (showOrganic) {
      result = result.filter(product => product.isOrganic);
    }
    
    // Apply in-stock filter
    if (showInStock) {
      result = result.filter(product => product.inStock);
    }
    
    // Apply discount filter
    if (showDiscount) {
      result = result.filter(product => product.discount && product.discount > 0);
    }
    
    // Apply sorting
    result = sortProducts(result, sortBy);
    
    setFilteredProducts(result);
  }, [searchQuery, selectedCategory, priceRange, showOrganic, showInStock, showDiscount, sortBy]);
  
  // Sort products based on selected option
  const sortProducts = (products: ProductProps[], sortOption: string) => {
    switch (sortOption) {
      case "price-asc":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...products].sort((a, b) => b.price - a.price);
      case "name-asc":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case "newest":
      default:
        return products;
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search already applied via useEffect
  };
  
  const clearFilters = () => {
    setSelectedCategory("All");
    setPriceRange([0, 10]);
    setShowOrganic(false);
    setShowInStock(false);
    setShowDiscount(false);
    setSortBy("newest");
  };
  
  // Filter sidebar content
  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <button
                onClick={() => setSelectedCategory(category)}
                className={`text-left py-1 px-2 w-full rounded-md transition-colors ${
                  selectedCategory === category
                    ? "bg-greencart-green/20 text-greencart-green"
                    : "hover:bg-muted"
                }`}
              >
                {category}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-t border-border pt-6">
        <h3 className="font-medium mb-4">Price Range</h3>
        <Slider 
          value={priceRange} 
          min={0} 
          max={10} 
          step={0.1} 
          onValueChange={setPriceRange}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0].toFixed(2)}</span>
          <span>${priceRange[1].toFixed(2)}</span>
        </div>
      </div>
      
      <div className="border-t border-border pt-6 space-y-3">
        <h3 className="font-medium mb-2">Product Type</h3>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="organic" 
            checked={showOrganic} 
            onCheckedChange={(checked) => setShowOrganic(checked as boolean)} 
          />
          <Label htmlFor="organic">Organic</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="in-stock" 
            checked={showInStock} 
            onCheckedChange={(checked) => setShowInStock(checked as boolean)} 
          />
          <Label htmlFor="in-stock">In Stock Only</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="on-sale" 
            checked={showDiscount} 
            onCheckedChange={(checked) => setShowDiscount(checked as boolean)} 
          />
          <Label htmlFor="on-sale">On Sale</Label>
        </div>
      </div>
      
      <div className="border-t border-border pt-6">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={clearFilters}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Shop Fresh Produce</h1>
              <p className="text-muted-foreground">
                Browse our selection of fresh fruits and vegetables from local farmers
              </p>
            </div>
            
            <form onSubmit={handleSearch} className="relative w-full md:w-64 mt-4 md:mt-0">
              <Input 
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </form>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar for desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <FilterSidebar />
            </div>
            
            {/* Products Grid */}
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                {/* Filter drawer for mobile */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="overflow-auto">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>
                        Narrow down your product search
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-4">
                      <FilterSidebar />
                    </div>
                  </SheetContent>
                </Sheet>
                
                <div className="flex items-center justify-between w-full sm:w-auto sm:justify-start gap-4">
                  <p className="text-sm text-muted-foreground">
                    {filteredProducts.length} products
                  </p>
                  
                  <div className="flex space-x-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setViewMode("grid")}
                      className={viewMode === "grid" ? "bg-muted" : ""}
                    >
                      <Grid2X2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setViewMode("list")}
                      className={viewMode === "list" ? "bg-muted" : ""}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Active filters */}
              {(selectedCategory !== "All" || showOrganic || showInStock || showDiscount || priceRange[0] > 0 || priceRange[1] < 10) && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCategory !== "All" && (
                    <div className="bg-muted px-3 py-1 rounded-full text-sm flex items-center">
                      {selectedCategory}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 ml-1 hover:bg-transparent p-0" 
                        onClick={() => setSelectedCategory("All")}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                  
                  {showOrganic && (
                    <div className="bg-muted px-3 py-1 rounded-full text-sm flex items-center">
                      Organic
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 ml-1 hover:bg-transparent p-0" 
                        onClick={() => setShowOrganic(false)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                  
                  {showInStock && (
                    <div className="bg-muted px-3 py-1 rounded-full text-sm flex items-center">
                      In Stock
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 ml-1 hover:bg-transparent p-0" 
                        onClick={() => setShowInStock(false)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                  
                  {showDiscount && (
                    <div className="bg-muted px-3 py-1 rounded-full text-sm flex items-center">
                      On Sale
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 ml-1 hover:bg-transparent p-0" 
                        onClick={() => setShowDiscount(false)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                  
                  {(priceRange[0] > 0 || priceRange[1] < 10) && (
                    <div className="bg-muted px-3 py-1 rounded-full text-sm flex items-center">
                      ${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(2)}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 ml-1 hover:bg-transparent p-0" 
                        onClick={() => setPriceRange([0, 10])}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                  
                  <Button 
                    variant="link" 
                    className="text-sm h-7 text-greencart-green px-0" 
                    onClick={clearFilters}
                  >
                    Clear all
                  </Button>
                </div>
              )}
              
              {filteredProducts.length > 0 ? (
                viewMode === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredProducts.map((product) => (
                      <div 
                        key={product.id}
                        className="product-card flex p-0 overflow-hidden"
                      >
                        <div className="w-32 sm:w-48">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                          <span className="text-xs text-muted-foreground mb-1">
                            {product.category}
                          </span>
                          <h3 className="font-medium">
                            {product.name}
                            {product.isOrganic && (
                              <span className="ml-2 text-xs bg-greencart-green/20 text-greencart-green px-2 py-0.5 rounded-full">
                                Organic
                              </span>
                            )}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            by {product.farmerName}
                          </p>
                          
                          <div className="mt-2 flex items-center">
                            {product.discount && product.discount > 0 ? (
                              <div className="flex items-center">
                                <span className="font-medium">
                                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}/{product.unit}
                                </span>
                                <span className="ml-2 text-sm text-muted-foreground line-through">
                                  ${product.price.toFixed(2)}
                                </span>
                                <span className="ml-2 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                                  -{product.discount}%
                                </span>
                              </div>
                            ) : (
                              <span className="font-medium">
                                ${product.price.toFixed(2)}/{product.unit}
                              </span>
                            )}
                          </div>
                          
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center">
                              {product.inStock ? (
                                <span className="text-xs text-greencart-green">In stock</span>
                              ) : (
                                <span className="text-xs text-amber-500">Out of stock</span>
                              )}
                            </div>
                            
                            <Button 
                              variant="default"
                              size="sm"
                              disabled={!product.inStock}
                              className="bg-greencart-green hover:bg-greencart-green/90 text-black"
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
