import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
} from "lucide-react";
import Link from "next/link";

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface FooterLink {
  name: string;
  url: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
  url?: string;
  isLink?: boolean;
}

export default function Footer() {
  const socialLinks: SocialLink[] = [
    { icon: <Facebook size={20} />, url: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
    { icon: <Youtube size={20} />, url: "#", label: "TikTok" },
  ];

  const quickLinks: FooterLink[] = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Study Destinations", url: "/countries" },
    { name: "Test Preparation", url: "/test-preparations" },
    { name: "Our Services", url: "/services" },
    { name: "Events/News", url: "/events-news" },
    { name: "Blogs", url: "/blogs" },
    { name: "Contact", url: "/contact" },
  ];

  const destinations: FooterLink[] = [
    { name: "United Kingdom", url: "/uk" },
    { name: "Australia", url: "/australia" },
    { name: "Canada", url: "/canada" },
    { name: "United States", url: "/usa" },
    { name: "New Zealand", url: "/new-zealand" },
  ];

  const testPreparations: FooterLink[] = [
    { name: "IELTS Preparation", url: "/test-preparations/ielts" },
    { name: "PTE Preparation", url: "/test-preparations/pte" },
    { name: "TOEFL Preparation", url: "/test-preparations/toefl" },
    { name: "SAT Preparation", url: "/test-preparations/sat" },
    { name: "GRE/GMAT Preparation", url: "/test-preparations/gre-gmat" },
  ];

  const contactInfo: ContactInfo[] = [
    {
      icon: <MapPin className="flex-shrink-0 mt-1 text-primary-500" size={18} />,
      text: "Nextgen Advisors Pvt. Ltd., Manbhawan, Lalitpur, Nepal",
    },
    {
      icon: <Phone className="text-primary-500" size={18} />,
      text: "015413555 | 9709195734 | 9709195735",
      url: "tel:015413555",
      isLink: true,
    },
    {
      icon: <Mail className="text-primary-500" size={18} />,
      text: "nextgenadvisors7@gmail.com",
      url: "mailto:nextgenadvisors7@gmail.com",
      isLink: true,
    },
    {
      icon: <Clock className="text-primary-500" size={18} />,
      text: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      icon: <Clock className="text-primary-500" size={18} />,
      text: "Sat: 10:00 AM - 4:00 PM",
    },
    {
      icon: <Clock className="text-primary-500" size={18} />,
      text: "Sun: Closed",
    },
  ];

  const legalLinks: FooterLink[] = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms of Service", url: "/terms" },
    { name: "Sitemap", url: "/sitemap" },
  ];

  return (
    <footer className="bg-secondary-500 text-white pt-12 pb-8 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Nextgen</h2>
                <p className="text-sm text-primary-300 font-medium">Advisors</p>
              </div>
            </div>
            <p className="text-supporting-300 text-sm sm:text-base">
              Empowering the next generation through quality education and global opportunities.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="text-supporting-300 hover:text-primary-400 transition-colors duration-200"
                  aria-label={`Visit our ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-supporting-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Study Destinations
            </h3>
            <ul className="space-y-2 text-supporting-300">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <Link
                    href={destination.url}
                    className="hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-supporting-300">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span aria-hidden="true">{info.icon}</span>
                  {info.isLink && info.url ? (
                    <Link
                      href={info.url}
                      className="hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {info.text}
                    </Link>
                  ) : (
                    <span className="text-sm sm:text-base">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-supporting-400 my-6 sm:my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-supporting-300 text-xs sm:text-sm">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Nextgen Advisors Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="hover:text-primary-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}