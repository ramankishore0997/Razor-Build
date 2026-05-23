import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">
                Stay Ahead of<br/>the Curve.
              </h2>
              <p className="text-muted-foreground text-lg max-w-md mb-8">
                Join our newsletter for weekly insights on Meta policy changes, scaling strategies, and agency infrastructure.
              </p>
              <div className="flex items-center gap-2 max-w-md border-b border-white/20 pb-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent border-none outline-none flex-1 text-white placeholder:text-muted-foreground"
                />
                <button className="text-white hover:text-primary transition-colors p-2">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs">Platform</h4>
              <Link href="/features" className="text-muted-foreground hover:text-white transition-colors text-sm">Features</Link>
              <Link href="/solutions" className="text-muted-foreground hover:text-white transition-colors text-sm">Solutions</Link>
              <Link href="/plans" className="text-muted-foreground hover:text-white transition-colors text-sm">Pricing</Link>
              <Link href="/how-it-works" className="text-muted-foreground hover:text-white transition-colors text-sm">Process</Link>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs">Company</h4>
              <Link href="/about" className="text-muted-foreground hover:text-white transition-colors text-sm">About Us</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-white transition-colors text-sm">Contact</Link>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">Careers</a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">Press</a>
            </div>
            <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs">Legal</h4>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">Terms of Service</a>
              <Link href="/faq" className="text-muted-foreground hover:text-white transition-colors text-sm">FAQ</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-white/5 pt-16">
          <div className="w-full text-center">
            <h1 className="text-[12vw] md:text-[15vw] font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/10 select-none">
              RAZR
            </h1>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            <span>&copy; {new Date().getFullYear()} RAZR AGENCY</span>
            <span className="mt-4 md:mt-0 text-primary">PERFORMANCE. WITHOUT COMPROMISE.</span>
            <span className="mt-4 md:mt-0">SAN FRANCISCO • DUBAI • LONDON</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
