import { useEffect, useRef } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { captureAttribution } from "@/lib/utm";
import { trackViewContent, trackLead, trackSubscribe } from "@/lib/pixel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import GlassDock from "@/components/GlassDock";
import LiveActivityFeed from "@/components/LiveActivityFeed";
import StickyUrgencyBar from "@/components/StickyUrgencyBar";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import CursorGlow from "@/components/effects/CursorGlow";
import NoiseTexture from "@/components/effects/NoiseTexture";
import AmbientLights from "@/components/effects/AmbientLights";

import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Solutions from "@/pages/Solutions";
import AgencyAccounts from "@/pages/AgencyAccounts";
import HowItWorks from "@/pages/HowItWorks";
import About from "@/pages/About";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Refund from "@/pages/Refund";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();
  const firstRoute = useRef(true);
  useEffect(() => {
    // Skip initial route — index.html pixel already fires PageView on load
    if (firstRoute.current) {
      firstRoute.current = false;
      return;
    }
    trackViewContent({ path: location });
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="flex-1 relative z-10">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/agency-accounts" component={AgencyAccounts} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/refund" component={Refund} />
          <Route path="/terms" component={Terms} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  // Force dark mode + capture UTM attribution + global WhatsApp click tracking
  useEffect(() => {
    document.documentElement.classList.add("dark");
    captureAttribution();

    // Delegated click listener — fires Pixel events on every WhatsApp button click:
    //  • Lead       → Meta's standard high-intent conversion event
    //  • Subscribe  → fires alongside Lead on the same WhatsApp click
    // 1-second dedupe protects against rapid double-clicks.
    let lastWaClickAt = 0;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const waAnchor = target?.closest?.('a[href*="wa.me/"]') as HTMLAnchorElement | null;
      if (!waAnchor) return;

      const now = Date.now();
      if (now - lastWaClickAt < 1000) return;
      lastWaClickAt = now;

      const label =
        waAnchor.getAttribute('data-cta') ||
        waAnchor.getAttribute('aria-label') ||
        waAnchor.textContent?.trim().slice(0, 60) ||
        'whatsapp-cta';
      const href = waAnchor.href.slice(0, 120);
      const path = window.location.pathname;

      try {
        trackLead({ source: "wa-click", label, href, path });
        trackSubscribe({ source: "wa-click", label, href, path });
      } catch {}
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AmbientLights />
        <NoiseTexture />
        <CursorGlow />
        <LoadingScreen />
        <StickyUrgencyBar />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <WhatsAppFloat />
        <LiveActivityFeed />
        <ExitIntentPopup />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <GlassDock />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
