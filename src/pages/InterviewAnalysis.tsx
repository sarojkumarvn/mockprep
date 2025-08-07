import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";
import {
  Clock,
  Target,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Download,
  Share
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function InterviewAnalysis() {
  const navigate = useNavigate();

  const overallScore = 78;
  const accuracyData = [
    { name: "Correct", value: 78, color: "#10B981" },
    { name: "Incorrect", value: 22, color: "#EF4444" }
  ];

  const skillsData = [
    { skill: "Data Structures", score: 85 },
    { skill: "Algorithms", score: 72 },
    { skill: "System Design", score: 68 },
    { skill: "Problem Solving", score: 82 },
    { skill: "Communication", score: 90 },
    { skill: "Code Quality", score: 75 }
  ];

  const performanceData = [
    { question: "Q1", time: 5, difficulty: "Easy", correct: true },
    { question: "Q2", time: 8, difficulty: "Medium", correct: true },
    { question: "Q3", time: 12, difficulty: "Hard", correct: false },
    { question: "Q4", time: 6, difficulty: "Easy", correct: true },
    { question: "Q5", time: 15, difficulty: "Hard", correct: true },
    { question: "Q6", time: 9, difficulty: "Medium", correct: false },
    { question: "Q7", time: 7, difficulty: "Medium", correct: true },
    { question: "Q8", time: 11, difficulty: "Hard", correct: true }
  ];

  const strengths = [
    "Excellent problem-solving approach",
    "Strong understanding of data structures", 
    "Good communication skills",
    "Efficient code implementation",
    "Quick to understand requirements"
  ];

  const improvements = [
    "Practice more complex algorithms",
    "Improve time complexity analysis",
    "Work on system design fundamentals",
    "Better error handling in code",
    "More thorough testing approach"
  ];

  const recommendations = [
    "Complete the Advanced Algorithms roadmap",
    "Practice system design interviews daily",
    "Take mock interviews weekly",
    "Review time complexity concepts",
    "Join coding challenge communities"
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/ai-interview")}
            className="p-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Interview Analysis</h1>
            <p className="text-muted-foreground">Technical Interview • Dec 7, 2024</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
          <Button variant="outline" size="sm">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overall Score</p>
                <p className="text-2xl font-bold text-foreground">{overallScore}%</p>
              </div>
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/20">
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <Progress value={overallScore} className="mt-3" />
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Questions Answered</p>
                <p className="text-2xl font-bold text-foreground">8/10</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">80% completion rate</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Time Taken</p>
                <p className="text-2xl font-bold text-foreground">42m</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <p className="text-sm text-green-600 mt-2">3 minutes under time</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Accuracy Rate</p>
                <p className="text-2xl font-bold text-foreground">78%</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900/20">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <p className="text-sm text-green-600 mt-2">+12% from last interview</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Accuracy Pie Chart */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={accuracyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {accuracyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm">Correct (78%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-sm">Incorrect (22%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Radar Chart */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Skills Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" className="text-xs" />
                  <PolarRadiusAxis domain={[0, 100]} tick={false} />
                  <Radar
                    name="Score"
                    dataKey="score"
                    stroke="hsl(var(--accent))"
                    fill="hsl(var(--accent))"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Question-wise Performance */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Question-wise Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="question" />
                <YAxis />
                <Tooltip />
                <Bar 
                  dataKey="time" 
                  fill="hsl(var(--accent))" 
                  name="Time (minutes)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {performanceData.map((q, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{q.question}</span>
                  <Badge variant={q.difficulty === "Easy" ? "default" : q.difficulty === "Medium" ? "secondary" : "destructive"}>
                    {q.difficulty}
                  </Badge>
                </div>
                {q.correct ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-600" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Feedback Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Strengths */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <TrendingUp className="h-5 w-5" />
              What You Did Well
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {strengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{strength}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Areas for Improvement */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-600">
              <TrendingDown className="h-5 w-5" />
              Areas to Improve
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {improvements.map((improvement, index) => (
              <div key={index} className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{improvement}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <Target className="h-5 w-5" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm">{rec}</span>
              </div>
            ))}
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-4"
              onClick={() => navigate("/roadmaps")}
            >
              View Recommended Roadmaps
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button 
          onClick={() => navigate("/ai-interview")}
          className="gradient-primary text-white hover:opacity-90"
        >
          Take Another Interview
        </Button>
        <Button 
          variant="outline"
          onClick={() => navigate("/mock-tests")}
        >
          Practice Mock Tests
        </Button>
        <Button 
          variant="outline"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}