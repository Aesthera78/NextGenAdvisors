"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight, Globe, BookOpen, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Destination {
  name: string;
  route: string;
  flag: string;
}

interface TestPreparation {
  name: string;
  route: string;
  icon: string;
}

interface Service {
  name: string;
  route: string;
  icon: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const destinations: Destination[] = [
    { name: "United Kingdom", route: "/uk", flag: "🇬🇧" },
    { name: "Australia", route: "/australia", flag: "🇦🇺" },
    { name: "Canada", route: "/canada", flag: "🇨🇦" },
    { name: "United States", route: "/usa", flag: "🇺🇸" },
    { name: "New Zealand", route: "/new-zealand", flag: "🇳🇿" },
  ];

  const testPreparations: TestPreparation[] = [
    { name: "IELTS", route: "/test-preparations/ielts", icon: "📝" },
    { name: "PTE", route: "/test-preparations/pte", icon: "💻" },
    { name: "TOEFL", route: "/test-preparations/toefl", icon: "📚" },
    { name: "SAT", route: "/test-preparations/sat", icon: "🎓" },
    { name: "GRE/GMAT", route: "/test-preparations/gre-gmat", icon: "📊" },
  ];

  const services: Service[] = [
    { name: "Career Counseling", route: "/services#career-counseling", icon: "🎯" },
    { name: "University & Course Selection", route: "/services#university-selection", icon: "🏛️" },
    { name: "Application Assistance", route: "/services#application-assistance", icon: "📋" },
    { name: "Visa Guidance", route: "/services#visa-guidance", icon: "📄" },
    { name: "Scholarship Support", route: "/services#scholarship-support", icon: "💰" },
    { name: "Pre-Departure Briefing", route: "/services#pre-departure", icon: "✈️" },
    { name: "Post-Arrival Support", route: "/services#post-arrival", icon: "🤝" },
  ];

  // Handle click outside mobile menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Top Header Bar - Desktop Only */}
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : "-100%",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden lg:block bg-secondary-500 text-white py-2 px-4 text-sm fixed w-full z-50"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="text-accent-500 font-medium">📧 nextgenadvisors7@gmail.com</span>
            <span className="text-accent-500 font-medium">📞 015413555 | 9709195734</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href="/gallery"
              className="hover:text-accent-500 cursor-pointer transition-colors text-xs md:text-sm whitespace-nowrap flex items-center gap-1"
              aria-label="Gallery"
            >
              <span>GALLERY</span>
            </Link>
            <Link
              href="/resources"
              className="hover:text-accent-500 cursor-pointer transition-colors text-xs md:text-sm whitespace-nowrap"
              aria-label="Resources"
            >
              RESOURCES
            </Link>
            <Link
              href="/apply-online"
              className="bg-primary-500 text-white px-3 py-1 rounded hover:bg-primary-600 transition-colors text-xs md:text-sm whitespace-nowrap"
              aria-label="Apply Online"
            >
              APPLY ONLINE
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        ref={navbarRef}
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : "-100%",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white shadow-lg fixed lg:top-[40px] top-0 z-40 w-full border-b-2 border-primary-500"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <Link
                href="/"
                className="flex items-center gap-3"
                aria-label="Home"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-secondary-500">Nextgen</h1>
                  <p className="text-sm text-primary-500 font-medium">Advisors</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors whitespace-nowrap"
                  aria-label="About us"
                >
                  ABOUT US
                </Link>
              </motion.div>

              {/* Study Destinations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("destinations")}
                onMouseLeave={handleDropdownLeave}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-gray-700 hover:text-primary-500 font-medium transition-colors py-4"
                  aria-label="Study destinations"
                >
                  <span className="whitespace-nowrap">STUDY DESTINATIONS</span>
                  <motion.div
                    animate={{
                      rotate: activeDropdown === "destinations" ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === "destinations" && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-72 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50"
                    >
                      <div className="space-y-1 px-4">
                        {destinations.map((destination, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={destination.route}
                              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent-500 transition-colors group"
                              aria-label={`Study in ${destination.name}`}
                            >
                              <span className="text-2xl">
                                {destination.flag}
                              </span>
                              <span className="text-sm font-medium text-gray-700 group-hover:text-secondary-500">
                                {destination.name}
                              </span>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all ml-auto" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Test Preparations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("testprep")}
                onMouseLeave={handleDropdownLeave}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-gray-700 hover:text-primary-500 font-medium transition-colors py-4"
                  aria-label="Test preparations"
                >
                  <span className="whitespace-nowrap">TEST PREPARATION</span>
                  <motion.div
                    animate={{
                      rotate: activeDropdown === "testprep" ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === "testprep" && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-72 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50"
                    >
                      <div className="space-y-1 px-4">
                        {testPreparations.map((prep, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={prep.route}
                              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent-500 transition-colors group"
                              aria-label={`${prep.name} test preparation`}
                            >
                              <span className="text-xl">{prep.icon}</span>
                              <span className="text-sm font-medium text-gray-700 group-hover:text-secondary-500">
                                {prep.name}
                              </span>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all ml-auto" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("services")}
                onMouseLeave={handleDropdownLeave}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-gray-700 hover:text-primary-500 font-medium transition-colors py-4 whitespace-nowrap"
                  aria-label="Services"
                >
                  OUR SERVICES
                  <motion.div
                    animate={{
                      rotate: activeDropdown === "services" ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-80 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50"
                    >
                      <div className="space-y-1 px-4">
                        {services.map((service, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={service.route}
                              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent-500 transition-colors group"
                              aria-label={service.name}
                            >
                              <span className="text-xl">{service.icon}</span>
                              <span className="text-sm font-medium text-gray-700 group-hover:text-secondary-500 flex-1">
                                {service.name}
                              </span>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/events-news"
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors whitespace-nowrap"
                  aria-label="Events and News"
                >
                  EVENTS/NEWS
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/blogs"
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors whitespace-nowrap"
                  aria-label="Blogs"
                >
                  BLOGS
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-primary-500 text-white px-4 xl:px-6 py-2 rounded-lg font-medium hover:bg-secondary-500 transition-all duration-300 whitespace-nowrap"
                  aria-label="Contact us"
                >
                  CONTACT US
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              ref={hamburgerButtonRef}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden hover:scale-110 transition-transform duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                ref={mobileMenuRef}
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="lg:hidden fixed top-0 right-0 w-full max-w-xs bg-white h-screen z-50 shadow-xl overflow-y-auto"
              >
                <div className="p-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 hover:scale-110 transition-transform duration-200"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col space-y-6 mt-12"
                  >
                    {/* Mobile Navigation Items */}
                    <div className="space-y-4">
                      <Link
                        href="/about"
                        className="block py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                        aria-label="About us"
                      >
                        ABOUT US
                      </Link>

                      {/* Mobile Study Destinations */}
                      <div className="border-b pb-2">
                        <button
                          onClick={() => toggleMobileDropdown("destinations")}
                          className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors"
                        >
                          STUDY DESTINATIONS
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        <AnimatePresence>
                          {mobileDropdown === "destinations" && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 py-2 space-y-2"
                            >
                              {destinations.map((destination, index) => (
                                <Link
                                  key={index}
                                  href={destination.route}
                                  className="flex items-center gap-3 py-2 text-gray-700 hover:text-primary-500 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span>{destination.flag}</span>
                                  <span>{destination.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Mobile Test Preparations */}
                      <div className="border-b pb-2">
                        <button
                          onClick={() => toggleMobileDropdown("testprep")}
                          className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors"
                        >
                          TEST PREPARATION
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        <AnimatePresence>
                          {mobileDropdown === "testprep" && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 py-2 space-y-2"
                            >
                              {testPreparations.map((prep, index) => (
                                <Link
                                  key={index}
                                  href={prep.route}
                                  className="flex items-center gap-3 py-2 text-gray-700 hover:text-primary-500 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span>{prep.icon}</span>
                                  <span>{prep.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Mobile Services */}
                      <div className="border-b pb-2">
                        <button
                          onClick={() => toggleMobileDropdown("services")}
                          className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors"
                        >
                          OUR SERVICES
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        <AnimatePresence>
                          {mobileDropdown === "services" && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 py-2 space-y-2"
                            >
                              {services.map((service, index) => (
                                <Link
                                  key={index}
                                  href={service.route}
                                  className="flex items-center gap-3 py-2 text-gray-700 hover:text-primary-500 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span>{service.icon}</span>
                                  <span className="text-sm">{service.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <Link
                        href="/events-news"
                        className="block py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                      >
                        EVENTS/NEWS
                      </Link>

                      <Link
                        href="/blogs"
                        className="block py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                      >
                        BLOGS
                      </Link>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/contact"
                        className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary-500 transition-all duration-300 text-center block"
                        onClick={() => setIsOpen(false)}
                      >
                        CONTACT US
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}