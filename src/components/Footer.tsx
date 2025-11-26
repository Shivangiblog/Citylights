import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <footer className="bg-gradient-dark text-background border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/slider/c-logo.png"
                className="w-10 h-10 object-contain"
              />
            </div>

            <p className="text-muted-foreground text-sm">
              Illuminating spaces with premium lighting solutions since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>

            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  to="/"
                  className={`transition-colors ${
                    isActive("/") ? "text-primary" : "text-white hover:text-primary"
                  }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className={`transition-colors ${
                    isActive("/about")
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/lighting"
                  className={`transition-colors ${
                    isActive("/lighting")
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  Lighting
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className={`transition-colors ${
                    isActive("/contact")
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Categories</h3>

            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  to="/chandeliers"
                  className={`transition-colors ${
                    isActive("/chandeliers")
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  Chandeliers
                </Link>
              </li>

              <li>
                <Link
                  to="/pendantlights"
                  className={`transition-colors ${
                    isActive("/pendantlights")
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  Pendant Lights
                </Link>
              </li>

              <li>
                <Link
                  to="/floorlamps"
                  className={`transition-colors ${
                    isActive("/floorlamps")
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  Floor Lamps
                </Link>
              </li>

              <li>
                <Link
                  to="/table-lamps"
                  className={`transition-colors ${
                    isActive("/table-lamps")
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  Table Lamps
                </Link>
              </li>

              <li>
                <Link
                  to="/wall-lighting"
                  className={`transition-colors ${
                    isActive("/wall-lighting")
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  Wall Sconces
                </Link>
              </li>

              <li>
                <Link
                  to="/outdoorlighting"
                  className={`transition-colors ${
                    isActive("/outdoorlighting")
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  Outdoor Lighting
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Contact Info</h3>

            <ul className="space-y-3 text-sm text-white">

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?q=Shop no.16, Ground Floor, Ganga Altus ,Kharadi , Pune - 411014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Shop no.16, Ground Floor, Ganga Altus, Kharadi, Pune - 411014
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:8698198000" className="hover:text-primary">
                  86981 98000
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:citylightskharadi@gmail.com"
                  className="hover:text-primary"
                >
                  citylightskharadi@gmail.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} City Light Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
