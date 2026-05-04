import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Truck, Award, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fully Licensed & Insured",
      description: "Complete liability and workers compensation coverage for your peace of mind.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experienced Team",
      description: "Our crews are trained professionals with years of snow removal experience.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Modern Equipment",
      description: "State-of-the-art snow plows, blowers, and salt spreaders for efficient service.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "We stand behind our work with a 100% satisfaction guarantee.",
    },
  ];

  const stats = [
    { number: "15+", label: "Years in Business" },
    { number: "500+", label: "Properties Serviced" },
    { number: "50+", label: "Professional Crew Members" },
    { number: "10", label: "Major Cities Covered" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About SnowPro Canada
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Canada's most trusted snow removal service, keeping properties safe and accessible 
            across the country for over 15 years.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Professional Snow Removal Services You Can Trust
            </h3>
            <div className="space-y-6 text-muted-foreground">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Founded in 2009, SnowPro Canada began as a small family business with a simple mission: 
                to provide reliable, professional snow removal services that keep Canadian properties 
                safe and accessible throughout the harsh winter months.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Today, we're proud to serve over 500 residential and commercial clients across major 
                Canadian cities. Our success comes from our commitment to quality, reliability, and 
                treating every property as if it were our own.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                From emergency 3 AM snow clearing to seasonal maintenance contracts, we've built our 
                reputation on being there when you need us most. Our fully licensed and insured crews 
                use professional-grade equipment to ensure your property is cleared safely and efficiently.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Get Your Free Quote
              </Button>
              <Button variant="outline" className="px-8">
                View Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="p-3 bg-primary/10 text-primary rounded-lg"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {feature.icon}
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
            <motion.h3 
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Trusted Across Canada
            </motion.h3>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={statsVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Service Areas */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card>
            <CardContent className="p-8 md:p-12">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 text-primary mb-4">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Our Service Areas</h3>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We proudly serve residential and commercial clients across Canada's major cities.
                </p>
              </motion.div>
              
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Toronto & GTA, Ontario",
                  "Ottawa, Ontario", 
                  "Montreal, Quebec",
                  "Vancouver, British Columbia",
                  "Calgary, Alberta",
                  "Edmonton, Alberta",
                  "Winnipeg, Manitoba",
                  "Halifax, Nova Scotia",
                  "Saskatoon, Saskatchewan"
                ].map((city, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-muted/50 rounded-lg"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "hsl(var(--primary) / 0.1)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-medium">{city}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="text-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-sm text-muted-foreground mb-4">
                  Don't see your city? We're expanding! Contact us to learn about service in your area.
                </p>
                <Button variant="outline">
                  Contact Us About Your Area
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;