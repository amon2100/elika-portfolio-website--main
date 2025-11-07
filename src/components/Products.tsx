import { ShoppingCart, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import OrderDialog from "./OrderDialog";
import QuoteDialog from "./QuoteDialog";
import cctvImage from "@/assets/product-cctv.jpg";
import accessImage from "@/assets/product-access.jpg";
import networkImage from "@/assets/product-network.jpg";
import smartImage from "@/assets/product-smart.jpg";
import webDevImage from "@/assets/product-web-dev.jpg";
import dataAnalysisImage from "@/assets/product-data-analysis.jpg";
import aiMlImage from "@/assets/product-ai-ml.jpg";
import mobileDevImage from "@/assets/product-mobile-dev.jpg";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);

  const products = [
    {
      id: "1",
      name: "HD CCTV System",
      description: "Professional 8-channel 4K CCTV system with night vision and mobile monitoring",
      price: "Contact for pricing",
      image: cctvImage,
    },
    {
      id: "2",
      name: "Biometric Access Control",
      description: "Fingerprint and card-based access system with cloud management",
      price: "Contact for pricing",
      image: accessImage,
    },
    {
      id: "3",
      name: "Network Infrastructure Kit",
      description: "Complete enterprise networking solution with managed switches and routers",
      price: "Contact for pricing",
      image: networkImage,
    },
    {
      id: "4",
      name: "Smart Home System",
      description: "All-in-one smart automation with voice control and app integration",
      price: "Contact for pricing",
      image: smartImage,
    },
    {
      id: "5",
      name: "Website & System Development",
      description: "Custom web applications and enterprise systems built with modern technologies",
      price: "Contact for pricing",
      image: webDevImage,
    },
    {
      id: "6",
      name: "Business Data Analysis",
      description: "Advanced analytics and reporting solutions to drive data-informed decisions",
      price: "Contact for pricing",
      image: dataAnalysisImage,
    },
    {
      id: "7",
      name: "AI & Machine Learning",
      description: "Intelligent automation and predictive analytics powered by artificial intelligence",
      price: "Contact for pricing",
      image: aiMlImage,
    },
    {
      id: "8",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      price: "Contact for pricing",
      image: mobileDevImage,
    },
  ];

  const handleOrder = (productName: string) => {
    setSelectedProduct(productName);
    setOrderDialogOpen(true);
  };

  const handleQuote = (productName: string) => {
    setSelectedProduct(productName);
    setQuoteDialogOpen(true);
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium security and IT solutions for your business and home
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-card rounded-xl overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
                <p className="text-primary font-semibold text-lg">
                  {product.price}
                </p>
                
                <div className="flex flex-col gap-2 pt-2">
                  <Button
                    onClick={() => handleOrder(product.name)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Order Now
                  </Button>
                  <Button
                    onClick={() => handleQuote(product.name)}
                    variant="outline"
                    className="w-full border-primary/50 text-foreground hover:bg-primary/10"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <OrderDialog
        open={orderDialogOpen}
        onOpenChange={setOrderDialogOpen}
        productName={selectedProduct || ""}
      />
      <QuoteDialog
        open={quoteDialogOpen}
        onOpenChange={setQuoteDialogOpen}
        productName={selectedProduct || ""}
      />
    </section>
  );
};

export default Products;
