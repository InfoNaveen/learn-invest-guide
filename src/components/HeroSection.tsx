import { Button } from "@/components/ui/button";
import { TrendingUp, BookOpen, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-success to-primary-dark bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000">
            Master Investing with AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            Learn smart investing through personalized AI guidance, interactive quizzes, and real market insights. Perfect for beginners ready to grow their wealth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
            <Link to="/dashboard">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
            </Link>
            
            <Link to="/chat">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Brain className="w-5 h-5 mr-2" />
                Try AI Chat
              </Button>
            </Link>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-in slide-in-from-bottom-4 duration-1000 delay-600">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elevated transition-all duration-300">
              <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Learning</h3>
              <p className="text-muted-foreground">Get personalized investment advice and learn at your own pace with our intelligent tutor.</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elevated transition-all duration-300">
              <BookOpen className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Courses</h3>
              <p className="text-muted-foreground">Master the fundamentals through engaging quizzes, tutorials, and real-world scenarios.</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elevated transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-warning mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
              <p className="text-muted-foreground">Stay updated with live market data, trends, and educational analysis tools.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;