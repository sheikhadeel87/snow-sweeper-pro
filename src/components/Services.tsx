import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Home, Building2, Clock, Shield, Snowflake, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Home className="w-10 h-10" />,
      title: "Residential Snow Removal",
      description: "Professional driveway and walkway clearing for homeowners across Canada.",
      features: ["Driveway clearing", "Walkway maintenance", "Ice management", "Emergency service"],
      price: "Starting at $45/visit",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
      badge: "Most Popular",
      rating: 4.9,
      reviews: 127,
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Commercial Snow Clearing",
      description: "Keep your business accessible with reliable commercial snow removal services.",
      features: ["Parking lot clearing", "Sidewalk maintenance", "Salt application", "24/7 availability"],
      price: "Custom pricing",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-600",
      badge: "Business Choice",
      rating: 4.8,
      reviews: 89,
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Emergency Snow Service",
      description: "Round-the-clock emergency snow removal when you need it most.",
      features: ["24/7 emergency response", "Priority service", "Rapid deployment", "All weather conditions"],
      price: "Premium rates apply",
      gradient: "from-red-500/20 to-orange-500/20",
      iconBg: "bg-red-500/10",
      iconColor: "text-red-600",
      badge: "Emergency",
      rating: 4.9,
      reviews: 203,
    },
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fully Insured & Licensed",
      description: "Complete protection and peace of mind for every service call.",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Emergency snow removal services available around the clock.",
      gradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: "Professional Equipment",
      description: "State-of-the-art snow removal equipment for efficient service.",
      gradient: "from-cyan-500/20 to-teal-500/20",
    },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Snowflake className="w-4 h-4" />
            Professional Snow Removal Services
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional snow removal services across Canada. From residential driveways to commercial parking lots, 
            we keep your property safe and accessible all winter long with cutting-edge equipment and experienced crews.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`} />
                
                {/* Badge */}
                {service.badge && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute top-4 right-4 z-10"
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground shadow-lg">
                      {service.badge}
                    </span>
                  </motion.div>
                )}

                <CardHeader className="relative z-10 pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`p-4 rounded-2xl ${service.iconBg} ${service.iconColor} shadow-lg`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-5">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{service.rating}</span>
                      <span className="text-xs text-muted-foreground">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <motion.div 
                    className="space-y-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center gap-3"
                        variants={itemVariants}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <motion.div 
                          className="p-1 rounded-full bg-green-500/10"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </motion.div>
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="pt-6 border-t border-border/50">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-2xl font-bold text-primary">{service.price}</p>
                        <p className="text-sm text-muted-foreground">No hidden fees</p>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    >
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-base font-semibold shadow-lg">
                        Get Quote Now
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-3xl" />
          
          <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SnowPro Canada?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're not just another snow removal company. We're your winter partners, 
                committed to keeping your property safe and accessible all season long.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {whyChooseUs.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className={`mx-auto mb-6 p-6 rounded-2xl bg-gradient-to-br ${item.gradient} w-fit shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="text-primary">
                      {item.icon}
                    </div>
                  </motion.div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="text-center mt-12 pt-8 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-muted-foreground mb-6">
                Ready to experience the difference? Get your free quote today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold">
                    Get Free Quote
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="px-8 py-3 text-lg font-semibold">
                    Call Now: 1-800-SNOW-123
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;