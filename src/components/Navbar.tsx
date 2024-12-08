import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl font-bold">
              Ivy Dream Management
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Services
                  {isServicesOpen && (
                    <div className="absolute left-0 w-48 mt-2 py-2 bg-black/90 backdrop-blur-sm rounded-md shadow-xl">
                      <Link href="/services/non-profits" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-900/50">
                        For Non-Profits
                      </Link>
                      <Link href="/services/enterprise" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-900/50">
                        For Enterprise
                      </Link>
                      <Link href="/services/core" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-900/50">
                        Core Services
                      </Link>
                    </div>
                  )}
                </button>
              </div>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
