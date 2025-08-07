import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  TrendingUp, 
  Trophy, 
  Users,
  ArrowRight,
  Play,
  Calendar,
  Target
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Mock Tests Taken",
      value: "23",
      change: "+12% from last month",
      trend: "up",
      icon: Trophy,
      color: "text-blue-600"
    },
    {
      title: "AI Interviews",
      value: "8", 
      change: "-5% from last month",
      trend: "down",
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Study Hours",
      value: "124",
      change: "+8% from last month", 
      trend: "up",
      icon: Clock,
      color: "text-green-600"
    },
    {
      title: "Achievements",
      value: "15",
      change: "-3% from last month",
      trend: "down", 
      icon: Target,
      color: "text-orange-600"
    }
  ];

  const recentActivity = [
    {
      title: "JavaScript Fundamentals Quiz",
      time: "2 hours ago",
      score: "85%",
      icon: "📝"
    },
    {
      title: "Mock Technical Interview", 
      time: "1 day ago",
      score: "92%",
      icon: "🎯"
    },
    {
      title: "React Components Guide",
      time: "2 days ago", 
      score: "Completed",
      icon: "📚"
    }
  ];

  const upcomingTasks = [
    {
      title: "Complete System Design Mock",
      due: "Today",
      priority: "high"
    },
    {
      title: "Review Algorithm Problems",
      due: "Tomorrow", 
      priority: "medium"
    },
    {
      title: "Finish React Roadmap",
      due: "This Week",
      priority: "low"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, John!</h1>
          <p className="text-muted-foreground mt-1">Ready to continue your career journey?</p>
        </div>
        <Button 
          onClick={() => navigate("/mock-tests")}
          className="gradient-primary text-white hover:opacity-90"
        >
          Take Mock Test
        </Button>
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
                <TrendingUp className={`h-4 w-4 mr-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{activity.icon}</span>
                  <div>
                    <p className="font-medium text-foreground">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-accent">{activity.score}</span>
              </div>
            ))}
            <Button variant="ghost" className="w-full mt-4" onClick={() => navigate("/analytics")}>
              View All Activity <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Upcoming Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    task.priority === 'high' ? 'bg-red-500' : 
                    task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div>
                    <p className="font-medium text-foreground">{task.title}</p>
                    <p className="text-sm text-muted-foreground">{task.due}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
            <Button 
              variant="ghost" 
              className="w-full mt-4"
              onClick={() => navigate("/roadmaps")}
            >
              View All Tasks <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2 hover:bg-accent/10 border-accent/20"
              onClick={() => navigate("/interview-setup")}
            >
              <Play className="h-5 w-5" />
              Start AI Interview
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2 hover:bg-accent/10 border-accent/20"
              onClick={() => navigate("/mock-tests")}
            >
              <Trophy className="h-5 w-5" />
              Take Mock Test
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2 hover:bg-accent/10 border-accent/20"
              onClick={() => navigate("/roadmaps")}
            >
              <TrendingUp className="h-5 w-5" />
              View Roadmaps
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}