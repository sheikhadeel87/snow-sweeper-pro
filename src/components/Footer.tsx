import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Snowflake,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Residential Snow Removal",
    "Commercial Snow Clearing", 
    "Emergency Snow Service",
    "Seasonal Contracts",
    "Ice Management",
    "Sidewalk Clearing"
  ];

  const serviceAreas = [
    "Toronto, ON",
    "Vancouver, BC", 
    "Calgary, AB",
    "Montreal, QC",
    "Ottawa, ON",
    "Edmonton, AB"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Get Quote", href: "#contact" },
    { name: "Emergency Service", href: "tel:1-800-SNOW-123" },
    { name: "Service Areas", href: "#about" },
    { name: "Contact", href: "#contact" }
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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div 
          className="py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Company Info */}
            <motion.div className="space-y-6" variants={cardVariants}>
              <motion.a
                href="#home"
                className="group flex items-center gap-2.5 md:gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary-foreground shadow-md ring-1 ring-primary-foreground/50 transition-[box-shadow,transform] duration-200 group-hover:-translate-y-px group-hover:shadow-lg md:h-[3.35rem] md:w-[3.35rem]"
                  whileHover={{ rotate: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={logo}
                    alt=""
                    className="h-[90%] w-[90%] object-contain"
                    decoding="async"
                  />
                </motion.div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold leading-tight tracking-tight">
                    SnowPro Canada
                  </h3>
                  <p className="text-sm text-primary-foreground/85">
                    Professional Snow Removal
                  </p>
                </div>
              </motion.a>
              <motion.p 
                className="text-sm opacity-90 leading-relaxed"
                variants={itemVariants}
              >
                Canada's most trusted snow removal service. We keep your property safe, 
                accessible, and clear all winter long with professional equipment and 
                experienced crews.
              </motion.p>
              
              {/* Emergency Contact */}
              <motion.div 
                className="bg-accent/20 rounded-lg p-4"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Clock className="w-5 h-5 text-accent" />
                  </motion.div>
                  <span className="font-semibold">24/7 Emergency</span>
                </div>
                <p className="text-2xl font-bold">1-800-SNOW-123</p>
                <p className="text-sm opacity-90">Available around the clock</p>
              </motion.div>
            </motion.div>

            {/* Services */}
            <motion.div variants={cardVariants}>
              <motion.h4 
                className="text-lg font-semibold mb-6 flex items-center gap-2"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Snowflake className="w-5 h-5" />
                </motion.div>
                Our Services
              </motion.h4>
              <motion.ul 
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {services.map((service, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <a 
                      href="#services" 
                      className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                    >
                      {service}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Service Areas */}
            <motion.div variants={cardVariants}>
              <motion.h4 
                className="text-lg font-semibold mb-6 flex items-center gap-2"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-5 h-5" />
                </motion.div>
                Service Areas
              </motion.h4>
              <motion.ul 
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {serviceAreas.map((area, index) => (
                  <motion.li 
                    key={index} 
                    className="text-sm opacity-90"
                    variants={itemVariants}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    {area}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div 
                className="mt-4 pt-4 border-t border-white/20"
                variants={itemVariants}
              >
                <p className="text-sm opacity-90">
                  & more cities across Canada
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="link" 
                    className="text-accent hover:text-accent/80 p-0 h-auto text-sm"
                  >
                    View all service areas →
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact & Newsletter */}
            <motion.div variants={cardVariants}>
              <motion.h4 
                className="text-lg font-semibold mb-6"
                variants={itemVariants}
              >
                Stay Connected
              </motion.h4>
              
              {/* Contact Info */}
              <motion.div 
                className="space-y-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center gap-3 text-sm"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="w-4 h-4 opacity-75" />
                  </motion.div>
                  <span>1-800-SNOW-123</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-sm"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="w-4 h-4 opacity-75" />
                  </motion.div>
                  <span>info@snowprocanada.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3 text-sm"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="w-4 h-4 opacity-75 mt-0.5" />
                  </motion.div>
                  <span>Serving all major Canadian cities</span>
                </motion.div>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <h5 className="font-semibold text-sm">Winter Weather Updates</h5>
                <div className="flex gap-2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input 
                      placeholder="Your email" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="secondary" 
                      size="sm"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Subscribe
                    </Button>
                  </motion.div>
                </div>
                <p className="text-xs opacity-75">
                  Get weather alerts and service updates
                </p>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                className="mt-6"
                variants={itemVariants}
              >
                <h5 className="font-semibold text-sm mb-3">Follow Us</h5>
                <motion.div 
                  className="flex gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Youtube, href: "#" }
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white/70 hover:text-white hover:bg-white/10 w-8 h-8"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <social.icon className="w-4 h-4" />
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <motion.div 
          className="py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-4 text-sm opacity-90"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={itemVariants}>&copy; {currentYear} SnowPro Canada. All rights reserved by W-Techsol.</motion.p>
              <motion.div 
                className="flex gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { name: "Privacy Policy", href: "#" },
                  { name: "Terms of Service", href: "#" },
                  { name: "Service Agreement", href: "#" }
                ].map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.href} 
                    className="hover:text-accent transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Get Free Quote
                </Button>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 bg-transparent text-white hover:bg-white/15 hover:text-white"
                  asChild
                >
                  <a href="tel:1-800-SNOW-123">Emergency Service</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div 
            className="mt-6 pt-6 border-t border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-6 text-xs opacity-75"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "🛡️ Fully Licensed & Insured",
                "🏆 BBB Accredited Business",
                "❄️ Professional Snow & Ice Management Association Member",
                "🇨🇦 Proudly Canadian Owned"
              ].map((cert, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {cert}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;