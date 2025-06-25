"use client";

import { motion } from "framer-motion";
import { Award, Users, Globe, BookOpen, Target, Heart, Eye } from "lucide-react";
import Image from "next/image";

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  number: string;
  label: string;
}

interface ValueItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function AboutSection() {
  const stats: StatItem[] = [
    { icon: Users, number: "5000+", label: "Students Guided" },
    { icon: Globe, number: "5+", label: "Countries" },
    { icon: BookOpen, number: "100+", label: "Universities" },
    { icon: Award, number: "98%", label: "Success Rate" },
  ];

  const values: ValueItem[] = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, ensuring the highest quality of service for our students.",
    },
    {
      icon: Heart,
      title: "Care",
      description:
        "We genuinely care about each student's success and provide personalized support throughout their journey.",
    },
    {
      icon: Globe,
      title: "Global Vision",
      description:
        "We help students think globally and prepare them for success in an interconnected world.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-500 mb-3 sm:mb-4">
            About Nextgen Advisors
          </h2>
          <p className="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto">
            A premier educational consultancy helping students pursue their dreams 
            of studying abroad with expert guidance and personalized support.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-0"
            >
              <div className="bg-accent-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-500 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-secondary-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Who Are We */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16"
        >
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-500 mb-4 sm:mb-6">
              Who Are We?
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-secondary-600">
              <p>
                Nextgen Advisors is a premier educational consultancy helping students 
                pursue their dreams of studying abroad. We provide end-to-end guidance, 
                from selecting the right course and university to visa processing and 
                pre-departure preparation.
              </p>
              <p>
                We guide students to the right path by offering expert counseling, 
                personalized support, and access to top international universities. 
                Our experienced team understands the challenges of international 
                education and provides comprehensive solutions.
              </p>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <Users className="w-24 h-24 text-primary-500" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 sm:mb-16"
        >
          <div className="bg-accent-500 rounded-xl p-6 sm:p-8">
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-primary-500 mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-500">
                Our Vision
              </h3>
            </div>
            <p className="text-secondary-600">
              To empower the next generation by providing access to quality education 
              and global career opportunities that truly make a difference in their lives.
            </p>
          </div>

          <div className="bg-primary-50 rounded-xl p-6 sm:p-8">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-primary-500 mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-secondary-500">
                Our Mission
              </h3>
            </div>
            <p className="text-secondary-600">
              To deliver honest, efficient, and personalized guidance that empowers 
              students to make informed decisions, achieve their academic goals, and 
              unlock global opportunities through trusted education consultancy services.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-500 text-center mb-8 sm:mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-4 sm:p-6 rounded-xl bg-accent-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="w-5 h-5 sm:w-8 sm:h-8 text-primary-500" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-secondary-500 mb-2 sm:mb-3">
                  {value.title}
                </h4>
                <p className="text-sm sm:text-base text-secondary-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Testimonials Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-500 mb-8">
            Student Testimonials
          </h3>
          <div className="bg-accent-500 rounded-xl p-8 text-center">
            <p className="text-secondary-600 mb-4">
              Testimonials from our successful students will be displayed here.
            </p>
            <p className="text-sm text-secondary-500">
              (Images and testimonials to be added)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}