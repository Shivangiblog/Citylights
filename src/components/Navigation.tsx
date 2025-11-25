import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(    false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

 const lightingCategories = [
   { name: "Chandeliers", path: "/chandeliers" },
  { name: "Pendant Lights", path: "/pendantlights" },  
  { name: "Floor Lamps", path: "/floorlamps" },
  { name: "Table Lamps", path: "/table-lamps" },
  { name: "Wall lighting", path: "/wall-lighting" },
  { name: "Outdoor Lighting", path: "/outdoorlighting" },
];


  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
  <img
    src="/slider/c-logo.png"      // <-- put your logo file here
    alt="City Lights Pune Logo"
    className="w-40 h-auto object-contain transition-transform group-hover:scale-105"
  />
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Lighting Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  isActive("/lighting") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Lighting
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-large z-50 animate-fade-in">
                  <div className="py-2">
                    {lightingCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                    <div className="border-t border-border mt-2 pt-2">
                      <Link
                        to="/lighting"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                      >
                        View All →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Button variant="default" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Lighting Dropdown */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full text-left text-sm font-medium transition-colors hover:text-primary flex items-center justify-between ${
                  isActive("/lighting") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Lighting
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="mt-2 pl-4 space-y-1 animate-fade-in">
                  {lightingCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      onClick={() => {
                        setIsOpen(false);
                        setIsDropdownOpen(false);
                      }}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

         
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
