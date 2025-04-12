
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard, { ProductProps } from "./ProductCard";
import { Link } from "react-router-dom";

// Sample product data
const products: ProductProps[] = [
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
  }
];

const tabs = ["All", "Fruits", "Vegetables", "Organic", "On Sale"];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("All");
  
  const filteredProducts = products.filter((product) => {
    if (activeTab === "All") return true;
    if (activeTab === "Fruits") return product.category === "Fruits" || product.category === "Berries";
    if (activeTab === "Vegetables") return product.category === "Vegetables" || product.category === "Greens";
    if (activeTab === "Organic") return product.isOrganic;
    if (activeTab === "On Sale") return product.discount && product.discount > 0;
    return true;
  }).slice(0, 8); // Only show up to 8 products
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground max-w-lg">
              Discover our best seasonal picks, freshly harvested from local farms
            </p>
          </div>
          <Button variant="link" className="text-greencart-green flex items-center mt-2 sm:mt-0" asChild>
            <Link to="/products">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="flex overflow-x-auto pb-4 mb-6 hide-scrollbar">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                className={activeTab === tab ? "bg-greencart-green text-black hover:bg-greencart-green/90" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
