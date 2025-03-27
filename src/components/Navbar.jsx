import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Navbar = () => {
  const [MobileOpen, setMobileOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileOpen(!MobileOpen);
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">viteR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                {/* Replace <a> with Link */}
                <Link to={item.href} className="text-white hover:text-orange-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <Link to="/signup" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
              Create an account
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {MobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {MobileOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href} className="text-white hover:text-orange-500">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <Link to="/signup" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
