import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  // FIX: separate dropdowns
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  const lightingCategories = [
    { name: "Chandeliers", path: "/chandeliers" },
    { name: "Pendant Lights", path: "/pendantlights" },
    { name: "Floor Lamps", path: "/floorlamps" },
    { name: "Table Lamps", path: "/table-lamps" },
    { name: "Wall Lighting", path: "/wall-lighting" },
    { name: "Outdoor Lighting", path: "/outdoorlighting" },
  ];

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/slider/c-logo.png"
              alt="City Lights Pune Logo"
              className="w-40 h-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Desktop Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDesktopDropdown(!desktopDropdown)}
                className={`text-sm font-medium flex items-center gap-1 hover:text-primary transition-colors ${
                  isActive("/lighting")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Lighting
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    desktopDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {desktopDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border rounded-lg shadow-lg z-50 animate-fade-in">
                  <div className="py-2">
                    {lightingCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        onClick={() => setDesktopDropdown(false)}
                        className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary"
                      >
                        {category.name}
                      </Link>
                    ))}

                    <div className="border-t mt-2 pt-2">
                      <Link
                        to="/lighting"
                        onClick={() => setDesktopDropdown(false)}
                        className="block px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
                      >
                        View All →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

          
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => {
              setIsOpen(!isOpen);
              setMobileDropdown(false); // reset dropdown
            }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Lighting Dropdown */}
            <div>
              <button
                onClick={() => setMobileDropdown(!mobileDropdown)}
                className="w-full flex items-center justify-between text-sm font-medium"
              >
                Lighting
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdown && (
                <div className="mt-2 pl-4 space-y-1 animate-fade-in">
                  {lightingCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileDropdown(false);
                      }}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      {category.name}
                    </Link>
                  ))}

                  <Link
                    to="/lighting"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdown(false);
                    }}
                    className="block py-2 font-medium text-primary"
                  >
                    View All →
                  </Link>
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
