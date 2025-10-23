import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Calendar, Briefcase } from "lucide-react";

const About = () => {
  const experience = [
    {
      company: "Fortune 500 Food Distribution",
      role: "Supply Chain Operations",
      period: "2020 - Present",
      location: "Northeast Region",
      highlights: [
        "Led comprehensive safety and operational initiatives across large-scale distribution networks",
        "Drove continuous improvement in workplace culture and regulatory compliance",
        "Managed cross-functional teams and training programs for 600+ personnel"
      ]
    },
    {
      company: "Regional Food Distribution Leader",
      role: "Transportation & Logistics Management",
      period: "2018 - 2020",
      location: "New Jersey Region",
      highlights: [
        "Directed multi-site logistics operations with substantial fleet oversight",
        "Improved operational compliance metrics from 65% to 95%",
        "Developed strategic partnerships for long-term fleet management"
      ]
    },
    {
      company: "Technology & Brand Development",
      role: "Consulting & Solutions Architecture",
      period: "2015 - Present",
      location: "Remote / Multi-region",
      highlights: [
        "Designed and deployed custom software solutions for enterprise clients",
        "Developed comprehensive brand strategies and digital marketing campaigns",
        "Integrated AI/ML technologies into business processes"
      ]
    }
  ];

  const certifications = [
    "Six Sigma: Green Belt",
    "Demonstrating Accountability as a Leader",
    "Holding Your Team Accountable",
    "Java Certification Course",
    "Root Cause Analysis: Getting to the Root of Business Problems"
  ];

  const education = [
    {
      degree: "Master's in Integrated Supply Chain Management",
      institution: "Top-Tier Business School",
      achievement: "Graduate Leadership Recognition"
    }
  ];

  const skills = [
    "Supply Chain", "Logistics", "Fleet Management", "Team Leadership",
    "Python", "JavaScript", "AI/ML", "Database Design", "Linux",
    "Graphic Design", "SEO", "Brand Strategy"
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-cyan-400 blur-3xl" />
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Dobeu Tech Solutions</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            15+ years of expertise in transportation, logistics, and supply chain management combined
            with cutting-edge technology consulting and innovative brand development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-cyan-400 to-primary opacity-20" />

              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-cyan-400 border-4 border-background z-10" />

                  <div className="ml-12 glass-card rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-foreground mb-2">{job.role}</h4>
                      <p className="text-primary font-semibold mb-3">{job.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5 glass-subtle px-3 py-1 rounded-full">
                          <Calendar className="h-3.5 w-3.5 text-primary" />
                          {job.period}
                        </span>
                        <span className="flex items-center gap-1.5 glass-subtle px-3 py-1 rounded-full">
                          <MapPin className="h-3.5 w-3.5 text-primary" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Education</h3>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-foreground mb-3">{edu.degree}</h4>
                  <p className="text-primary font-semibold mb-4">{edu.institution}</p>
                  <div className="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{edu.achievement}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Certifications</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-xl p-4 group hover:scale-[1.02] hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-400" />
                      <p className="text-sm font-medium text-foreground">{cert}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Tags */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="glass-subtle px-4 py-2 rounded-full text-sm font-medium text-foreground hover:glass hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
