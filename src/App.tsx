import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
const Index = React.lazy(() => import("./pages/Index"));
const About = React.lazy(() => import("./pages/About"));
const Lighting = React.lazy(() => import("./pages/Lighting"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
import { Layout } from "lucide-react";
import WhatsAppButton from "./components/WhatsAppButton";
import Chandeliers from "./components/chandeliers";
import InCabinet from "./components/Incabient";

import FloorLampsPage from "./components/floorlamps";
import StepcanPage from "./components/stepcan";
import Pendantlights from "./components/pendantlights";
import TableLamps from "./components/table-lamps";
import Walllighting from "./components/wall-lighting";
import OutdoorLightingPage from "./components/outdoorlighting";
import SensorCanPage from "./components/sensorcan";
import SensorPumpPage from "./components/Sensor-pump";
import SmallCanPage from "./components/SmallCan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WhatsAppButton />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/lighting" element={<Lighting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/stepcan" element={<StepcanPage />} />
            <Route path="/chandeliers" element={<Chandeliers />} />
            <Route path="/incabient" element={<InCabinet />} />
            <Route path="/smallCan" element={<SmallCanPage />} />
            <Route path="/pendantlights" element={<Pendantlights />} />
            <Route path="/floorlamps" element={<FloorLampsPage />} />
            <Route path="/table-lamps" element={<TableLamps />} />
            <Route path="/wall-lighting" element={<Walllighting />} />
            <Route path="/outdoorlighting" element={<OutdoorLightingPage />} />
            <Route path="/sensorcan" element={<SensorCanPage />} />
            <Route path="/sensor-pump" element={<SensorPumpPage />} />
          </Routes>
        </Suspense>
        <Layout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
