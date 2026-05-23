import { Link } from "wouter";
import { SiTelegram, SiWhatsapp, SiInstagram, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white">
                RAZR<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Premium Meta Agency Ad Accounts. Scale your campaigns with higher spending limits, lower restriction risk, and agency-level infrastructure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <SiTelegram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <SiWhatsapp />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <SiInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <SiX />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/plans" className="text-muted-foreground hover:text-primary transition-colors">Plans & Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RAZR Agency. All rights reserved.</p>
          <p>Built for performance.</p>
        </div>
      </div>
    </footer>
  );
}
