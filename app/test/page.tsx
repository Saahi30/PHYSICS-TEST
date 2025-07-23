
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Question {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct: string;
  topic: string;
  difficulty: string;
  concept: string;
  errorType: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

const questions: Question[] = [
  {
    id: 1,
    question: "A particle moves in a circle of radius R with constant angular velocity ω. The magnitude of average acceleration over a quarter circle is:",
    options: {
      A: "ω²R/√2",
      B: "ω²R√2",
      C: "ω²R",
      D: "ω²R/2"
    },
    correct: "B",
    topic: "Circular Motion",
    difficulty: "Medium",
    concept: "Average acceleration in circular motion",
    errorType: {
      A: "Formula confusion - mixing instantaneous with average",
      B: "Correct understanding",
      C: "Conceptual error - using instantaneous acceleration",
      D: "Mathematical error - incorrect vector calculation"
    }
  },
  {
    id: 2,
    question: "Two blocks of masses m₁ = 2kg and m₂ = 3kg are connected by a string passing over a pulley. If the system is released from rest, the acceleration of the system is: (g = 10 m/s²)",
    options: {
      A: "2 m/s²",
      B: "3 m/s²",
      C: "4 m/s²",
      D: "6 m/s²"
    },
    correct: "A",
    topic: "Newton's Laws",
    difficulty: "Easy",
    concept: "Atwood machine dynamics",
    errorType: {
      A: "Correct application of Newton's laws",
      B: "Sign convention error",
      C: "Forgot to consider both masses",
      D: "Confused with individual forces"
    }
  },
  {
    id: 3,
    question: "A spring of spring constant k is cut into two equal parts. The spring constant of each part is:",
    options: {
      A: "k/2",
      B: "k",
      C: "2k",
      D: "4k"
    },
    correct: "C",
    topic: "Simple Harmonic Motion",
    difficulty: "Medium",
    concept: "Spring constant and length relationship",
    errorType: {
      A: "Inverse relationship misconception",
      B: "Assumed no change in properties",
      C: "Correct understanding of spring mechanics",
      D: "Overestimation error"
    }
  },
  {
    id: 4,
    question: "The work done by friction on a body sliding down an inclined plane of height h and angle θ is:",
    options: {
      A: "-μmgh cos θ",
      B: "-μmgh",
      C: "-μmgh sin θ",
      D: "-μmgh/cos θ"
    },
    correct: "D",
    topic: "Work Energy",
    difficulty: "Hard",
    concept: "Work done by friction on incline",
    errorType: {
      A: "Confused normal force with weight component",
      B: "Ignored geometry of incline",
      C: "Mixed up force components",
      D: "Correct geometric analysis"
    }
  },
  {
    id: 5,
    question: "A charged particle enters a uniform magnetic field perpendicular to its velocity. The particle will move in:",
    options: {
      A: "Straight line",
      B: "Parabolic path",
      C: "Circular path",
      D: "Helical path"
    },
    correct: "C",
    topic: "Magnetic Effects",
    difficulty: "Easy",
    concept: "Motion of charged particles in magnetic field",
    errorType: {
      A: "Ignored magnetic force effect",
      B: "Confused with electric field motion",
      C: "Correct understanding of Lorentz force",
      D: "Assumed 3D motion without cause"
    }
  }
];

export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [isStarted, setIsStarted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
  }, [isStarted, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Store results and navigate to results page
    localStorage.setItem('testAnswers', JSON.stringify(answers));
    localStorage.setItem('testQuestions', JSON.stringify(questions));
    router.push('/results');
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 pb-20">
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
          <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <i className="ri-arrow-left-line text-gray-600"></i>
            </Link>
            <div className="font-semibold">Physics Practice Test</div>
            <div className="w-8 h-8"></div>
          </div>
        </nav>

        <div className="px-4 pt-8">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <img 
                src="https://readdy.ai/api/search-image?query=3D%20illustration%20of%20physics%20formulas%20and%20equations%20floating%20in%20space%2C%20modern%20educational%20design%2C%20scientific%20symbols%2C%20clean%20blue%20and%20white%20color%20scheme%2C%20academic%20atmosphere%2C%20centered%20composition%2C%20professional%20look&width=300&height=200&seq=test1&orientation=landscape"
                alt="Test Instructions"
                className="w-full h-48 object-cover rounded-2xl shadow-lg mb-6"
              />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">JEE Physics Practice Test</h1>
              <p className="text-gray-600">Get ready to test your physics knowledge</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <h2 className="font-semibold text-gray-900 mb-4">Test Instructions</h2>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-time-line text-indigo-600 text-xs"></i>
                  </div>
                  <div>Duration: 30 minutes for 5 questions</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-file-text-line text-indigo-600 text-xs"></i>
                  </div>
                  <div>All questions are from JEE previous year papers</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-checkbox-circle-line text-indigo-600 text-xs"></i>
                  </div>
                  <div>Choose the best answer for each question</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-bar-chart-line text-indigo-600 text-xs"></i>
                  </div>
                  <div>Get detailed AI-powered analytics after completion</div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsStarted(true)}
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg active:scale-95 transition-transform !rounded-button"
            >
              Start Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 pb-20">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-900">Question {currentQuestion + 1}/5</div>
            <div className="text-sm font-mono text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              {formatTime(timeLeft)}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </nav>

      {/* Question Content */}
      <div className="px-4 pt-8">
        <div className="max-w-md mx-auto">
          {/* Topic Badge */}
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              {question.topic} • {question.difficulty}
            </span>
          </div>

          {/* Question */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <div className="text-gray-900 leading-relaxed">
              {question.question}
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {Object.entries(question.options).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleAnswerSelect(key)}
                className={`w-full p-4 rounded-xl text-left transition-all border-2 !rounded-button ${
                  answers[currentQuestion] === key
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                    : 'border-gray-200 bg-white text-gray-900 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${
                    answers[currentQuestion] === key
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {key}
                  </div>
                  <div className="flex-1">{value}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            {currentQuestion > 0 && (
              <button
                onClick={handlePrevious}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-medium !rounded-button"
              >
                Previous
              </button>
            )}
            
            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-medium !rounded-button"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 bg-green-600 text-white py-3 rounded-xl font-medium !rounded-button"
              >
                Submit Test
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
