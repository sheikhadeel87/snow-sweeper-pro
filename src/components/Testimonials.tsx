import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Toronto, ON",
      rating: 5,
      text: "SnowPro Canada has been clearing our driveway for three winters now. They're always reliable, even during the worst storms. I never have to worry about getting to work in the morning!",
      service: "Residential Snow Removal",
    },
    {
      name: "Mike Chen",
      location: "Vancouver, BC", 
      rating: 5,
      text: "As a business owner, I can't afford to have my parking lot inaccessible. SnowPro's commercial service is outstanding - they're there before my customers arrive every single time.",
      service: "Commercial Snow Clearing",
    },
    {
      name: "Emily Rodriguez",
      location: "Calgary, AB",
      rating: 5,
      text: "The emergency service saved us during the blizzard last February. They arrived within 2 hours of my call at 3 AM. Professional, courteous, and incredibly efficient. Highly recommend!",
      service: "Emergency Service",
    },
    {
      name: "David Thompson",
      location: "Ottawa, ON",
      rating: 5,
      text: "Professional crew, fair pricing, and excellent communication. They even clear the snow from around my car and salt the walkways. This is what customer service should look like.",
      service: "Residential Snow Removal",
    },
    {
      name: "Lisa Wang",
      location: "Montreal, QC",
      rating: 5,
      text: "Our condo association switched to SnowPro last year and couldn't be happier. They handle everything - from walkways to parking areas. Great value for the comprehensive service.",
      service: "Commercial Snow Clearing",
    },
    {
      name: "Robert Miller",
      location: "Edmonton, AB",
      rating: 5,
      text: "I've used several snow removal services over the years, but none compare to SnowPro. They're proactive, professional, and always exceed expectations. Worth every penny!",
      service: "Seasonal Contract",
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/30">
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
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what customers across Canada are saying 
            about our professional snow removal services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border relative overflow-hidden">
                <motion.div 
                  className="absolute top-4 right-4 text-primary/20"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Quote className="w-8 h-8" />
                </motion.div>
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Rating */}
                  <motion.div 
                    className="flex items-center gap-1 mb-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.blockquote 
                    className="text-muted-foreground mb-6 flex-grow leading-relaxed"
                    variants={itemVariants}
                  >
                    "{testimonial.text}"
                  </motion.blockquote>

                  {/* Customer Info */}
                  <motion.div 
                    className="border-t border-border pt-4"
                    variants={itemVariants}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 bg-card rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="grid md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={statsVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                500+
              </motion.div>
              <div className="text-muted-foreground">Happy Customers</div>
            </motion.div>
            <motion.div
              variants={statsVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200
                }}
              >
                15+
              </motion.div>
              <div className="text-muted-foreground">Years Experience</div>
            </motion.div>
            <motion.div
              variants={statsVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200
                }}
              >
                24/7
              </motion.div>
              <div className="text-muted-foreground">Emergency Service</div>
            </motion.div>
            <motion.div
              variants={statsVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
              >
                100%
              </motion.div>
              <div className="text-muted-foreground">Satisfaction Guarantee</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;