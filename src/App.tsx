import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Roadmaps from "./pages/Roadmaps";
import MockTests from "./pages/MockTests";
import AIInterview from "./pages/AIInterview";
import InterviewAnalysis from "./pages/InterviewAnalysis";
import Analytics from "./pages/Analytics";
import ResumeBuilder from "./pages/ResumeBuilder";
import InterviewSetup from "./pages/InterviewSetup";
import {
  StudyHub,
  Notes,
  PDFTools,
  Community,
  Blog,
  Jobs,
  Documentation,
  Achievements,
  Settings
} from "./pages/BlankPages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/roadmaps" element={<Roadmaps />} />
              <Route path="/mock-tests" element={<MockTests />} />
            <Route path="/interview-setup" element={<InterviewSetup />} />
            <Route path="/ai-interview" element={<AIInterview />} />
              <Route path="/interview-analysis" element={<InterviewAnalysis />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/study-hub" element={<StudyHub />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/pdf-tools" element={<PDFTools />} />
              <Route path="/community" element={<Community />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;