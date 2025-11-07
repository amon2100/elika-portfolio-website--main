import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
}

const QuoteDialog = ({ open, onOpenChange, productName }: QuoteDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Create WhatsApp message
    const message = `*Quote Request*%0A%0AProduct: ${productName}%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ARequirements: ${formData.requirements || "N/A"}`;
    const whatsappUrl = `https://wa.me/256703952001?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");
    onOpenChange(false);
    setFormData({ name: "", email: "", phone: "", requirements: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card">
        <DialogHeader>
          <DialogTitle className="text-foreground">Request Quote: {productName}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us about your requirements and we'll provide a customized quote.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="quote-name">Full Name *</Label>
            <Input
              id="quote-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className="bg-background"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="quote-email">Email *</Label>
            <Input
              id="quote-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              className="bg-background"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="quote-phone">Phone Number *</Label>
            <Input
              id="quote-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1234567890"
              className="bg-background"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="requirements">Additional Requirements (Optional)</Label>
            <Textarea
              id="requirements"
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              placeholder="Tell us about your project..."
              className="bg-background min-h-[100px]"
            />
          </div>
          
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Send via WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;
