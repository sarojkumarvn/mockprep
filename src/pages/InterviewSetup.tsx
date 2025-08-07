import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Video,
  Clock,
  Brain,
  BookOpen,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function InterviewSetup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    topic: "",
    level: "",
    duration: "",
    type: ""
  });
  const [showInstructions, setShowInstructions] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const topics = [
    "JavaScript Fundamentals",
    "React/Frontend Development", 
    "Node.js/Backend Development",
    "System Design",
    "Data Structures & Algorithms",
    "Python Programming",
    "Database Design",
    "DevOps & Cloud"
  ];

  const levels = [
    { value: "junior", label: "Junior (0-2 years)" },
    { value: "mid", label: "Mid-level (2-5 years)" },
    { value: "senior", label: "Senior (5+ years)" }
  ];

  const durations = [
    { value: "30", label: "30 minutes" },
    { value: "45", label: "45 minutes" },
    { value: "60", label: "60 minutes" }
  ];

  const interviewTypes = [
    { value: "technical", label: "Technical Interview" },
    { value: "behavioral", label: "Behavioral Interview" },
    { value: "mixed", label: "Mixed (Technical + Behavioral)" }
  ];

  const isFormValid = formData.topic && formData.level && formData.duration && formData.type;

  const handleStartInterview = () => {
    if (!isFormValid) return;
    setShowInstructions(true);
  };

  const handleProceedToInterview = () => {
    if (!agreedToTerms) return;
    navigate("/ai-interview", { 
      state: { 
        setupData: formData,
        isFullScreen: true 
      } 
    });
  };

  if (showInstructions) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Card className="glass-card max-w-2xl w-full">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Interview Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Camera & Microphone</h4>
                  <p className="text-sm text-muted-foreground">Ensure your camera and microphone are working properly for the best experience.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Stable Internet</h4>
                  <p className="text-sm text-muted-foreground">Make sure you have a stable internet connection throughout the interview.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Quiet Environment</h4>
                  <p className="text-sm text-muted-foreground">Find a quiet space where you won't be interrupted during the interview.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Code Editor</h4>
                  <p className="text-sm text-muted-foreground">You can open the code editor during technical questions when needed.</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium text-foreground mb-2">Interview Details:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Topic:</span>
                  <p className="font-medium">{formData.topic}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Level:</span>
                  <p className="font-medium">{levels.find(l => l.value === formData.level)?.label}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Duration:</span>
                  <p className="font-medium">{formData.duration} minutes</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Type:</span>
                  <p className="font-medium">{interviewTypes.find(t => t.value === formData.type)?.label}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4 bg-accent/10 rounded-lg">
              <Checkbox 
                id="terms" 
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm">
                I understand the instructions and agree to proceed with the interview
              </Label>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowInstructions(false)}
                className="flex-1"
              >
                Back to Setup
              </Button>
              <Button
                onClick={handleProceedToInterview}
                disabled={!agreedToTerms}
                className="flex-1 gradient-primary text-white hover:opacity-90"
              >
                Start Interview
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
          <Video className="h-10 w-10 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Interview Setup</h1>
          <p className="text-muted-foreground mt-2">
            Configure your interview preferences to get the most relevant questions
          </p>
        </div>
      </div>

      {/* Setup Form */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Interview Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Topic Selection */}
            <div className="space-y-2">
              <Label htmlFor="topic">Interview Topic</Label>
              <Select value={formData.topic} onValueChange={(value) => setFormData({...formData, topic: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((topic) => (
                    <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Experience Level */}
            <div className="space-y-2">
              <Label htmlFor="level">Experience Level</Label>
              <Select value={formData.level} onValueChange={(value) => setFormData({...formData, level: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <Label htmlFor="duration">Interview Duration</Label>
              <Select value={formData.duration} onValueChange={(value) => setFormData({...formData, duration: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  {durations.map((duration) => (
                    <SelectItem key={duration.value} value={duration.value}>{duration.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Interview Type */}
            <div className="space-y-2">
              <Label htmlFor="type">Interview Type</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select interview type" />
                </SelectTrigger>
                <SelectContent>
                  {interviewTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Preview Card */}
          {isFormValid && (
            <Card className="bg-muted/50 border-accent/20">
              <CardContent className="p-4">
                <h4 className="font-medium text-foreground mb-3">Interview Preview</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <div>
                      <p className="text-muted-foreground">Topic</p>
                      <p className="font-medium">{formData.topic}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="h-4 w-4 text-accent" />
                    <div>
                      <p className="text-muted-foreground">Level</p>
                      <p className="font-medium">{levels.find(l => l.value === formData.level)?.label}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent" />
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium">{formData.duration} min</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-accent" />
                    <div>
                      <p className="text-muted-foreground">Type</p>
                      <p className="font-medium">{interviewTypes.find(t => t.value === formData.type)?.label}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => navigate("/dashboard")}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleStartInterview}
              disabled={!isFormValid}
              className="flex-1 gradient-primary text-white hover:opacity-90"
            >
              Continue to Instructions
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}