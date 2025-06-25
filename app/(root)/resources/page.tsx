"use client";

import { motion } from "framer-motion";
import { Download, FileText, Video, BookOpen, ExternalLink, Search } from "lucide-react";
import { useState } from "react";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "pdf" | "video" | "guide" | "checklist";
  category: string;
  downloadUrl?: string;
  externalUrl?: string;
  size?: string;
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const resources: Resource[] = [
    {
      id: "1",
      title: "Complete Guide to UK Student Visa",
      description: "Step-by-step guide for UK student visa application process",
      type: "pdf",
      category: "visa",
      downloadUrl: "#",
      size: "2.5 MB"
    },
    {
      id: "2",
      title: "IELTS Preparation Checklist",
      description: "Essential checklist for IELTS exam preparation",
      type: "checklist",
      category: "test-prep",
      downloadUrl: "#",
      size: "1.2 MB"
    },
    {
      id: "3",
      title: "University Application Timeline",
      description: "When to apply for different intake periods",
      type: "guide",
      category: "application",
      downloadUrl: "#",
      size: "800 KB"
    },
    {
      id: "4",
      title: "Scholarship Application Tips",
      description: "How to write winning scholarship applications",
      type: "video",
      category: "scholarship",
      externalUrl: "#",
    },
    {
      id: "5",
      title: "Pre-Departure Checklist",
      description: "Everything you need before traveling abroad",
      type: "checklist",
      category: "pre-departure",
      downloadUrl: "#",
      size: "1.5 MB"
    },
    {
      id: "6",
      title: "Country Comparison Guide",
      description: "Compare study destinations and their benefits",
      type: "guide",
      category: "destinations",
      downloadUrl: "#",
      size: "3.2 MB"
    }
  ];

  const categories = [
    { value: "all", label: "All Resources" },
    { value: "visa", label: "Visa Guidance" },
    { value: "test-prep", label: "Test Preparation" },
    { value: "application", label: "Applications" },
    { value: "scholarship", label: "Scholarships" },
    { value: "pre-departure", label: "Pre-Departure" },
    { value: "destinations", label: "Destinations" }
  ];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="w-6 h-6" />;
      case "video":
        return <Video className="w-6 h-6" />;
      case "guide":
        return <BookOpen className="w-6 h-6" />;
      case "checklist":
        return <FileText className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case "pdf":
        return "bg-red-100 text-red-600";
      case "video":
        return "bg-blue-100 text-blue-600";
      case "guide":
        return "bg-green-100 text-green-600";
      case "checklist":
        return "bg-purple-100 text-purple-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-32 bg-gradient-to-br from-accent-500 via-white to-accent-300 px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
            Study Abroad Resources
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Access our comprehensive collection of guides, checklists, and tools 
            to help you navigate your international education journey.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${getResourceColor(resource.type)}`}>
                    {getResourceIcon(resource.type)}
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {resource.type.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-secondary-500 mb-2">
                  {resource.title}
                </h3>
                <p className="text-secondary-600 text-sm mb-4">
                  {resource.description}
                </p>

                {resource.size && (
                  <p className="text-xs text-gray-500 mb-4">
                    File size: {resource.size}
                  </p>
                )}

                <div className="flex gap-2">
                  {resource.downloadUrl && (
                    <button className="flex-1 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 text-sm">
                      <Download size={16} />
                      Download
                    </button>
                  )}
                  {resource.externalUrl && (
                    <button className="flex-1 bg-secondary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-600 transition-colors flex items-center justify-center gap-2 text-sm">
                      <ExternalLink size={16} />
                      View
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No resources found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search terms or filter criteria.
            </p>
          </motion.div>
        )}

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <h3 className="text-xl font-semibold text-secondary-500 mb-4">
            Need Additional Resources?
          </h3>
          <p className="text-secondary-600 mb-6">
            Can't find what you're looking for? Our counselors can provide 
            personalized resources and guidance for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Contact Our Counselors
            </a>
            <a
              href="mailto:nextgenadvisors7@gmail.com"
              className="bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors"
            >
              Email Your Request
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}