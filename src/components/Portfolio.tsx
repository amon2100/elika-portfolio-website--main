import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Corporate Security Installation",
      description: "Complete CCTV and access control system for a 10-floor office building",
      image: portfolio1,
      category: "Security Systems",
    },
    {
      title: "Data Center Infrastructure",
      description: "Full IT infrastructure setup with redundant servers and network architecture",
      image: portfolio2,
      category: "IT Infrastructure",
    },
    {
      title: "Smart Office Integration",
      description: "Automated lighting, climate control, and security for modern workspace",
      image: portfolio1,
      category: "Smart Solutions",
    },
    {
      title: "Enterprise Network Upgrade",
      description: "High-speed fiber network installation for multi-location business",
      image: portfolio2,
      category: "Networking",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recent projects showcasing our expertise in IT and security solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-xs text-primary font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
