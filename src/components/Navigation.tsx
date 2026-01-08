import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const [desktopLighting, setDesktopLighting] = useState(false);
  const [desktopSensor, setDesktopSensor] = useState(false);
  const [desktopTrash, setDesktopTrash] = useState(false);

  const [mobileLighting, setMobileLighting] = useState(false);
  const [mobileSensor, setMobileSensor] = useState(false);
  const [mobileTrash, setMobileTrash] = useState(false);

  const lightingRef = useRef<HTMLDivElement>(null);
  const sensorRef = useRef<HTMLDivElement>(null);
  const trashRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  const baseLink =
    "text-sm font-medium text-muted-foreground hover:text-primary transition";

  const activeLink = "text-sm font-medium text-primary";

  const dropdownItem =
    "block px-4 py-2.5 text-sm font-medium hover:bg-primary/10 transition";

  const lightingCategories = [
    { name: "Chandeliers", path: "/chandeliers" },
    { name: "Pendant Lights", path: "/pendantlights" },
    { name: "Floor Lamps", path: "/floorlamps" },
    { name: "Table Lamps", path: "/table-lamps" },
    { name: "Wall Lighting", path: "/wall-lighting" },
    { name: "Outdoor Lighting", path: "/outdoorlighting" },
  ];

  const sensorCategories = [
    { name: "Sensor Can", path: "/sensorcan" },
    { name: "Sensor Pump", path: "/sensor-pump" },
  ];

  const trashCategories = [
    { name: "StepCan", path: "/stepcan" },
    { name: "Incabient", path: "/incabient" },
    { name: "SmallCan", path: "/smallcan" },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!lightingRef.current?.contains(e.target as Node))
        setDesktopLighting(false);
      if (!sensorRef.current?.contains(e.target as Node))
        setDesktopSensor(false);
      if (!trashRef.current?.contains(e.target as Node)) setDesktopTrash(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/slider/c-logo.png"
              alt="City Lights"
              className="w-36 md:w-40 object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className={isActive("/") ? activeLink : baseLink}>
              Home
            </Link>

            <Link
              to="/about"
              className={isActive("/about") ? activeLink : baseLink}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={isActive("/contact") ? activeLink : baseLink}
            >
              Contact
            </Link>

            {/* Lighting */}
            <div className="relative" ref={lightingRef}>
              <button
                onClick={() => setDesktopLighting(!desktopLighting)}
                className={`${baseLink} flex items-center gap-1`}
              >
                Lighting
                <ChevronDown
                  className={`w-4 transition ${
                    desktopLighting ? "rotate-180" : ""
                  }`}
                />
              </button>

              {desktopLighting && (
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50">
                  {lightingCategories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={dropdownItem}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={sensorRef}>
              <button
                onClick={() => setDesktopSensor(!desktopSensor)}
                className={`${baseLink} flex items-center gap-1`}
              >
                SimpleHuman
                <ChevronDown
                  className={`w-4 transition ${
                    desktopSensor ? "rotate-180" : ""
                  }`}
                />
              </button>

              {desktopSensor && (
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50">
                  {sensorCategories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={dropdownItem}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={trashRef}>
              <button
                onClick={() => setDesktopTrash(!desktopTrash)}
                className={`${baseLink} flex items-center gap-1`}
              >
                Trash
                <ChevronDown
                  className={`w-4 transition ${
                    desktopTrash ? "rotate-180" : ""
                  }`}
                />
              </button>

              {desktopTrash && (
                <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50">
                  {trashCategories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={dropdownItem}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t text-sm font-medium">
            <Link
              to="/"
              className="block px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              to="/contact"
              className="block px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="px-4">
              <button
                onClick={() => setMobileLighting(!mobileLighting)}
                className="flex w-full items-center justify-between py-2"
              >
                Lighting
                <ChevronDown
                  className={`w-4 transition ${
                    mobileLighting ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileLighting && (
                <div className="bg-gray-50 border rounded-lg shadow mt-2">
                  {lightingCategories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2.5 text-sm font-medium hover:bg-primary/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4">
              <button
                onClick={() => setMobileSensor(!mobileSensor)}
                className="flex w-full items-center justify-between py-2"
              >
                SimpleHuman
                <ChevronDown
                  className={`w-4 transition ${
                    mobileSensor ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileSensor && (
                <div className="bg-gray-50 border rounded-lg shadow mt-2">
                  {sensorCategories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2.5 text-sm font-medium hover:bg-primary/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4">
              <button
                onClick={() => setMobileTrash(!mobileTrash)}
                className="flex w-full items-center justify-between py-2"
              >
                Trash
                <ChevronDown
                  className={`w-4 transition ${
                    mobileTrash ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileTrash && (
                <div className="bg-gray-50 border rounded-lg shadow mt-2">
                  {trashCategories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2.5 text-sm font-medium hover:bg-primary/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
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
