import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Code,
  Palette,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ExpertiseAreas = () => {
  const expertiseAreas = [
    {
      icon: Truck,
      title: "Supply Chain Management",
      description: "15+ years of industry expertise across transportation, logistics, and operations",
      features: [
        "Freight optimization & KPI management",
        "ELD compliance & fleet management",
        "SOPs & team leadership",
        "Six Sigma Green Belt certified",
        "Masters in Integrated Supply Chain Management"
      ],
      gradient: "from-primary via-cyan-400 to-primary",
      iconBg: "from-primary to-cyan-400"
    },
    {
      icon: Code,
      title: "Technology Consulting",
      description: "AI/ML solutions, software development, and digital transformation for SMBs",
      features: [
        "Python, JavaScript, TypeScript & HTML",
        "AI/ML implementation & strategy",
        "Database design (SQL, PostgreSQL)",
        "Linux VPS management (Debian/Ubuntu)",
        "Open source software solutions"
      ],
      gradient: "from-cyan-400 via-blue-500 to-cyan-400",
      iconBg: "from-cyan-400 to-blue-500"
    },
    {
      icon: Palette,
      title: "Marketing & Brand Development",
      description: "Go-to-market strategies, visual design, and SEO optimization",
      features: [
        "Logo & graphic design",
        "Website development & optimization",
        "SEO & digital marketing",
        "Go-to-market strategy development",
        "Brand identity & positioning"
      ],
      gradient: "from-blue-500 via-primary to-blue-500",
      iconBg: "from-blue-500 to-primary"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="expertise" className="py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-400 blur-3xl"
        />
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block glass-subtle px-6 py-2 rounded-full mb-6"
          >
            <span className="text-sm font-semibold text-primary">Core Services</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Three Areas</span> of Expertise
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leveraging diverse industry experience to drive innovation across supply chain,
            technology, and marketing domains.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.title}
                variants={cardVariants}
                className="group"
              >
                <div className="glass-card rounded-3xl p-8 h-full flex flex-col relative overflow-hidden">
                  {/* Gradient border effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                  {/* Icon and Header */}
                  <div className="text-center mb-6 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${area.iconBg} p-5 mb-6 shadow-lg`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{area.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8 flex-grow relative z-10">
                    {area.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 group/item"
                      >
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="ghost"
                    className="w-full group/btn mt-auto relative z-10 glass-subtle hover:glass border border-border/50 hover:border-primary/30"
                    asChild
                  >
                    <a href="#booking" className="flex items-center justify-center">
                      Consult on {area.title}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center glass-card rounded-3xl p-12 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to transform your business?
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss how integrated solutions across supply chain, technology,
            and marketing can drive your success.
          </p>
          <Button
            size="lg"
            className="text-lg px-10 py-7 rounded-full glass-card bg-primary hover:bg-primary/90 border-primary/20 hover:border-primary/40 text-primary-foreground shadow-lg hover:shadow-primary/25 group"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Your Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseAreas;
