import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Zap,
  Calendar,
  Infinity,
  ArrowRight
} from "lucide-react";

const PricingModels = () => {
  const pricingOptions = [
    {
      icon: Zap,
      title: "Project-Based Contracts",
      description: "Perfect for one-time projects with defined scope and deliverables",
      badge: "Fixed Scope",
      features: [
        "Clear project scope and timeline",
        "Fixed pricing based on requirements",
        "Milestone-based payment structure",
        "Defined deliverables and outcomes",
        "Post-project support period included",
        "Ideal for: Website builds, system migrations, specific implementations"
      ],
      ctaText: "Discuss Your Project",
      gradient: "from-blue-500 to-cyan-500",
      bgAccent: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Calendar,
      title: "Monthly Retainers",
      description: "Ongoing support and predictable costs for continuous improvement",
      badge: "Most Popular",
      popular: true,
      features: [
        "Predictable monthly investment",
        "Priority support and response times",
        "Regular maintenance and updates",
        "Proactive monitoring and optimization",
        "Flexible scope adjustments",
        "Ideal for: IT management, ongoing development, continuous optimization"
      ],
      ctaText: "Explore Retainer Options",
      gradient: "from-green-500 to-emerald-500",
      bgAccent: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: Infinity,
      title: "Flat-Rate Unlimited",
      description: "Unlimited revisions and projects within scope for one predictable monthly fee",
      badge: "Best Value",
      features: [
        "Unlimited requests and revisions",
        "Multiple projects simultaneously",
        "Fast turnaround times",
        "Pause or cancel anytime",
        "No surprise charges or overages",
        "Ideal for: Growing businesses, multiple initiatives, continuous improvement"
      ],
      ctaText: "See Unlimited Options",
      gradient: "from-orange-500 to-red-500",
      bgAccent: "bg-orange-50 dark:bg-orange-950/20"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Flexible <span className="gradient-text">Pricing Models</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We operate on three flexible engagement models designed to fit your business needs and budget.
            Whether you need a one-time solution or ongoing partnership, we have an option for you.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge variant="outline" className="text-sm py-2 px-4">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              No Hidden Fees
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              Cancel Anytime
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              100% Satisfaction Guarantee
            </Badge>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={option.popular ? "lg:-mt-8" : ""}
              >
                <Card className={`h-full border-2 ${option.popular ? 'border-primary shadow-2xl' : 'border-border hover:border-primary/50'} transition-all duration-300 relative overflow-hidden`}>
                  {option.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold">
                      {option.badge}
                    </div>
                  )}

                  <CardHeader className="text-center pb-6">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${option.gradient} p-4 mb-4`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>

                    {!option.popular && (
                      <Badge variant="secondary" className="mb-2 w-fit mx-auto">
                        {option.badge}
                      </Badge>
                    )}

                    <CardTitle className="text-2xl font-bold mb-2">
                      {option.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {option.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {option.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full group/btn"
                      variant={option.popular ? "default" : "outline"}
                      size="lg"
                      onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {option.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-accent/20 rounded-2xl p-8 text-center border border-border"
        >
          <h3 className="text-2xl font-bold mb-4">Not sure which model fits your needs?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a free consultation and we'll help you choose the best engagement model
            for your business goals and budget. No pressure, no commitment required.
          </p>
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingModels;
