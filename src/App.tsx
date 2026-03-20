import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import PorQueArrowpoint from "./pages/PorQueArrowpoint.tsx";
import FinanceAsAService from "./pages/FinanceAsAService.tsx";
import NHByArrowpoint from "./pages/NHByArrowpoint.tsx";
import CasosDeExito from "./pages/CasosDeExito.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/por-que-arrowpoint" element={<PorQueArrowpoint />} />
          <Route path="/finance-as-a-service" element={<FinanceAsAService />} />
          <Route path="/nh-by-arrowpoint" element={<NHByArrowpoint />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
