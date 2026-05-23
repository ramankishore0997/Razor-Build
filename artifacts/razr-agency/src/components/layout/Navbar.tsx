import { Link, useLocation } from "wouter";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Solutions", href: "/solutions" },
  { name: "Process", href: "/how-it-works" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl h-14 shadow-lg shadow-black/50"
            : "bg-transparent h-16 md:h-20 border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group relative">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
              RAZR<span className="text-primary group-hover:animate-pulse">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-xs xl:text-sm font-medium tracking-wide uppercase transition-colors hover:text-white ${
                  location === link.href ? "text-white" : "text-muted-foreground"
                }`}
              >
                {link.name}
                {location === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-primary shadow-[0_0_10px_rgba(0,102,255,0.8)]"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_8px_rgba(0,102,255,0.8)]"></span>
              </span>
              <span className="text-muted-foreground">Team Online</span>
            </div>
            <Link
              href="/contact"
              className="text-sm font-bold bg-white text-black px-5 py-2.5 hover:bg-gray-200 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-black uppercase tracking-tight py-4 border-b border-white/5 transition-colors ${
                      location === link.href ? "text-primary" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-8 text-center text-lg font-bold bg-white text-black py-4 hover:bg-gray-200 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
