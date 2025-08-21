import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieBanner from "@/components/CookieBanner";
import Index from "./pages/Index";
import Sluzby from "./pages/Sluzby";
import Webinare from "./pages/Webinare";
import Cennik from "./pages/Cennik";
import Clanky from "./pages/Clanky";
import Novinky from "./pages/Novinky";
import ONas from "./pages/ONas";
import Kontakt from "./pages/Kontakt";
import ThankYou from "./pages/ThankYou";
import PolitikaCookies from "./pages/PolitikaCookies";
import GDPR from "./pages/GDPR";
import ObchodnePodmienky from "./pages/ObchodnePodmienky";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sluzby" element={<Sluzby />} />
          <Route path="/webinare" element={<Webinare />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/clanky" element={<Clanky />} />
          <Route path="/novinky" element={<Novinky />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/dakujeme" element={<ThankYou />} />
          <Route path="/politika-cookies" element={<PolitikaCookies />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/obchodne-podmienky" element={<ObchodnePodmienky />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
