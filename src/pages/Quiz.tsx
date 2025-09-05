import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, XCircle, Trophy, RotateCcw } from "lucide-react";
import Navigation from "@/components/Navigation";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quizData = [
    {
      question: "What is diversification in investing?",
      options: [
        "Putting all money in one stock",
        "Spreading investments across different assets",
        "Only investing in bonds",
        "Avoiding all risks"
      ],
      correct: 1,
      explanation: "Diversification means spreading your investments across different types of assets, sectors, and markets to reduce risk."
    },
    {
      question: "What does P/E ratio stand for?",
      options: [
        "Profit/Expense ratio",
        "Price/Earnings ratio",
        "Portfolio/Equity ratio",
        "Principal/Extra ratio"
      ],
      correct: 1,
      explanation: "P/E ratio stands for Price-to-Earnings ratio, which compares a company's stock price to its earnings per share."
    },
    {
      question: "Which is generally considered a safer investment?",
      options: [
        "Individual stocks",
        "Cryptocurrency",
        "Government bonds",
        "Options trading"
      ],
      correct: 2,
      explanation: "Government bonds are generally considered safer because they're backed by the government and have lower volatility than stocks."
    },
    {
      question: "What is dollar-cost averaging?",
      options: [
        "Buying stocks only when prices are low",
        "Investing a fixed amount regularly regardless of price",
        "Calculating the average price of all your stocks",
        "Setting stop-loss orders"
      ],
      correct: 1,
      explanation: "Dollar-cost averaging involves investing a fixed amount of money at regular intervals, which helps reduce the impact of market volatility."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const score = answers.filter((answer, index) => answer === quizData[index].correct).length;
  const percentage = Math.round((score / quizData.length) * 100);

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center">
              <div className="mb-6">
                {percentage >= 80 ? (
                  <Trophy className="w-16 h-16 text-warning mx-auto" />
                ) : percentage >= 60 ? (
                  <CheckCircle className="w-16 h-16 text-success mx-auto" />
                ) : (
                  <Brain className="w-16 h-16 text-primary mx-auto" />
                )}
              </div>
              
              <h1 className="text-3xl font-bold mb-4">Quiz Complete!</h1>
              
              <div className="text-6xl font-bold text-primary mb-4">{percentage}%</div>
              
              <p className="text-xl text-muted-foreground mb-2">
                You scored {score} out of {quizData.length} questions correctly!
              </p>
              
              <p className="text-muted-foreground mb-8">
                {percentage >= 80 ? "Excellent work! You have a solid understanding of investment fundamentals." :
                 percentage >= 60 ? "Good job! Keep learning to improve your investment knowledge." :
                 "Keep studying! Review the learning materials and try again."}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" onClick={resetQuiz} className="flex items-center">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Take Quiz Again
                </Button>
                
                <Button variant="outline" asChild>
                  <a href="/learn">
                    Continue Learning
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  const question = quizData[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {quizData.length}</span>
              <span className="text-sm text-muted-foreground">{Math.round(((currentQuestion) / quizData.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-primary transition-all duration-300"
                style={{ width: `${((currentQuestion) / quizData.length) * 100}%` }}
              />
            </div>
          </div>

          <Card className="p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-3 text-primary" />
                Investment Quiz
              </h1>
              <h2 className="text-xl font-semibold text-foreground">{question.question}</h2>
            </div>

            <div className="space-y-3 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                    showResult
                      ? index === question.correct
                        ? 'bg-success/10 border-success text-success'
                        : selectedAnswer === index
                        ? 'bg-destructive/10 border-destructive text-destructive'
                        : 'bg-muted border-border'
                      : selectedAnswer === index
                      ? 'bg-primary/10 border-primary'
                      : 'bg-card border-border hover:bg-muted hover:border-muted-foreground'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResult && (
                      index === question.correct ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : selectedAnswer === index ? (
                        <XCircle className="w-5 h-5 text-destructive" />
                      ) : null
                    )}
                  </div>
                </button>
              ))}
            </div>

            {showResult && (
              <div className={`p-4 rounded-lg mb-6 ${
                isCorrect ? 'bg-success/10 border border-success/20' : 'bg-destructive/10 border border-destructive/20'
              }`}>
                <div className="flex items-center mb-2">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-success mr-2" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive mr-2" />
                  )}
                  <span className={`font-semibold ${isCorrect ? 'text-success' : 'text-destructive'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{question.explanation}</p>
              </div>
            )}

            <Button 
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null || showResult}
              variant={showResult ? "success" : "default"}
              className="w-full"
            >
              {showResult 
                ? (currentQuestion === quizData.length - 1 ? 'View Results' : 'Next Question')
                : 'Submit Answer'
              }
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Quiz;