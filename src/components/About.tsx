import { Shield, Network, Zap, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Security First",
      description: "Industry-leading security solutions to protect your digital assets",
    },
    {
      icon: Network,
      title: "IT Infrastructure",
      description: "Robust network and server solutions for seamless operations",
    },
    {
      icon: Zap,
      title: "Smart Integration",
      description: "Cutting-edge smart home and office automation systems",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Certified professionals with years of industry experience",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Elika Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a leading provider of comprehensive IT and security solutions under the Elika Gadgets brand. 
            Our mission is to empower businesses and homes with reliable, innovative technology that ensures safety, 
            efficiency, and peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                <feature.icon className="h-7 w-7 text-background" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
