import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import MouseGlow from "@/components/MouseGlow";
import NoiseOverlay from "@/components/NoiseOverlay";
import WhatsAppFloat from "@/components/WhatsAppFloat";

import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Solutions from "@/pages/Solutions";
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
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="flex-1 relative z-10">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/solutions" component={Solutions} />
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
  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LoadingScreen />
        <MouseGlow />
        <NoiseOverlay />
        <CustomCursor />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <WhatsAppFloat />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
