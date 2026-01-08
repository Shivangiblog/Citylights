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

          {/* Brand */}
          <div>
            <img src="/slider/c-logo.png" className="w-10 h-10 mb-4" />
            <p className="text-muted-foreground text-sm">
              Illuminating spaces with premium lighting solutions since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/lighting", label: "Lighting" },
                { path: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`transition-colors ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Categories</h3>
            <ul className="space-y-2 text-sm">
              {[
                { path: "/chandeliers", label: "Chandeliers" },
                { path: "/pendantlights", label: "Pendant Lights" },
                { path: "/floorlamps", label: "Floor Lamps" },
                { path: "/table-lamps", label: "Table Lamps" },
                { path: "/wall-lighting", label: "Wall Sconces" },
                { path: "/outdoorlighting", label: "Outdoor Lighting" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`transition-colors ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Contact Info</h3>
            <ul className="space-y-3 text-sm text-white">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <a
                  href="https://www.google.com/maps?q=Shop no.16, Ground Floor, Ganga Altus ,Kharadi , Pune - 411014"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  Shop no.16, Ground Floor, Ganga Altus, Kharadi, Pune - 411014
                </a>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:8698198000" className="hover:text-primary">
                  86981 98000
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4" />
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

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} City Light Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
