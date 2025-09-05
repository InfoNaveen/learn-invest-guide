import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, CheckCircle, Star, TrendingUp, Shield, PieChart } from "lucide-react";
import Navigation from "@/components/Navigation";

const Learn = () => {
  const courses = [
    {
      id: 1,
      title: "Investment Fundamentals",
      description: "Learn the basics of investing, different asset classes, and how markets work.",
      duration: "2 hours",
      lessons: 8,
      difficulty: "Beginner",
      progress: 85,
      completed: false,
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      id: 2,
      title: "Portfolio Diversification",
      description: "Master the art of spreading risk across different investments for optimal returns.",
      duration: "1.5 hours",
      lessons: 6,
      difficulty: "Intermediate",
      progress: 60,
      completed: false,
      icon: PieChart,
      color: "text-success"
    },
    {
      id: 3,
      title: "Risk Management",
      description: "Understand and manage investment risks to protect your portfolio.",
      duration: "2.5 hours",
      lessons: 10,
      difficulty: "Intermediate",
      progress: 30,
      completed: false,
      icon: Shield,
      color: "text-warning"
    },
    {
      id: 4,
      title: "Stock Analysis Basics",
      description: "Learn fundamental and technical analysis to evaluate stocks effectively.",
      duration: "3 hours",
      lessons: 12,
      difficulty: "Advanced",
      progress: 0,
      completed: false,
      icon: BookOpen,
      color: "text-destructive"
    }
  ];

  const recentArticles = [
    {
      title: "Understanding Bull and Bear Markets",
      readTime: "5 min read",
      category: "Market Analysis"
    },
    {
      title: "Dollar-Cost Averaging Explained",
      readTime: "7 min read",
      category: "Investment Strategy"
    },
    {
      title: "How to Read Financial Statements",
      readTime: "10 min read",
      category: "Fundamental Analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Learning Hub</h1>
          <p className="text-muted-foreground">Build your investment knowledge with structured courses and expert insights.</p>
        </div>

        {/* Progress Overview */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-primary/5 to-success/5 border border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Your Learning Journey</h2>
              <p className="text-muted-foreground">Keep going! You're making great progress.</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">43%</div>
              <p className="text-sm text-muted-foreground">Overall Progress</p>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Courses */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Investment Courses</h2>
            <div className="space-y-6">
              {courses.map((course) => {
                const Icon = course.icon;
                return (
                  <Card key={course.id} className="p-6 hover:shadow-elevated transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 bg-muted rounded-lg ${course.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{course.title}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-warning fill-current" />
                            <span className="text-sm text-muted-foreground">4.8</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{course.description}</p>
                        
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{course.lessons} lessons</span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            course.difficulty === 'Beginner' ? 'bg-success/10 text-success' :
                            course.difficulty === 'Intermediate' ? 'bg-warning/10 text-warning' :
                            'bg-destructive/10 text-destructive'
                          }`}>
                            {course.difficulty}
                          </span>
                        </div>
                        
                        {course.progress > 0 && (
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm text-muted-foreground">Progress</span>
                              <span className="text-sm text-muted-foreground">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="h-2 rounded-full bg-primary"
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-3">
                          <Button variant={course.progress > 0 ? "success" : "default"}>
                            {course.progress > 0 ? "Continue" : "Start Course"}
                          </Button>
                          
                          {course.progress > 0 && (
                            <Button variant="outline">
                              View Progress
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Articles */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Articles</h3>
              <div className="space-y-4">
                {recentArticles.map((article, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <h4 className="font-medium mb-1 hover:text-primary cursor-pointer transition-colors">
                      {article.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.category}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Articles
              </Button>
            </Card>

            {/* Learning Tips */}
            <Card className="p-6 bg-gradient-to-br from-success/5 to-primary/5">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-success" />
                Learning Tip
              </h3>
              <p className="text-sm text-muted-foreground">
                Take notes while learning and practice with our interactive quizzes to reinforce your knowledge. Consistent daily learning, even for 15 minutes, is more effective than cramming.
              </p>
            </Card>

            {/* AI Study Buddy */}
            <Card className="p-6 border border-primary/20">
              <h3 className="text-lg font-semibold mb-3">AI Study Buddy</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Need help with any concept? Our AI is ready to explain complex topics in simple terms.
              </p>
              <Button variant="financial" className="w-full">
                Ask AI a Question
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Learn;