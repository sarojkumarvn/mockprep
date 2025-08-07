import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  MapPin,
  Search,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  Play,
  Bookmark,
  Users,
  Calendar
} from "lucide-react";

export default function Roadmaps() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const roadmaps = [
    {
      id: 1,
      title: "Frontend Developer Roadmap",
      description: "Complete guide to becoming a modern frontend developer",
      progress: 65,
      duration: "3-6 months",
      difficulty: "Intermediate",
      students: 12500,
      rating: 4.8,
      tags: ["React", "JavaScript", "CSS", "HTML"],
      trending: true,
      completed: false,
      favorite: true
    },
    {
      id: 2,
      title: "Backend Developer Roadmap", 
      description: "Master server-side development and APIs",
      progress: 30,
      duration: "4-8 months",
      difficulty: "Advanced",
      students: 9800,
      rating: 4.7,
      tags: ["Node.js", "Database", "API", "Security"],
      trending: true,
      completed: false,
      favorite: false
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      description: "Essential DSA concepts for technical interviews",
      progress: 100,
      duration: "2-4 months", 
      difficulty: "Intermediate",
      students: 15200,
      rating: 4.9,
      tags: ["Algorithms", "Problem Solving", "Arrays", "Trees"],
      trending: false,
      completed: true,
      favorite: true
    },
    {
      id: 4,
      title: "System Design Fundamentals",
      description: "Learn to design scalable distributed systems",
      progress: 20,
      duration: "6-12 months",
      difficulty: "Advanced",
      students: 7600,
      rating: 4.6,
      tags: ["Architecture", "Scalability", "Database", "Caching"],
      trending: true,
      completed: false,
      favorite: false
    },
    {
      id: 5,
      title: "React Native Mobile Development",
      description: "Build cross-platform mobile applications",
      progress: 45,
      duration: "3-5 months",
      difficulty: "Intermediate",
      students: 5400,
      rating: 4.5,
      tags: ["React Native", "Mobile", "iOS", "Android"],
      trending: false,
      completed: false,
      favorite: true
    },
    {
      id: 6,
      title: "DevOps Engineering Path",
      description: "Infrastructure, CI/CD, and deployment automation",
      progress: 0,
      duration: "6-9 months",
      difficulty: "Advanced",
      students: 8200,
      rating: 4.7,
      tags: ["Docker", "Kubernetes", "CI/CD", "AWS"],
      trending: true,
      completed: false,
      favorite: false
    }
  ];

  const filteredRoadmaps = roadmaps.filter((roadmap) => {
    const matchesSearch = roadmap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         roadmap.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         roadmap.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    switch(activeFilter) {
      case "trending":
        return matchesSearch && roadmap.trending;
      case "popular":
        return matchesSearch && roadmap.students > 10000;
      case "completed":
        return matchesSearch && roadmap.completed;
      case "favorite":
        return matchesSearch && roadmap.favorite;
      default:
        return matchesSearch;
    }
  });

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Learning Roadmaps</h1>
          <p className="text-muted-foreground">Choose your learning path and start your journey</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search roadmaps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All Roadmaps</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="favorite">Favorites</TabsTrigger>
        </TabsList>

        <TabsContent value={activeFilter} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoadmaps.map((roadmap) => (
              <Card key={roadmap.id} className="glass-card hover:glow-accent transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 group-hover:text-accent transition-colors">
                        {roadmap.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {roadmap.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 ml-2">
                      {roadmap.trending && (
                        <Badge variant="secondary" className="text-xs">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      {roadmap.favorite && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{roadmap.progress}%</span>
                    </div>
                    <Progress value={roadmap.progress} className="h-2" />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {roadmap.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {roadmap.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{roadmap.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{roadmap.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{roadmap.students.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge className={getDifficultyColor(roadmap.difficulty)}>
                      {roadmap.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{roadmap.rating}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    {roadmap.completed ? (
                      <Button size="sm" variant="outline" className="flex-1">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Completed
                      </Button>
                    ) : roadmap.progress > 0 ? (
                      <Button size="sm" className="flex-1 gradient-primary text-white">
                        <Play className="h-4 w-4 mr-2" />
                        Continue
                      </Button>
                    ) : (
                      <Button size="sm" className="flex-1 gradient-primary text-white">
                        <Play className="h-4 w-4 mr-2" />
                        Start Learning
                      </Button>
                    )}
                    <Button size="sm" variant="ghost" className="px-3">
                      <Bookmark className={`h-4 w-4 ${roadmap.favorite ? 'fill-current text-yellow-500' : ''}`} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRoadmaps.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No roadmaps found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or explore different categories.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}