import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Journey from "./pages/Journey";
import LoveAboutYou from "./pages/LoveAboutYou";
import OurStory from "./pages/OurStory";
import PhotoGallery from "./pages/PhotoGallery";
import Intentions from "./pages/Intentions";
import Nicknames from "./pages/Nicknames";
import OurFuture from "./pages/OurFuture";
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
          <Route path="/journey" element={<Journey />} />
          <Route path="/love-about-you" element={<LoveAboutYou />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/intentions" element={<Intentions />} />
          <Route path="/nicknames" element={<Nicknames />} />
          <Route path="/our-future" element={<OurFuture />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
