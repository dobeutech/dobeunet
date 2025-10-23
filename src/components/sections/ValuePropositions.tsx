import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  TrendingUp,
  Users,
  Target,
  Sparkles,
  BarChart3,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const ValuePropositions = () => {
  const mainValue = {
    icon: Shield,
    title: "100% Satisfaction Guarantee",
    subtitle: "What We Promise, We Deliver - Or You Pay Nothing",
    description: "We stand behind our work with an ironclad guarantee. If we don't deliver on our promises, you don't pay. It's that simple. Your success is our success, and we're committed to measurable results.",
    features: [
      "No payment until you're completely satisfied",
      "Clear performance metrics established upfront",
      "Regular progress updates and transparency",
      "Money-back guarantee on all engagements"
    ]
  };

  const valueProps = [
    {
      icon: Sparkles,
      title: "Free Trial Work",
      description: "Experience our expertise risk-free with a complimentary proof-of-concept or mini-audit. We demonstrate value before asking for commitment.",
      highlight: "No credit card required"
    },
    {
      icon: Users,
      title: "Partnership Over Transactions",
      description: "We're not here for one-time projects. We build long-term relationships focused on your sustained growth and success.",
      highlight: "Long-term thinking"
    },
    {
      icon: BarChart3,
      title: "Metrics-Driven Approach",
      description: "Every engagement begins with establishing clear, measurable KPIs. We track progress and prove value with real data.",
      highlight: "Measurable results"
    },
    {
      icon: Target,
      title: "Realistic Expectations",
      description: "No overselling or false promises. We set achievable goals and deliver results that align expectations with reality.",
      highlight: "Honest assessments"
    },
    {
      icon: TrendingUp,
      title: "5-10 Year Planning",
      description: "Every solution considers your long-term business growth. We help you build scalable systems that grow with your company.",
      highlight: "Future-proof solutions"
    }
  ];

  return (
    <section id="value" className="py-24 bg-accent/5">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm py-2 px-4">
            <Shield className="h-4 w-4 mr-2" />
            Our Commitment to You
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Businesses <span className="gradient-text">Trust Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another IT vendor. We're your strategic partner, committed to your success
            with transparent pricing, measurable results, and risk-free engagement options.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-primary p-5">
                    <Shield className="w-full h-full text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1">
                  <Badge variant="default" className="mb-3">
                    Our Guarantee
                  </Badge>
                  <h3 className="text-3xl font-bold mb-3">{mainValue.title}</h3>
                  <p className="text-xl text-primary font-semibold mb-4">{mainValue.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {mainValue.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {mainValue.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="group"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Start Risk-Free
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {valueProps.map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 p-3 mb-4">
                        <IconComponent className="w-full h-full text-primary" />
                      </div>
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {prop.highlight}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {prop.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-background border-2 border-border rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-background flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-2 border-background flex items-center justify-center text-white text-sm font-bold">
                  B
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-2 border-background flex items-center justify-center text-white text-sm font-bold">
                  C
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Join 50+ satisfied clients</p>
                <p className="text-sm text-muted-foreground">Who trust our risk-free approach</p>
              </div>
            </div>
            <Button
              variant="default"
              className="group"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropositions;
