
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

export interface ProductProps {
  id: string;
  name: string;
  image: string;
  price: number;
  unit: string;
  category: string;
  isOrganic: boolean;
  inStock: boolean;
  farmerId: string;
  farmerName: string;
  rating?: number;
  discount?: number;
}

const ProductCard = ({
  id,
  name,
  image,
  price,
  unit,
  category,
  isOrganic,
  inStock,
  farmerId,
  farmerName,
  rating,
  discount
}: ProductProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
    // Add to cart logic here
  };
  
  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };
  
  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  
  return (
    <div className="product-card flex flex-col h-full">
      <div className="relative">
        {/* Product Image with Link */}
        <Link to={`/products/${id}`} className="block overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isOrganic && (
            <Badge className="bg-greencart-brightgreen text-primary-foreground">
              Organic
            </Badge>
          )}
          
          {discount && discount > 0 && (
            <Badge className="bg-red-500">
              -{discount}%
            </Badge>
          )}
        </div>
        
        {/* Wishlist Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-background/50 backdrop-blur-sm hover:bg-background/80"
          onClick={handleWishlist}
        >
          <Heart 
            className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-foreground"}`} 
          />
        </Button>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        {/* Category */}
        <span className="text-xs text-muted-foreground mb-1">
          {category}
        </span>
        
        {/* Product Name */}
        <Link to={`/products/${id}`} className="block">
          <h3 className="font-medium hover:text-greencart-green transition-colors">
            {name}
          </h3>
        </Link>
        
        {/* Farmer Name */}
        <Link to={`/farmers/${farmerId}`} className="text-xs text-muted-foreground hover:text-greencart-green transition-colors mt-1">
          by {farmerName}
        </Link>
        
        <div className="flex-grow"></div>
        
        {/* Price */}
        <div className="mt-4 mb-3 flex items-center">
          {discount && discount > 0 ? (
            <div className="flex items-center">
              <span className="font-medium text-lg">
                ${discountedPrice.toFixed(2)}/{unit}
              </span>
              <span className="ml-2 text-sm text-muted-foreground line-through">
                ${price.toFixed(2)}
              </span>
            </div>
          ) : (
            <span className="font-medium text-lg">
              ${price.toFixed(2)}/{unit}
            </span>
          )}
        </div>
        
        {/* Stock Status & Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {inStock ? (
              <>
                <Check className="w-4 h-4 text-greencart-green mr-1" />
                <span className="text-xs">In stock</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-4 h-4 text-amber-500 mr-1" />
                <span className="text-xs">Out of stock</span>
              </>
            )}
          </div>
          
          <Button 
            variant="default"
            size="sm"
            onClick={handleAddToCart}
            disabled={!inStock}
            className="bg-greencart-green hover:bg-greencart-green/90 text-black"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
