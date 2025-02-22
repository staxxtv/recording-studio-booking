
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="/" className="text-2xl font-bold text-white">
              Industreet Studio
            </a>
          </motion.div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-primary">
              Services
            </Button>
            <Button variant="ghost" className="text-white hover:text-primary">
              About
            </Button>
            <Button variant="ghost" className="text-white hover:text-primary">
              Contact
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.location.href = '/login'}
            >
              Staff Login
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button variant="ghost" className="w-full text-white hover:text-primary justify-start">
                Services
              </Button>
              <Button variant="ghost" className="w-full text-white hover:text-primary justify-start">
                About
              </Button>
              <Button variant="ghost" className="w-full text-white hover:text-primary justify-start">
                Contact
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.location.href = '/login'}
              >
                Staff Login
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
