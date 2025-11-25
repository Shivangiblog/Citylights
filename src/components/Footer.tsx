import { Link } from "react-router-dom";
import { Lightbulb, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
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
    // alt="City Light Store Logo"
    className="w-8 h-8 object-contain"
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
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/lighting" className="text-muted-foreground hover:text-primary transition-colors">
                  Lighting
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Chandeliers</li>
              <li>Pendant Lights</li>
              <li>Floor Lamps</li>
              <li>Table Lamps</li>
              <li>Wall Sconces</li>
              <li>Outdoor Lighting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Contact Info</h3>
            <ul className="space-y-3 text-sm">

              {/* ⭐ CLICK TO OPEN GOOGLE MAPS */}
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?q=Shop no.16, Ground Floor, Ganga Altus ,Kharadi , Pune - 411014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Shop no.16, Ground Floor, Ganga Altus, Kharadi, Pune - 411014
                </a>
              </li>

              {/* ⭐ CLICK TO CALL */}
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:8698198000"
                  className="hover:text-primary transition-colors"
                >
                  86981 98000
                </a>
              </li>

              {/* ⭐ CLICK TO EMAIL */}
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:uidphilips@gmail.com"
                  className="hover:text-primary transition-colors"
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
