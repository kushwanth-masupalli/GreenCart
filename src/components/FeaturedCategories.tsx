
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryProps {
  name: string;
  image: string;
  link: string;
  count: number;
}

const categories: CategoryProps[] = [
  {
    name: "Fresh Fruits",
    image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    link: "/products/fruits",
    count: 124
  },
  {
    name: "Vegetables",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=984&q=80",
    link: "/products/vegetables",
    count: 167
  },
  {
    name: "Organic",
    image: "https://images.unsplash.com/photo-1470107355970-2ace9f20ab8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    link: "/products/organic",
    count: 83
  },
  {
    name: "Bundle Boxes",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    link: "/products/bundles",
    count: 42
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Browse Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of fresh produce categorized for easy shopping
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ name, image, link, count }: CategoryProps) => {
  return (
    <Link to={link} className="group">
      <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
        {/* Background Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-200">{count} Products</span>
            <span className="bg-greencart-green rounded-full p-2 text-black transform transition-transform group-hover:translate-x-2">
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCategories;
