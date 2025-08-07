import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import {
  FileCheck,
  Clock,
  Trophy,
  Target,
  Play,
  Settings,
  BarChart3,
  CheckCircle,
  XCircle,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MockTests() {
  const navigate = useNavigate();
  const [showConfigDialog, setShowConfigDialog] = useState(false);
  const [showTestDialog, setShowTestDialog] = useState(false);
  const [showResultsDialog, setShowResultsDialog] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const [testConfig, setTestConfig] = useState({
    topic: "",
    difficulty: "",
    questions: "",
    duration: ""
  });

  const recentTests = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      score: 85,
      date: "2 hours ago",
      questions: 20,
      duration: "30 min",
      topic: "JavaScript"
    },
    {
      id: 2,
      title: "React Components Test",
      score: 92,
      date: "1 day ago", 
      questions: 15,
      duration: "25 min",
      topic: "React"
    },
    {
      id: 3,
      title: "Data Structures Quiz",
      score: 78,
      date: "3 days ago",
      questions: 25,
      duration: "45 min",
      topic: "DSA"
    }
  ];

  const mockQuestions = [
    {
      id: 1,
      question: "What is the purpose of the useState hook in React?",
      options: [
        "To manage component state",
        "To handle side effects", 
        "To optimize performance",
        "To create components"
      ],
      correct: 0
    },
    {
      id: 2,
      question: "Which of the following is NOT a JavaScript data type?",
      options: [
        "String",
        "Boolean",
        "Float",
        "Symbol"
      ],
      correct: 2
    },
    {
      id: 3,
      question: "What does the 'key' prop do in React lists?",
      options: [
        "Encrypts the data",
        "Helps React identify which items have changed",
        "Styles the component",
        "Handles events"
      ],
      correct: 1
    }
  ];

  const startNewTest = () => {
    setShowConfigDialog(true);
  };

  const handleStartTest = () => {
    setShowConfigDialog(false);
    setShowTestDialog(true);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    // Start timer logic here
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleSubmitTest = () => {
    setShowTestDialog(false);
    setShowResultsDialog(true);
  };

  const calculateResults = () => {
    const totalQuestions = mockQuestions.length;
    const correctAnswers = mockQuestions.filter((q, index) => 
      selectedAnswers[index] && parseInt(selectedAnswers[index]) === q.correct
    ).length;
    const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
    
    return {
      totalQuestions,
      correctAnswers,
      accuracy,
      timeSpent: 1800 - timeRemaining
    };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const results = showResultsDialog ? calculateResults() : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mock Tests</h1>
          <p className="text-muted-foreground">Test your knowledge and track your progress</p>
        </div>
        <Button 
          onClick={startNewTest}
          className="gradient-primary text-white hover:opacity-90"
        >
          <Play className="h-4 w-4 mr-2" />
          New Mock Test
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tests Taken</p>
                <p className="text-2xl font-bold text-foreground">23</p>
              </div>
              <FileCheck className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Score</p>
                <p className="text-2xl font-bold text-foreground">85%</p>
              </div>
              <Trophy className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Time Spent</p>
                <p className="text-2xl font-bold text-foreground">12h</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Best Score</p>
                <p className="text-2xl font-bold text-foreground">98%</p>
              </div>
              <Target className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Tests */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Recent Test Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTests.map((test) => (
              <div key={test.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <FileCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{test.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{test.questions} questions</span>
                      <span>{test.duration}</span>
                      <span>{test.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={test.score >= 90 ? "default" : test.score >= 70 ? "secondary" : "destructive"}>
                    {test.score}%
                  </Badge>
                  <Button variant="ghost" size="sm">
                    View Details <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Test Configuration Dialog */}
      <Dialog open={showConfigDialog} onOpenChange={setShowConfigDialog}>
        <DialogContent className="glass-card max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Configure Mock Test
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="topic">Topic</Label>
              <Select value={testConfig.topic} onValueChange={(value) => setTestConfig(prev => ({...prev, topic: value}))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="nodejs">Node.js</SelectItem>
                  <SelectItem value="dsa">Data Structures & Algorithms</SelectItem>
                  <SelectItem value="system-design">System Design</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulty Level</Label>
              <Select value={testConfig.difficulty} onValueChange={(value) => setTestConfig(prev => ({...prev, difficulty: value}))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="questions">Number of Questions</Label>
              <Select value={testConfig.questions} onValueChange={(value) => setTestConfig(prev => ({...prev, questions: value}))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select number of questions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 Questions</SelectItem>
                  <SelectItem value="20">20 Questions</SelectItem>
                  <SelectItem value="30">30 Questions</SelectItem>
                  <SelectItem value="50">50 Questions</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Time Duration</Label>
              <Select value={testConfig.duration} onValueChange={(value) => setTestConfig(prev => ({...prev, duration: value}))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">60 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                variant="outline" 
                onClick={() => setShowConfigDialog(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleStartTest}
                disabled={!testConfig.topic || !testConfig.difficulty || !testConfig.questions || !testConfig.duration}
                className="flex-1 gradient-primary text-white"
              >
                Start Test
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Test Taking Dialog */}
      <Dialog open={showTestDialog} onOpenChange={setShowTestDialog}>
        <DialogContent className="glass-card max-w-2xl">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>Question {currentQuestion + 1} of {mockQuestions.length}</DialogTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                <Clock className="h-4 w-4 mr-2" />
                {formatTime(timeRemaining)}
              </Badge>
            </div>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <Progress value={((currentQuestion + 1) / mockQuestions.length) * 100} className="h-2" />
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{mockQuestions[currentQuestion]?.question}</h3>
              <div className="space-y-2">
                {mockQuestions[currentQuestion]?.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswers[currentQuestion] === index.toString() ? "default" : "outline"}
                    className="w-full justify-start text-left p-4 h-auto"
                    onClick={() => handleAnswerSelect(currentQuestion, index.toString())}
                  >
                    <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              
              {currentQuestion === mockQuestions.length - 1 ? (
                <Button 
                  onClick={handleSubmitTest}
                  className="gradient-primary text-white"
                >
                  Submit Test
                </Button>
              ) : (
                <Button
                  onClick={() => setCurrentQuestion(Math.min(mockQuestions.length - 1, currentQuestion + 1))}
                  className="gradient-primary text-white"
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Results Dialog */}
      <Dialog open={showResultsDialog} onOpenChange={setShowResultsDialog}>
        <DialogContent className="glass-card max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Test Completed! 🎉</DialogTitle>
          </DialogHeader>
          {results && (
            <div className="space-y-6 py-4">
              <div className="text-center space-y-2">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{results.accuracy}%</h3>
                <p className="text-muted-foreground">Overall Score</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Correct Answers:</span>
                  <span className="font-medium">{results.correctAnswers}/{results.totalQuestions}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Time Spent:</span>
                  <span className="font-medium">{formatTime(results.timeSpent)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Accuracy:</span>
                  <span className="font-medium">{results.accuracy}%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowResultsDialog(false);
                    navigate("/analytics");
                  }}
                >
                  View Analytics
                </Button>
                <Button
                  onClick={() => {
                    setShowResultsDialog(false);
                    startNewTest();
                  }}
                  className="gradient-primary text-white"
                >
                  Take Another
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}