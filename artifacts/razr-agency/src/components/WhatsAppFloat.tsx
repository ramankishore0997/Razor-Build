import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_NUMBER = "917065339146";
const PREFILL = "Hi RAZR, I'd like to know more about your Meta & Google Ad Accounts.";

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] flex items-center justify-center gap-3 w-14 h-14 md:w-auto md:h-auto md:px-5 md:py-4 rounded-full bg-[#25D366] text-white font-bold uppercase tracking-widest text-sm shadow-[0_10px_40px_rgba(37,211,102,0.5)] hover:scale-105 hover:shadow-[0_15px_50px_rgba(37,211,102,0.7)] transition-all duration-300 group pb-[env(safe-area-inset-bottom)]"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <SiWhatsapp className="text-2xl group-hover:rotate-12 transition-transform" />
      <span className="hidden md:inline">Chat with us</span>
    </a>
  );
}
