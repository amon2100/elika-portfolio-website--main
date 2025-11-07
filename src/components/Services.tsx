import { Camera, Lock, Server, Home, Code, BarChart, Brain, TabletSmartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "CCTV Installation & Security",
      description: "Professional surveillance systems with HD cameras and 24/7 monitoring capabilities",
    },
    {
      icon: Lock,
      title: "Access Control Systems",
      description: "Biometric and smart card access systems for enhanced security",
    },
    {
      icon: Server,
      title: "Network & IT Infrastructure",
      description: "Enterprise networking, server configuration, and complete IT solutions",
    },
    {
      icon: Home,
      title: "Smart Home Automation",
      description: "Automated lighting, climate control, and integrated security for modern homes",
    },
    {
      icon: Code,
      title: "Website & System Development",
      description: "Custom web applications and enterprise systems built with cutting-edge technologies",
    },
    {
      icon: BarChart,
      title: "Business Data Analysis",
      description: "Advanced analytics, reporting, and data-driven insights for informed decision making",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent automation, predictive analytics, and AI-powered solutions",
    },
    {
      icon: TabletSmartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT and security solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card to-secondary/50 rounded-xl p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                <service.icon className="h-8 w-8 text-background" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
