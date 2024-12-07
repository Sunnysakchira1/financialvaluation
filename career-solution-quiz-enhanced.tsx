import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

const FinanceCareerQuiz = () => {
  const questions = [
    {
      id: 1,
      text: "What's your current situation in finance?",
      options: [
        { 
          text: "Recently started a new finance role", 
          subtext: "Adjusting to new responsibilities",
          pathway: "professional",
          persona: "new_hire"
        },
        { 
          text: "Currently job hunting in finance", 
          subtext: "Looking to break into the industry",
          pathway: "jobseeker",
          persona: "career_changer"
        },
        { 
          text: "University student exploring options", 
          subtext: "Planning my career path",
          pathway: "student",
          persona: "student"
        },
        { 
          text: "Working professional seeking growth", 
          subtext: "Looking to advance my career",
          pathway: "professional",
          persona: "experienced"
        }
      ]
    },
    {
      id: 2,
      text: "Which area of financial modeling interests you most?",
      options: [
        { 
          text: "M&A and LBO Modeling", 
          subtext: "Complex transaction analysis",
          skillArea: "advanced_modeling",
          needsScore: 3
        },
        { 
          text: "Company Valuation", 
          subtext: "Understanding company worth",
          skillArea: "valuation",
          needsScore: 3
        },
        { 
          text: "Financial Statement Analysis", 
          subtext: "Deep diving into numbers",
          skillArea: "fundamentals",
          needsScore: 2
        },
        { 
          text: "Industry-Specific Modeling", 
          subtext: "Sector-focused analysis",
          skillArea: "industry",
          needsScore: 2
        }
      ]
    },
    {
      id: 3,
      text: "How much time can you dedicate to learning?",
      options: [
        { 
          text: "1-2 hours per day", 
          subtext: "Consistent daily practice",
          commitment: "high",
          needsScore: 1
        },
        { 
          text: "A few hours on weekends", 
          subtext: "Weekend warrior",
          commitment: "medium",
          needsScore: 2
        },
        { 
          text: "Flexible schedule", 
          subtext: "Learn at my own pace",
          commitment: "flexible",
          needsScore: 2
        },
        { 
          text: "Limited time available", 
          subtext: "Need efficient learning",
          commitment: "low",
          needsScore: 3
        }
      ]
    },
    {
      id: 4,
      text: "What's your biggest challenge with financial modeling?",
      options: [
        { 
          text: "Building models from scratch", 
          subtext: "Need step-by-step guidance",
          challenge: "fundamentals",
          needsScore: 3
        },
        { 
          text: "Understanding complex formulas", 
          subtext: "Technical difficulties",
          challenge: "technical",
          needsScore: 3
        },
        { 
          text: "Industry best practices", 
          subtext: "Professional standards",
          challenge: "standards",
          needsScore: 2
        },
        { 
          text: "Real-world applications", 
          subtext: "Practical implementation",
          challenge: "practical",
          needsScore: 2
        }
      ]
    },
    {
      id: 5,
      text: "Which career goal matters most to you?",
      options: [
        { 
          text: "Landing a top finance role", 
          subtext: "Career advancement",
          goal: "career_growth",
          needsScore: 3
        },
        { 
          text: "Building practical skills", 
          subtext: "Skill development",
          goal: "skill_building",
          needsScore: 2
        },
        { 
          text: "Getting certified", 
          subtext: "Professional credentials",
          goal: "certification",
          needsScore: 2
        },
        { 
          text: "Starting own practice", 
          subtext: "Entrepreneurship",
          goal: "business",
          needsScore: 3
        }
      ]
    },
    {
      id: 6,
      text: "What would help you feel more confident?",
      options: [
        { 
          text: "Expert feedback on my work", 
          subtext: "Professional guidance",
          confidence: "feedback",
          needsScore: 3
        },
        { 
          text: "Practice with real cases", 
          subtext: "Hands-on experience",
          confidence: "practice",
          needsScore: 3
        },
        { 
          text: "Industry recognition", 
          subtext: "Credentials",
          confidence: "recognition",
          needsScore: 2
        },
        { 
          text: "Peer networking", 
          subtext: "Community support",
          confidence: "community",
          needsScore: 2
        }
      ]
    }
  ];

  const courseHighlights = {
    professional: {
      modules: [
        "Advanced Valuation Techniques",
        "Industry-Specific Modeling",
        "M&A Modeling Masterclass",
        "Real-World Case Studies"
      ],
      benefits: [
        "Build confidence in your role",
        "Master industry best practices",
        "Learn from expert practitioners",
        "Get recognized certification"
      ]
    },
    jobseeker: {
      modules: [
        "Financial Modeling Fundamentals",
        "Valuation Essentials",
        "Interview Preparation",
        "Practice Cases"
      ],
      benefits: [
        "Stand out to employers",
        "Prove technical proficiency",
        "Build practical experience",
        "Access career resources"
      ]
    },
    student: {
      modules: [
        "Core Finance Concepts",
        "Basic to Advanced Modeling",
        "Industry Analysis",
        "Career Path Guidance"
      ],
      benefits: [
        "Bridge theory and practice",
        "Prepare for internships",
        "Build strong foundation",
        "Network with professionals"
      ]
    }
  };

  const successMetrics = {
    placed: "87% of students land desired finance roles",
    salary: "Average 32% salary increase post-certification",
    satisfaction: "96% student satisfaction rate",
    completion: "92% completion rate with support system"
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [pathway, setPathway] = useState(null);
  const [needsScore, setNeedsScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userResponses, setUserResponses] = useState({});

  function IconWrapper({ children }) {
    return (
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
        {children}
      </div>
    );
  }

  const handleAnswer = (option) => {
    const newResponses = { ...userResponses };
    newResponses[currentQuestion] = option;
    setUserResponses(newResponses);

    if (currentQuestion === 0) {
      setPathway(option.pathway);
    }
    if (option.needsScore) {
      setNeedsScore(needsScore + option.needsScore);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const renderResultsSection = () => {
    const pathwayData = courseHighlights[pathway];
    
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your Personalized Learning Path</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Based on your responses, we've customized a learning journey to help you achieve your goals.
          </p>
        </div>

        {/* Course Modules */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-bold mb-4">Recommended Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pathwayData.modules.map((module, index) => (
              <div key={index} className="flex items-start gap-3">
                <IconWrapper>M</IconWrapper>
                <div>
                  <p className="font-medium">{module}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pathwayData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <IconWrapper>✓</IconWrapper>
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Success Metrics</h3>
            <div className="space-y-3">
              {Object.entries(successMetrics).map(([key, value]) => (
                <div key={key} className="flex items-center gap-3">
                  <IconWrapper>%</IconWrapper>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Next Steps</h3>
            <div className="space-y-4">
              <p className="font-medium">Ready to accelerate your finance career?</p>
              <button
                onClick={() => window.location.href = '#enroll'}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Your Journey with ValuationMasterclass
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Card className="max-w-4xl mx-auto bg-white rounded-lg shadow">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            Finance Career Development Assessment
          </h1>
          
          {!showResults ? (
            <div>
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
                <h2 className="text-xl font-medium mb-4">
                  {questions[currentQuestion].text}
                </h2>
              </div>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full p-4 text-left border rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="font-medium">{option.text}</div>
                    {option.subtext && (
                      <div className="text-sm text-gray-500 mt-1">{option.subtext}</div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            renderResultsSection()
          )}
        </div>
      </Card>
    </div>
  );
};

export default FinanceCareerQuiz;
