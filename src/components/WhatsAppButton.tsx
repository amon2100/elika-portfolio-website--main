import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    // Opens WhatsApp chat with your number
    window.open("https://wa.me/256703952001", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-[var(--shadow-card)] hover:scale-110 transition-transform duration-300 animate-glow-pulse group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-background" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></span>
    </button>
  );
};

export default WhatsAppButton;
