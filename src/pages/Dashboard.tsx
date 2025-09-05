import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, BookOpen, Brain, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  // Mock data for demonstration
  const marketData = [
    { symbol: "S&P 500", value: "4,127.83", change: "+1.2%", positive: true },
    { symbol: "NASDAQ", value: "12,657.90", change: "+0.8%", positive: true },
    { symbol: "DOW", value: "33,745.40", change: "-0.3%", positive: false },
  ];

  const learningProgress = [
    { topic: "Stock Basics", progress: 85, completed: true },
    { topic: "Portfolio Diversification", progress: 60, completed: false },
    { topic: "Risk Management", progress: 30, completed: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back to InvestBuddy!</h1>
          <p className="text-muted-foreground">Continue your investing journey with personalized insights and learning.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link to="/chat">
            <Card className="p-6 hover:shadow-elevated transition-all duration-300 cursor-pointer border border-primary/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Ask AI Anything</h3>
                  <p className="text-sm text-muted-foreground">Get instant investment advice</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/learn">
            <Card className="p-6 hover:shadow-elevated transition-all duration-300 cursor-pointer border border-success/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-success/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold">Continue Learning</h3>
                  <p className="text-sm text-muted-foreground">Build your investment knowledge</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/quiz">
            <Card className="p-6 hover:shadow-elevated transition-all duration-300 cursor-pointer border border-warning/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-warning/10 rounded-lg">
                  <Brain className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <h3 className="font-semibold">Take a Quiz</h3>
                  <p className="text-sm text-muted-foreground">Test your knowledge</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Market Overview */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-primary" />
              Market Overview
            </h2>
            <div className="space-y-4">
              {marketData.map((item) => (
                <div key={item.symbol} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h3 className="font-medium">{item.symbol}</h3>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                  <div className={`flex items-center space-x-1 ${item.positive ? 'text-success' : 'text-destructive'}`}>
                    {item.positive ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="font-medium">{item.change}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View Detailed Analysis
            </Button>
          </Card>

          {/* Learning Progress */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-success" />
              Learning Progress
            </h2>
            <div className="space-y-6">
              {learningProgress.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{item.topic}</h3>
                    <span className="text-sm text-muted-foreground">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.completed ? 'bg-success' : 'bg-primary'}`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Link to="/learn">
              <Button variant="success" className="w-full mt-6">
                Continue Learning
              </Button>
            </Link>
          </Card>
        </div>

        {/* AI Insight of the Day */}
        <Card className="p-6 mt-8 bg-gradient-to-r from-primary/5 to-success/5 border border-primary/20">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-primary" />
            AI Insight of the Day
          </h2>
          <p className="text-muted-foreground mb-4">
            "Diversification is key to managing risk. Consider spreading your investments across different asset classes like stocks, bonds, and real estate to protect your portfolio from market volatility."
          </p>
          <Link to="/chat">
            <Button variant="financial">
              Ask AI for More Insights
            </Button>
          </Link>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;