import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Lighting from "./pages/Lighting";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Layout } from "lucide-react";
import WhatsAppButton from "./components/WhatsAppButton";
import Chandeliers from "./components/chandeliers";

import FloorLampsPage from "./components/floorlamps";

import Pendantlights from "./components/pendantlights";
import TableLamps from "./components/table-lamps";
import Walllighting from "./components/wall-lighting";
import OutdoorLightingPage from "./components/outdoorlighting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WhatsAppButton />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/chandeliers" element={<Chandeliers/>} />
          <Route path="/pendantlights" element={<Pendantlights/>} />
          <Route path="/floorlamps" element={<FloorLampsPage />} />
          <Route path="/table-lamps" element={<TableLamps />} />
          <Route path="/wall-lighting" element={<Walllighting/>} />
          <Route path="/outdoorlighting" element={<OutdoorLightingPage/>} />
        </Routes>
        <Layout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
