"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Globe, GraduationCap, FileText, User } from "lucide-react";

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  currentAddress: string;
  academicQualification: string;
  studyDestinations: string[];
  studyLevel: string;
  englishTest: string;
  hasPassport: string;
  studyAbroad: string;
}

export default function ApplyOnlinePage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    currentAddress: "",
    academicQualification: "",
    studyDestinations: [],
    studyLevel: "",
    englishTest: "",
    hasPassport: "",
    studyAbroad: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (destination: string) => {
    setFormData(prev => ({
      ...prev,
      studyDestinations: prev.studyDestinations.includes(destination)
        ? prev.studyDestinations.filter(d => d !== destination)
        : [...prev.studyDestinations, destination]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 bg-gradient-to-br from-accent-500 via-white to-accent-300 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full"
        >
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-primary-500" />
          </div>
          <h2 className="text-2xl font-bold text-secondary-500 mb-4">
            Application Submitted!
          </h2>
          <p className="text-secondary-600 mb-6">
            Thank you for your application. Our counselors will contact you within 24 hours to discuss your study abroad journey.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                phoneNumber: "",
                email: "",
                currentAddress: "",
                academicQualification: "",
                studyDestinations: [],
                studyLevel: "",
                englishTest: "",
                hasPassport: "",
                studyAbroad: "",
              });
            }}
            className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Submit Another Application
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 bg-gradient-to-br from-accent-500 via-white to-accent-300 px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
            Apply Online
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Take the first step towards your international education journey. 
            Fill out this form and our expert counselors will guide you through the process.
          </p>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Student Application Form</h2>
                <p className="text-white/90">Complete all required fields</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-secondary-500 flex items-center gap-2">
                <User className="w-5 h-5 text-primary-500" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-600 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-600 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Include country code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-600 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-600 mb-2">
                    Current Address (City/District) *
                  </label>
                  <input
                    type="text"
                    name="currentAddress"
                    value={formData.currentAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-600 mb-2">
                  Highest Academic Qualification *
                </label>
                <input
                  type="text"
                  name="academicQualification"
                  value={formData.academicQualification}
                  onChange={handleInputChange}
                  placeholder='e.g., "+2 Science – GPA 3.1" / "Bachelor\'s in BBA – 60%"'
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Study Preferences */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-secondary-500 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary-500" />
                Study Preferences
              </h3>

              <div>
                <label className="block text-sm font-medium text-secondary-600 mb-3">
                  Preferred Study Destination(s) *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["UK", "Australia", "Canada", "USA", "New Zealand"].map((destination) => (
                    <label key={destination} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.studyDestinations.includes(destination)}
                        onChange={() => handleCheckboxChange(destination)}
                        className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-secondary-600">{destination}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-600 mb-2">
                  Preferred Level of Study *
                </label>
                <select
                  name="studyLevel"
                  value={formData.studyLevel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Select level</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
            </div>

            {/* Test & Documentation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-secondary-500 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-500" />
                Test & Documentation
              </h3>

              <div>
                <label className="block text-sm font-medium text-secondary-600 mb-2">
                  Have you taken any English proficiency tests? *
                </label>
                <select
                  name="englishTest"
                  value={formData.englishTest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Select option</option>
                  <option value="IELTS">IELTS</option>
                  <option value="PTE">PTE</option>
                  <option value="TOEFL">TOEFL</option>
                  <option value="Others">Others</option>
                  <option value="Not yet">Not yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-600 mb-2">
                  Do you have a valid passport? *
                </label>
                <select
                  name="hasPassport"
                  value={formData.hasPassport}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Applied">Applied</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-600 mb-2">
                  Why do you want to study abroad?
                </label>
                <textarea
                  name="studyAbroad"
                  value={formData.studyAbroad}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Brief reason to understand goals/motivation"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Application
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white rounded-xl shadow-lg p-6 text-center"
        >
          <h3 className="text-lg font-semibold text-secondary-500 mb-4">
            Need Help with Your Application?
          </h3>
          <p className="text-secondary-600 mb-4">
            Our expert counselors are here to assist you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:015413555"
              className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
            >
              📞 Call: 015413555
            </a>
            <a
              href="mailto:nextgenadvisors7@gmail.com"
              className="bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors"
            >
              ✉️ Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}