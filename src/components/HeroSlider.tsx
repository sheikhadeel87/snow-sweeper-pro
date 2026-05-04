import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Shield, Clock, Snowflake } from "lucide-react";
import { motion } from "framer-motion";
import heroImage1 from "@/assets/hero-snow-removal-1.jpg";
import heroImage2 from "@/assets/hero-snow-removal-2.jpg";
import heroImage3 from "@/assets/hero-snow-removal-3.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage1,
      title: "Professional Snow Removal",
      subtitle: "Keep Your Property Safe & Accessible All Winter Long",
      description: "24/7 emergency service across Canada with professional equipment and experienced crews.",
    },
    {
      image: heroImage2,
      title: "Commercial Snow Clearing",
      subtitle: "Reliable Service for Your Business",
      description: "Ensure your customers and employees can safely access your business premises.",
    },
    {
      image: heroImage3,
      title: "Residential Snow Services",
      subtitle: "Your Driveway, Our Priority",
      description: "Professional residential snow removal services to keep your home accessible.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Debug logging
  useEffect(() => {
    console.log("Current slide:", currentSlide);
    console.log("Current image:", slides[currentSlide].image);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Debug: Show all images stacked for testing */}
      <div className="absolute inset-0 flex flex-col">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-1/3 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              opacity: index === currentSlide ? 1 : 0.3
            }}
          />
        ))}
      </div>

      {/* Background Images */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            transition: { duration: 1, ease: "easeInOut" }
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div 
          key={currentSlide}
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.2 }
          }}
        >
          <motion.div 
            className="mb-6"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight mb-4"
              variants={itemVariants}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl font-light mb-6"
              variants={itemVariants}
            >
              {slides[currentSlide].subtitle}
            </motion.h2>
            <motion.p 
              className="text-lg opacity-90 mb-8"
              variants={itemVariants}
            >
              {slides[currentSlide].description}
            </motion.p>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="flex flex-wrap gap-6 mb-8"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Fully Insured</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">24/7 Emergency</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Snowflake className="w-5 h-5" />
              <span className="text-sm font-medium">Professional Equipment</span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg">
                Get Free Quote Now
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="!bg-white !text-gray-800 hover:!bg-white hover:!text-blue-600 !border-gray-300 hover:!border-blue-600 px-8 py-6 text-lg shadow-lg"
                style={{ backgroundColor: 'white', borderColor: '#d1d5db', color: '#1f2937' }}
              >
                Call Now: 1-800-SNOW-123
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 w-12 h-12"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 w-12 h-12"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Slide Indicators */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            animate={{
              scale: index === currentSlide ? 1.2 : 1,
              backgroundColor: index === currentSlide ? "white" : "rgba(255, 255, 255, 0.5)",
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </motion.div>

      {/* Debug Info */}
      <div className="absolute top-4 right-4 z-30 bg-black/50 text-white px-2 py-1 rounded text-xs">
        Slide: {currentSlide + 1} / {slides.length}
      </div>
      
      {/* Image Debug Info */}
      <div className="absolute top-4 left-4 z-30 bg-black/50 text-white px-2 py-1 rounded text-xs">
        <div>Image 1: {heroImage1 ? "✓" : "✗"}</div>
        <div>Image 2: {heroImage2 ? "✓" : "✗"}</div>
        <div>Image 3: {heroImage3 ? "✓" : "✗"}</div>
      </div>
    </section>
  );
};

export default HeroSlider;