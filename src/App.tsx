
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
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
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/tecnologias" element={<TechnologiesPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proyectos/:projectId" element={<ProjectDetail />} />
          <Route path="/sobre-mi" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
          <Route path="/terminos-servicio" element={<TermsOfServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
