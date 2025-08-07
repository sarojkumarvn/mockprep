import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";

interface BlankPageProps {
  title: string;
  description: string;
}

export default function BlankPage({ title, description }: BlankPageProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // Get page name from pathname
  const pageName = location.pathname.split('/')[1].replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="glass-card max-w-md w-full">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
            <Construction className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {title || `${pageName} Coming Soon`}
            </h2>
            <p className="text-muted-foreground">
              {description || `The ${pageName.toLowerCase()} section is currently under development. Check back soon for updates!`}
            </p>
          </div>
          <Button
            onClick={() => navigate("/dashboard")}
            variant="outline"
            className="w-full"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

// Individual page components
export const StudyHub = () => (
  <BlankPage 
    title="Study Hub" 
    description="Your centralized learning space with courses, tutorials, and study materials will be available here soon."
  />
);

export const Notes = () => (
  <BlankPage 
    title="Notes" 
    description="Create, organize, and manage your study notes and important information here."
  />
);

export const PDFTools = () => (
  <BlankPage 
    title="PDF Tools" 
    description="Upload, edit, and manage your PDF documents and study materials."
  />
);

export const Community = () => (
  <BlankPage 
    title="Community" 
    description="Connect with other learners, join discussions, and share your knowledge."
  />
);

export const Blog = () => (
  <BlankPage 
    title="Blog" 
    description="Read the latest articles, tips, and insights about career development and learning."
  />
);

export const Jobs = () => (
  <BlankPage 
    title="Jobs" 
    description="Discover job opportunities that match your skills and career goals."
  />
);

export const Documentation = () => (
  <BlankPage 
    title="Documentation" 
    description="Access comprehensive guides, API documentation, and help resources."
  />
);

export const Achievements = () => (
  <BlankPage 
    title="Achievements" 
    description="Track your accomplishments, badges, and milestones in your learning journey."
  />
);

export const Settings = () => (
  <BlankPage 
    title="Settings" 
    description="Customize your account preferences, notifications, and privacy settings."
  />
);