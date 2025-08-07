import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Download,
  Eye,
  Edit,
  Plus,
  Star,
  Check,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

export default function ResumeBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const templates = [
    {
      id: 1,
      name: "Modern Professional",
      description: "Clean and contemporary design perfect for tech roles",
      preview: "bg-gradient-to-br from-blue-50 to-indigo-100",
      popular: true,
      features: ["ATS Friendly", "Clean Layout", "Tech Focus"]
    },
    {
      id: 2,
      name: "Creative Designer",
      description: "Artistic layout ideal for creative professionals",
      preview: "bg-gradient-to-br from-purple-50 to-pink-100",
      popular: false,
      features: ["Visual Appeal", "Portfolio Section", "Color Accents"]
    },
    {
      id: 3,
      name: "Executive Classic",
      description: "Traditional and sophisticated for senior positions",
      preview: "bg-gradient-to-br from-gray-50 to-slate-100",
      popular: true,
      features: ["Professional", "Leadership Focus", "Clean Typography"]
    },
    {
      id: 4,
      name: "Startup Innovator",
      description: "Dynamic design for entrepreneurial roles",
      preview: "bg-gradient-to-br from-green-50 to-emerald-100",
      popular: false,
      features: ["Modern Style", "Skills Highlight", "Achievement Focus"]
    },
    {
      id: 5,
      name: "Academic Scholar",
      description: "Research-focused layout for academic positions",
      preview: "bg-gradient-to-br from-amber-50 to-orange-100",
      popular: false,
      features: ["Publication Ready", "Research Focus", "Detailed Layout"]
    },
    {
      id: 6,
      name: "Minimalist Pro",
      description: "Simple and elegant design that stands out",
      preview: "bg-gradient-to-br from-teal-50 to-cyan-100",
      popular: true,
      features: ["Minimal Design", "Content Focus", "Easy to Scan"]
    }
  ];

  const steps = [
    "Template Selection",
    "Personal Information", 
    "Work Experience",
    "Education & Skills",
    "Final Review"
  ];

  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      portfolio: "",
      summary: ""
    },
    experience: [
      {
        title: "",
        company: "",
        duration: "",
        description: ""
      }
    ],
    education: [
      {
        degree: "",
        school: "",
        year: "",
        gpa: ""
      }
    ],
    skills: {
      technical: [],
      soft: []
    }
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, { title: "", company: "", duration: "", description: "" }]
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, { degree: "", school: "", year: "", gpa: "" }]
    }));
  };

  if (currentStep === 0) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Choose Your Template</h1>
          <p className="text-muted-foreground">Select a professional template to get started</p>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card 
              key={template.id} 
              className={`glass-card cursor-pointer transition-all duration-300 hover:glow-accent ${
                selectedTemplate === template.id ? 'ring-2 ring-accent' : ''
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {template.name}
                      {template.popular && (
                        <Badge variant="secondary" className="text-xs">
                          <Star className="h-3 w-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {template.description}
                    </p>
                  </div>
                  {selectedTemplate === template.id && (
                    <Check className="h-5 w-5 text-accent" />
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Template Preview */}
                <div className={`h-32 rounded-lg ${template.preview} border border-border flex items-center justify-center`}>
                  <FileText className="h-12 w-12 text-muted-foreground/50" />
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1">
                  {template.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowPreview(true);
                    }}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    disabled={selectedTemplate !== template.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (selectedTemplate === template.id) {
                        setCurrentStep(1);
                      }
                    }}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-center">
          <Button 
            onClick={handleNext}
            disabled={!selectedTemplate}
            className="gradient-primary text-white hover:opacity-90"
            size="lg"
          >
            Continue with Selected Template
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Resume Builder</h1>
          <Badge variant="outline">Step {currentStep + 1} of {steps.length}</Badge>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
        
        {/* Step Indicator */}
        <div className="flex justify-between text-sm">
          {steps.map((step, index) => (
            <span 
              key={index}
              className={`${index <= currentStep ? 'text-accent font-medium' : 'text-muted-foreground'}`}
            >
              {step}
            </span>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Panel */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>{steps[currentStep]}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName" 
                      placeholder="John Doe"
                      value={resumeData.personalInfo.fullName}
                      onChange={(e) => setResumeData(prev => ({
                        ...prev,
                        personalInfo: { ...prev.personalInfo, fullName: e.target.value }
                      }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com"
                      value={resumeData.personalInfo.email}
                      onChange={(e) => setResumeData(prev => ({
                        ...prev,
                        personalInfo: { ...prev.personalInfo, email: e.target.value }
                      }))}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      placeholder="+1 (555) 123-4567"
                      value={resumeData.personalInfo.phone}
                      onChange={(e) => setResumeData(prev => ({
                        ...prev,
                        personalInfo: { ...prev.personalInfo, phone: e.target.value }
                      }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location" 
                      placeholder="San Francisco, CA"
                      value={resumeData.personalInfo.location}
                      onChange={(e) => setResumeData(prev => ({
                        ...prev,
                        personalInfo: { ...prev.personalInfo, location: e.target.value }
                      }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea 
                    id="summary" 
                    placeholder="Brief description of your professional background and goals..."
                    rows={4}
                    value={resumeData.personalInfo.summary}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, summary: e.target.value }
                    }))}
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="space-y-4 p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Experience {index + 1}</h3>
                      {index > 0 && (
                        <Button variant="ghost" size="sm" className="text-red-600">
                          Remove
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Job Title</Label>
                        <Input placeholder="Software Engineer" />
                      </div>
                      <div className="space-y-2">
                        <Label>Company</Label>
                        <Input placeholder="Tech Company Inc." />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Duration</Label>
                      <Input placeholder="Jan 2020 - Present" />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea 
                        placeholder="Describe your responsibilities and achievements..."
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  onClick={addExperience}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Another Experience
                </Button>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button 
                onClick={handleNext}
                className="gradient-primary text-white"
              >
                {currentStep === steps.length - 1 ? 'Generate Resume' : 'Next'}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preview Panel */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Live Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-[8.5/11] bg-white border border-border rounded-lg p-6 text-black text-sm">
              <div className="space-y-4">
                <div className="text-center border-b border-gray-200 pb-4">
                  <h1 className="text-xl font-bold">
                    {resumeData.personalInfo.fullName || "Your Name"}
                  </h1>
                  <div className="text-gray-600 mt-2">
                    {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
                    {resumeData.personalInfo.phone && resumeData.personalInfo.email && <span> • </span>}
                    {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
                  </div>
                  {resumeData.personalInfo.location && (
                    <div className="text-gray-600">{resumeData.personalInfo.location}</div>
                  )}
                </div>

                {resumeData.personalInfo.summary && (
                  <div>
                    <h2 className="font-bold text-gray-800 mb-2">PROFESSIONAL SUMMARY</h2>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      {resumeData.personalInfo.summary}
                    </p>
                  </div>
                )}

                <div>
                  <h2 className="font-bold text-gray-800 mb-2">EXPERIENCE</h2>
                  <div className="space-y-3">
                    {resumeData.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-gray-300 pl-3">
                        <h3 className="font-semibold text-gray-800">Job Title</h3>
                        <div className="text-gray-600 text-xs">Company Name • Duration</div>
                        <p className="text-gray-700 text-xs mt-1">
                          Job description and achievements will appear here...
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}