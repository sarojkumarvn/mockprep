import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Monitor,
  Phone,
  Timer,
  Code,
  MessageSquare,
  Trophy
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";

export default function AIInterview() {
  const navigate = useNavigate();
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [showEndDialog, setShowEndDialog] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (interviewStarted) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [interviewStarted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndInterview = () => {
    setShowEndDialog(true);
  };

  const handleViewAnalysis = () => {
    navigate("/interview-analysis");
  };

  if (!interviewStarted) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="glass-card max-w-md w-full">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
              <Video className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Ready for your AI Interview?</h2>
              <p className="text-muted-foreground">
                We'll conduct a comprehensive technical interview covering your skills and experience.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Duration:</span>
                <Badge variant="secondary">45 minutes</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Type:</span>
                <Badge variant="secondary">Technical Interview</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Level:</span>
                <Badge variant="secondary">Intermediate</Badge>
              </div>
            </div>
            <Button
              onClick={() => setInterviewStarted(true)}
              className="w-full gradient-primary text-white hover:opacity-90"
              size="lg"
            >
              Start Interview
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Timer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            <Timer className="h-4 w-4 mr-2" />
            {formatTime(timeElapsed)}
          </Badge>
          <h1 className="text-2xl font-bold text-foreground">AI Technical Interview</h1>
        </div>
        <Button
          onClick={handleEndInterview}
          variant="destructive"
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          <Phone className="h-4 w-4 mr-2" />
          End Interview
        </Button>
      </div>

      {/* Video Layout */}
      <div className={`grid gap-6 ${showCodeEditor ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'}`}>
        {/* Code Editor (when toggled) */}
        {showCodeEditor && (
          <div className="lg:col-span-2">
            <Card className="glass-card h-[600px]">
              <CardContent className="p-4 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Code Editor</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowCodeEditor(false)}
                  >
                    Close Editor
                  </Button>
                </div>
                <div className="h-[520px] rounded-lg overflow-hidden border border-border">
                  <Editor
                    height="100%"
                    defaultLanguage="javascript"
                    defaultValue="// Write your solution here
function solveProblem() {
  // Your code goes here
  
}"
                    theme="vs-dark"
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                      wordWrap: "on",
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Video Panels */}
        <div className={`space-y-6 ${showCodeEditor ? 'lg:col-span-1' : 'lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6'}`}>
          {/* Candidate Video */}
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="aspect-video bg-gradient-primary rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {isVideoOn ? (
                    <div className="text-white text-center">
                      <Video className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Your Camera</p>
                    </div>
                  ) : (
                    <div className="text-white text-center">
                      <VideoOff className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Camera Off</p>
                    </div>
                  )}
                </div>
                <Badge className="absolute top-2 left-2 bg-green-600 text-white">
                  You
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* AI Interviewer */}
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="aspect-video bg-gradient-secondary rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <MessageSquare className="h-8 w-8" />
                    </div>
                    <p className="text-sm">AI Interviewer</p>
                  </div>
                </div>
                <Badge className="absolute top-2 left-2 bg-purple-600 text-white">
                  AI Interviewer
                </Badge>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black/50 backdrop-blur-sm rounded p-2 text-white text-sm">
                    "Let's start with a coding challenge. Can you implement a function to find the two sum in an array?"
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Controls */}
      <Card className="glass-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-center gap-4">
            <Button
              variant={isVideoOn ? "default" : "destructive"}
              size="lg"
              onClick={() => setIsVideoOn(!isVideoOn)}
              className="rounded-full w-12 h-12 p-0"
            >
              {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </Button>
            
            <Button
              variant={isAudioOn ? "default" : "destructive"}
              size="lg"
              onClick={() => setIsAudioOn(!isAudioOn)}
              className="rounded-full w-12 h-12 p-0"
            >
              {isAudioOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowCodeEditor(!showCodeEditor)}
              className="rounded-full"
            >
              <Code className="h-5 w-5 mr-2" />
              {showCodeEditor ? "Hide" : "Show"} Code Editor
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Monitor className="h-5 w-5 mr-2" />
              Share Screen
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* End Interview Dialog */}
      <Dialog open={showEndDialog} onOpenChange={setShowEndDialog}>
        <DialogContent className="glass-card max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Interview Completed! 🎉</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="text-center space-y-2">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <p className="text-muted-foreground">
                Great job! Your interview performance is being analyzed.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Duration:</span>
                <span className="font-medium">{formatTime(timeElapsed)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Questions Answered:</span>
                <span className="font-medium">8/10</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Coding Challenges:</span>
                <span className="font-medium">3/3</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={() => navigate("/dashboard")}
              >
                Back to Dashboard
              </Button>
              <Button
                onClick={handleViewAnalysis}
                className="gradient-primary text-white hover:opacity-90"
              >
                View Analysis
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}