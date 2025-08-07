import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Clock,
  Target,
  Brain,
  FileCheck,
  Calendar,
  Award,
  Activity
} from "lucide-react";

export default function Analytics() {
  const performanceData = [
    { month: 'Jan', interviews: 2, tests: 5, score: 75 },
    { month: 'Feb', interviews: 3, tests: 8, score: 82 },
    { month: 'Mar', interviews: 1, tests: 6, score: 78 },
    { month: 'Apr', interviews: 4, tests: 12, score: 85 },
    { month: 'May', interviews: 2, tests: 9, score: 88 },
    { month: 'Jun', interviews: 3, tests: 7, score: 91 }
  ];

  const skillsData = [
    { skill: 'JavaScript', score: 92, change: '+5%' },
    { skill: 'React', score: 88, change: '+12%' },
    { skill: 'Node.js', score: 76, change: '+3%' },
    { skill: 'System Design', score: 65, change: '+8%' },
    { skill: 'Algorithms', score: 82, change: '+2%' },
    { skill: 'Databases', score: 74, change: '+6%' }
  ];

  const activityData = [
    { type: 'Mock Tests', value: 58, color: '#3B82F6' },
    { type: 'AI Interviews', value: 23, color: '#8B5CF6' },
    { type: 'Study Sessions', value: 19, color: '#10B981' }
  ];

  const weeklyActivity = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 1.8 },
    { day: 'Wed', hours: 3.2 },
    { day: 'Thu', hours: 2.1 },
    { day: 'Fri', hours: 4.0 },
    { day: 'Sat', hours: 2.8 },
    { day: 'Sun', hours: 1.5 }
  ];

  const stats = [
    {
      title: "Total Study Time",
      value: "124h",
      change: "+8%",
      trend: "up",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      title: "Average Score",
      value: "85%", 
      change: "+5%",
      trend: "up",
      icon: Target,
      color: "text-green-600"
    },
    {
      title: "Tests Completed",
      value: "23",
      change: "+12%",
      trend: "up", 
      icon: FileCheck,
      color: "text-purple-600"
    },
    {
      title: "Interview Sessions",
      value: "8",
      change: "-3%",
      trend: "down",
      icon: Brain,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track your learning progress and performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="flex items-center gap-2">
            <Calendar className="h-3 w-3" />
            Last 30 days
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="glass-card hover:glow-accent transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-accent/10 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                {stat.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1 text-red-600" />
                )}
                <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Trend */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Performance Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="score" 
                        stroke="hsl(var(--accent))" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Activity Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Activity Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={activityData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {activityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Progress */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Monthly Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="score" 
                        stroke="hsl(var(--accent))" 
                        fill="hsl(var(--accent) / 0.3)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Tests vs Interviews */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Tests vs Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="tests" fill="hsl(var(--primary))" name="Mock Tests" />
                      <Bar dataKey="interviews" fill="hsl(var(--accent))" name="AI Interviews" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Skills Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillsData.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {skill.skill.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-foreground">{skill.skill}</span>
                          <span className="text-sm font-medium">{skill.score}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-500" 
                            style={{ width: `${skill.score}%` }}
                          />
                        </div>
                      </div>
                      <Badge 
                        variant={skill.change.startsWith('+') ? 'default' : 'destructive'}
                        className="ml-2"
                      >
                        {skill.change}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Weekly Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyActivity}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar 
                      dataKey="hours" 
                      fill="hsl(var(--accent))" 
                      name="Study Hours"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button className="gradient-primary text-white hover:opacity-90">
          Download Report
        </Button>
        <Button variant="outline">
          Share Analytics
        </Button>
        <Button variant="outline">
          Set Goals
        </Button>
      </div>
    </div>
  );
}