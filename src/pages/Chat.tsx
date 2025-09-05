import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, Bot, User } from "lucide-react";
import Navigation from "@/components/Navigation";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI investment advisor. I can help you understand investing concepts, analyze market trends, and provide personalized advice. What would you like to learn about today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Sample AI responses for demonstration
  const sampleResponses = [
    "That's a great question! Diversification is one of the most important concepts in investing. It involves spreading your investments across different asset classes, sectors, and geographical regions to reduce risk.",
    "Based on current market conditions, I'd recommend focusing on fundamentally strong companies with good cash flow. However, remember that all investments carry risk and past performance doesn't guarantee future results.",
    "For beginners, I often suggest starting with index funds or ETFs as they provide instant diversification and are managed by professionals. They're also typically lower cost than actively managed funds.",
    "Market volatility is normal and can actually present opportunities for long-term investors. The key is to stick to your investment plan and avoid making emotional decisions during market swings.",
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: sampleResponses[Math.floor(Math.random() * sampleResponses.length)],
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "What is diversification?",
    "How do I start investing?",
    "What are index funds?",
    "How much should I invest?",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center">
              <MessageSquare className="w-8 h-8 mr-3 text-primary" />
              AI Investment Advisor
            </h1>
            <p className="text-muted-foreground">Get personalized investment advice and answers to your financial questions.</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Chat Area */}
            <div className="lg:col-span-3">
              <Card className="flex flex-col h-[600px]">
                {/* Messages */}
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start space-x-3 ${
                        message.isBot ? '' : 'flex-row-reverse space-x-reverse'
                      }`}
                    >
                      <div className={`p-2 rounded-full ${
                        message.isBot ? 'bg-primary/10' : 'bg-success/10'
                      }`}>
                        {message.isBot ? (
                          <Bot className="w-5 h-5 text-primary" />
                        ) : (
                          <User className="w-5 h-5 text-success" />
                        )}
                      </div>
                      
                      <div className={`max-w-[80%] ${
                        message.isBot ? '' : 'text-right'
                      }`}>
                        <div className={`p-3 rounded-lg ${
                          message.isBot 
                            ? 'bg-muted' 
                            : 'bg-primary text-primary-foreground'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="p-6 border-t border-border">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask me anything about investing..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Questions */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Questions</h3>
                <div className="space-y-2">
                  {suggestedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full text-left justify-start text-sm"
                      onClick={() => setInputMessage(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </Card>

              {/* AI Features */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-success/5">
                <h3 className="text-lg font-semibold mb-3">AI Capabilities</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Personalized investment advice</li>
                  <li>• Market analysis and insights</li>
                  <li>• Portfolio optimization tips</li>
                  <li>• Risk assessment guidance</li>
                  <li>• Educational explanations</li>
                </ul>
              </Card>

              {/* Disclaimer */}
              <Card className="p-6 border border-warning/20 bg-warning/5">
                <h3 className="text-sm font-semibold mb-2 text-warning">Important Notice</h3>
                <p className="text-xs text-muted-foreground">
                  This AI provides educational information only and should not be considered as financial advice. Always consult with a qualified financial advisor before making investment decisions.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;