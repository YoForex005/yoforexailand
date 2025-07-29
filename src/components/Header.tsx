import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap, Globe, BarChart3 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', to: '/features', },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Resources', to: '/resources' },
  ];


  const navigate = useNavigate()

  const handleMobileNavigation = (to: string) => {
    navigate(to)
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800/50'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={"/"}>
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <Zap className="w-8 h-8 text-primary-400" />
                <motion.div
                  className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-sm"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                YoForex AI
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link to={item.to}>
                <motion.a
                  key={item.name}
                  // href={item.href}
                  // onClick={item.onClick}
                  className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 relative group cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to={"/contact-support"}>
              <motion.button
                // onClick={onNavigateToContactSupport}
                className="text-neutral-300 hover:text-white transition-colors duration-200"
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
            </Link>
            <Link to={"/contact-support"}>
              <motion.button
                // onClick={onNavigateToContactSupport}
                className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-medium relative overflow-hidden group"
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-neutral-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  // href={item.href}
                  // onClick={(e) => {
                  //   if (item.onClick) {
                  //     e.preventDefault();
                  //     item.onClick();
                  //   }
                  //   setIsMobileMenuOpen(false);
                  // }}
                  className="block text-neutral-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => handleMobileNavigation("/contact-support")}
                  className="w-full text-left text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleMobileNavigation("/contact-support")}
                  className="w-full bg-gradient-primary text-white px-6 py-2 rounded-lg font-medium"
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;