
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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

interface QuestionAnalysis {
  question: Question;
  userAnswer: string;
  isCorrect: boolean;
  errorType: string;
  timeTaken: number;
  thinkingAnalysis: {
    correctApproach: string;
    userThinking: string;
    rootCause: string;
    cognitiveError: string;
    recommendation: string;
  };
}

export default function Results() {
  const [analysis, setAnalysis] = useState<QuestionAnalysis[]>([]);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState<{[key: number]: boolean}>([]);
  const [showAIAnalysis, setShowAIAnalysis] = useState<{[key: number]: boolean}>([]);

  useEffect(() => {
    const answersStr = localStorage.getItem('testAnswers');
    const questionsStr = localStorage.getItem('testQuestions');

    if (answersStr && questionsStr) {
      const answers = JSON.parse(answersStr);
      const questions = JSON.parse(questionsStr);

      const analysisData = questions.map((q: Question, index: number) => {
        const userAnswer = answers[index] || '';
        const isCorrect = userAnswer === q.correct;
        const errorType = userAnswer ? q.errorType[userAnswer as keyof typeof q.errorType] : 'Not attempted';

        // AI Thinking Analysis
        const thinkingAnalysis = generateThinkingAnalysis(q, userAnswer, isCorrect);

        return {
          question: q,
          userAnswer,
          isCorrect,
          errorType,
          timeTaken: Math.floor(Math.random() * 300) + 60,
          thinkingAnalysis
        };
      });

      setAnalysis(analysisData);
      setScore(analysisData.filter(a => a.isCorrect).length);
    }
  }, []);

  const generateThinkingAnalysis = (question: Question, userAnswer: string, isCorrect: boolean) => {
    const analysisMap: {[key: string]: any} = {
      1: {
        correctApproach: "1) Identify that average acceleration = (change in velocity vector)/(time) 2) For quarter circle: initial velocity = ωR (tangential), final velocity = ωR (perpendicular) 3) Use vector subtraction: |Δv| = ωR√2 4) Time = π/(2ω) 5) Average acceleration = ωR√2/(π/2ω) = 2ωR√2/π ≈ ωR√2",
        userThinking: getUserThinking(question.id, userAnswer),
        rootCause: getRootCause(question.id, userAnswer),
        cognitiveError: getCognitiveError(question.id, userAnswer),
        recommendation: getRecommendation(question.id, userAnswer)
      },
      2: {
        correctApproach: "1) Draw free body diagrams for both masses 2) For m₁: T - m₁g = m₁a 3) For m₂: m₂g - T = m₂a 4) Solve simultaneously: a = (m₂-m₁)g/(m₁+m₂) = (3-2)*10/(2+3) = 2 m/s²",
        userThinking: getUserThinking(question.id, userAnswer),
        rootCause: getRootCause(question.id, userAnswer),
        cognitiveError: getCognitiveError(question.id, userAnswer),
        recommendation: getRecommendation(question.id, userAnswer)
      },
      3: {
        correctApproach: "1) Understand that spring constant k = F/x = (Force per unit extension) 2) For springs in series: 1/k_total = 1/k₁ + 1/k₂ 3) When cut in half, each part acts as individual spring 4) Shorter spring = higher spring constant 5) k_new = 2k (inverse relationship with length)",
        userThinking: getUserThinking(question.id, userAnswer),
        rootCause: getRootCause(question.id, userAnswer),
        cognitiveError: getCognitiveError(question.id, userAnswer),
        recommendation: getRecommendation(question.id, userAnswer)
      },
      4: {
        correctApproach: "1) Identify forces: Weight (mg), Normal (N = mg cosθ), Friction (f = μN) 2) Distance along incline = h/sinθ 3) Work by friction = Force × Distance × cos(180°) 4) W_friction = -μmg cosθ × (h/sinθ) = -μmgh/tanθ = -μmgh/cosθ",
        userThinking: getUserThinking(question.id, userAnswer),
        rootCause: getRootCause(question.id, userAnswer),
        cognitiveError: getCognitiveError(question.id, userAnswer),
        recommendation: getRecommendation(question.id, userAnswer)
      },
      5: {
        correctApproach: "1) Apply Lorentz force: F = q(v × B) 2) Force is perpendicular to both v and B 3) Perpendicular force → centripetal acceleration 4) Constant speed in circular path 5) Radius = mv/(qB)",
        userThinking: getUserThinking(question.id, userAnswer),
        rootCause: getRootCause(question.id, userAnswer),
        cognitiveError: getCognitiveError(question.id, userAnswer),
        recommendation: getRecommendation(question.id, userAnswer)
      }
    };

    return analysisMap[question.id] || {
      correctApproach: "Step-by-step analysis of the correct solution approach",
      userThinking: "Analysis of your thought process",
      rootCause: "Identification of the root cause of confusion",
      cognitiveError: "Type of cognitive error made",
      recommendation: "Specific recommendation for improvement"
    };
  };

  const getUserThinking = (questionId: number, userAnswer: string) => {
    const thinkingMap: {[key: string]: {[key: string]: string}} = {
      1: {
        A: "You likely thought of instantaneous acceleration (ωR) and tried to apply some average factor, but missed the vector nature of the problem.",
        B: "Correct! You recognized this as a vector problem and properly calculated the magnitude of average acceleration.",
        C: "You confused average acceleration with instantaneous centripetal acceleration - a common mistake when dealing with circular motion.",
        D: "You may have tried to use some form of averaging but didn't account for the vector nature of acceleration in circular motion."
      },
      2: {
        A: "Perfect! You set up the equations correctly: T-2g=2a and 3g-T=3a, then solved to get a=2 m/s².",
        B: "You might have made a sign error in your force equations or confused the direction of acceleration.",
        C: "You may have forgotten to consider the constraint that both masses have the same acceleration magnitude.",
        D: "You might have confused this with individual forces rather than the system's net acceleration."
      },
      3: {
        A: "You incorrectly assumed spring constant decreases with length - this is backwards from the actual relationship.",
        B: "You thought cutting doesn't change properties, missing the fundamental relationship between k and length.",
        C: "Excellent! You understood that spring constant is inversely proportional to length: shorter spring = stiffer spring.",
        D: "You overcomplicated the relationship - the factor is 2, not 4."
      },
      4: {
        A: "You confused the normal force component with the correct geometric relationship needed for work calculation.",
        B: "You neglected the geometry of the inclined plane - work depends on the actual distance moved.",
        C: "You mixed up the force components and their relationship to the incline geometry.",
        D: "Correct! You properly accounted for both the friction force and the distance along the incline."
      },
      5: {
        A: "You ignored the effect of magnetic force on charged particles - magnetic fields always exert force on moving charges.",
        B: "You confused magnetic field motion with electric field motion (which does produce parabolic paths).",
        C: "Perfect! You recognized that perpendicular magnetic force creates centripetal acceleration, resulting in circular motion.",
        D: "You assumed 3D helical motion without justification - this only occurs when velocity has a component parallel to B."
      }
    };

    return thinkingMap[questionId]?.[userAnswer] || "Your thought process analysis based on the selected answer.";
  };

  const getRootCause = (questionId: number, userAnswer: string) => {
    const causeMap: {[key: string]: {[key: string]: string}} = {
      1: {
        A: "Weak understanding of vector vs scalar quantities in kinematics",
        B: "Strong conceptual foundation in vector kinematics",
        C: "Confusion between instantaneous and average quantities",
        D: "Inadequate grasp of vector addition/subtraction in physics"
      },
      2: {
        A: "Solid understanding of Newton's laws and constraint analysis",
        B: "Sign convention errors in force analysis",
        C: "Incomplete understanding of constraint forces in connected systems",
        D: "Confusion between individual and system dynamics"
      },
      3: {
        A: "Fundamental misconception about material properties and scaling",
        B: "Lack of understanding of intensive vs extensive properties",
        C: "Clear understanding of elasticity and material properties",
        D: "Overcomplication of simple proportional relationships"
      },
      4: {
        A: "Geometric confusion in force component analysis",
        B: "Incomplete integration of geometry with physics",
        C: "Component analysis errors in 2D problems",
        D: "Strong geometric and physical reasoning skills"
      },
      5: {
        A: "Fundamental gap in electromagnetic force concepts",
        B: "Confusion between electric and magnetic field effects",
        C: "Excellent grasp of electromagnetic force principles",
        D: "Overthinking simple electromagnetic interactions"
      }
    };

    return causeMap[questionId]?.[userAnswer] || "Root cause analysis based on your response pattern.";
  };

  const getCognitiveError = (questionId: number, userAnswer: string) => {
    const errorMap: {[key: string]: {[key: string]: string}} = {
      1: {
        A: "Anchoring bias - stuck on familiar formula without considering context",
        B: "No cognitive error - systematic approach used",
        C: "Availability heuristic - used most recent/familiar concept incorrectly",
        D: "Incomplete mental model of vector operations"
      },
      2: {
        A: "No cognitive error - methodical problem-solving approach",
        B: "Confirmation bias - didn't double-check sign conventions",
        C: "Tunnel vision - focused on one mass instead of the system",
        D: "Category error - confused individual vs collective properties"
      },
      3: {
        A: "Inverse reasoning error - applied relationship backwards",
        B: "Status quo bias - assumed no change without analysis",
        C: "No cognitive error - correct proportional reasoning",
        D: "Overconfidence bias - overcomplicated simple relationship"
      },
      4: {
        A: "Component decomposition error - misapplied trigonometry",
        B: "Dimensional analysis neglect - ignored geometric factors",
        C: "Vector component confusion in 2D analysis",
        D: "No cognitive error - comprehensive geometric analysis"
      },
      5: {
        A: "Base rate neglect - ignored fundamental electromagnetic principles",
        B: "Representativeness heuristic - pattern matched incorrectly",
        C: "No cognitive error - applied Lorentz force correctly",
        D: "Conjunction fallacy - assumed complex motion without cause"
      }
    };

    return errorMap[questionId]?.[userAnswer] || "Cognitive analysis of your decision-making process.";
  };

  const getRecommendation = (questionId: number, userAnswer: string) => {
    const recMap: {[key: string]: {[key: string]: string}} = {
      1: {
        A: "Practice vector problems daily. Focus on graphical vector addition before algebraic methods.",
        B: "Excellent work! Continue practicing complex vector problems to maintain proficiency.",
        C: "Review the definitions of instantaneous vs average quantities. Practice with displacement-time graphs.",
        D: "Strengthen vector fundamentals with Khan Academy's vector module. Practice 30 mins daily."
      },
      2: {
        A: "Great job! Try more complex pulley systems to build on this foundation.",
        B: "Practice drawing force diagrams with careful attention to direction arrows and sign conventions.",
        C: "Focus on constraint analysis in mechanical systems. Study how connected objects move together.",
        D: "Review Newton's laws systematically. Practice identifying when to analyze systems vs individual objects."
      },
      3: {
        A: "Study material properties and scaling laws. Practice problems involving cutting/combining springs.",
        B: "Learn to distinguish between intensive (per unit) and extensive (total) properties in physics.",
        C: "Excellent understanding! Try problems with springs in parallel and series combinations.",
        D: "Focus on direct and inverse proportionality. Practice simple ratio problems before complex physics."
      },
      4: {
        A: "Master trigonometry in physics contexts. Practice component problems on inclines daily.",
        B: "Study work-energy theorem with emphasis on geometric factors and path dependence.",
        C: "Review 2D force analysis systematically. Use free body diagrams for every incline problem.",
        D: "Great analysis! Try more complex work-energy problems to challenge yourself."
      },
      5: {
        A: "Start with basic electromagnetic force concepts. Review Lorentz force law and its applications.",
        B: "Study the differences between electric and magnetic field effects on charged particles.",
        C: "Perfect! Explore more complex electromagnetic scenarios like cyclotron motion.",
        D: "Focus on necessary and sufficient conditions in physics. When is helical motion actually possible?"
      }
    };

    return recMap[questionId]?.[userAnswer] || "Personalized recommendation based on your learning pattern.";
  };

  const toggleAIAnalysis = (questionId: number) => {
    setShowAIAnalysis(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const toggleExplanation = (questionId: number) => {
    setShowExplanation(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const getScoreColor = () => {
    if (score >= 4) return 'text-green-600';
    if (score >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPerformanceMessage = () => {
    if (score >= 4) return 'Excellent performance! Keep it up!';
    if (score >= 3) return 'Good job! A few areas to improve.';
    return 'Need more practice. Focus on weak areas.';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 pb-20">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <i className="ri-home-line text-gray-600"></i>
          </Link>
          <div className="font-semibold">Test Results</div>
          <Link href="/analytics">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <i className="ri-bar-chart-line text-indigo-600"></i>
            </div>
          </Link>
        </div>
      </nav>

      <div className="px-4 pt-8">
        <div className="max-w-md mx-auto">
          {/* Score Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://readdy.ai/api/search-image?query=3D%20illustration%20of%20academic%20achievement%20trophy%20with%20physics%20symbols%2C%20celebration%20of%20success%2C%20gold%20and%20blue%20colors%2C%20modern%20educational%20design%2C%20centered%20composition%2C%20bright%20lighting%2C%20motivational%20atmosphere&width=200&height=150&seq=result1&orientation=landscape"
                  alt="Results"
                  className="w-32 h-24 object-cover rounded-xl mx-auto"
                />
              </div>
              <div className={`text-4xl font-bold mb-2 ${getScoreColor()}`}>
                {score}/5
              </div>
              <div className="text-gray-600 mb-4">{getPerformanceMessage()}</div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">{score}</div>
                  <div className="text-xs text-gray-500">Correct</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">{5 - score}</div>
                  <div className="text-xs text-gray-500">Incorrect</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{Math.round((score/5) * 100)}%</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Question Analysis */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Detailed Analysis</h2>

            {analysis.map((item, index) => (
              <div key={item.question.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-500">Q{index + 1}</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {item.question.topic}
                      </span>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      <i className={`ri-${item.isCorrect ? 'check' : 'close'}-line text-sm`}></i>
                    </div>
                  </div>

                  <div className="text-sm text-gray-900 mb-3 leading-relaxed">
                    {item.question.question}
                  </div>

                  <div className="flex items-center gap-4 text-xs mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500">Your answer:</span>
                      <span className={`font-medium ${item.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {item.userAnswer || 'Not answered'} {item.userAnswer && `(${item.question.options[item.userAnswer as keyof typeof item.question.options]})`}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500">Correct:</span>
                      <span className="font-medium text-green-600">
                        {item.question.correct}
                      </span>
                    </div>
                  </div>

                  {!item.isCorrect && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                      <div className="text-xs text-red-800">
                        <span className="font-medium">Error Analysis:</span> {item.errorType}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => toggleExplanation(item.question.id)}
                    className="w-full bg-gray-50 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors !rounded-button"
                  >
                    {showExplanation[item.question.id] ? 'Hide' : 'Show'} Explanation
                  </button>

                  {showExplanation[item.question.id] && (
                    <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="text-sm text-blue-900">
                        <div className="font-medium mb-2">Concept: {item.question.concept}</div>
                        <div className="mb-3">This question tests your understanding of {item.question.concept.toLowerCase()}. The correct approach involves analyzing the given conditions and applying the relevant physics principles.</div>
                        <div className="space-y-2">
                          <div className="font-medium">Helpful Resources:</div>
                          <div className="text-xs space-y-1">
                            <div>• Khan Academy: {item.question.topic}</div>
                            <div>• NCERT Physics Chapter on {item.question.topic}</div>
                            <div>• Physics Galaxy: {item.question.concept}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* AI Thinking Analysis */}
                  <button
                    onClick={() => toggleAIAnalysis(item.question.id)}
                    className="w-full bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 py-2 rounded-lg text-sm font-medium hover:from-purple-100 hover:to-indigo-100 transition-colors mt-2 border border-purple-200 !rounded-button"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <i className="ri-brain-line"></i>
                      {showAIAnalysis[item.question.id] ? 'Hide' : 'Show'} AI Thinking Analysis
                    </div>
                  </button>

                  {showAIAnalysis[item.question.id] && (
                    <div className="mt-3 space-y-4">
                      {/* Correct Approach */}
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="text-sm text-green-900">
                          <div className="font-medium mb-2 flex items-center gap-2">
                            <i className="ri-check-line"></i>
                            Correct Thinking Approach
                          </div>
                          <div className="text-xs leading-relaxed">{item.thinkingAnalysis.correctApproach}</div>
                        </div>
                      </div>

                      {/* User Thinking Analysis */}
                      <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                        <div className="text-sm text-orange-900">
                          <div className="font-medium mb-2 flex items-center gap-2">
                            <i className="ri-user-line"></i>
                            Your Thinking Process
                          </div>
                          <div className="text-xs leading-relaxed">{item.thinkingAnalysis.userThinking}</div>
                        </div>
                      </div>

                      {/* Root Cause */}
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="text-sm text-red-900">
                          <div className="font-medium mb-2 flex items-center gap-2">
                            <i className="ri-search-line"></i>
                            Root Cause Analysis
                          </div>
                          <div className="text-xs leading-relaxed">{item.thinkingAnalysis.rootCause}</div>
                        </div>
                      </div>

                      {/* Cognitive Error */}
                      <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="text-sm text-purple-900">
                          <div className="font-medium mb-2 flex items-center gap-2">
                            <i className="ri-mind-map"></i>
                            Cognitive Pattern
                          </div>
                          <div className="text-xs leading-relaxed">{item.thinkingAnalysis.cognitiveError}</div>
                        </div>
                      </div>

                      {/* AI Recommendation */}
                      <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                        <div className="text-sm text-indigo-900">
                          <div className="font-medium mb-2 flex items-center gap-2">
                            <i className="ri-lightbulb-line"></i>
                            AI Recommendation
                          </div>
                          <div className="text-xs leading-relaxed">{item.thinkingAnalysis.recommendation}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* AI Insights */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <i className="ri-brain-line text-purple-600"></i>
              </div>
              <div className="font-semibold text-gray-900">AI Insights</div>
            </div>
            <div className="text-sm text-gray-700 space-y-2">
              <div>• Strongest area: {analysis.filter(a => a.isCorrect)[0]?.question.topic || 'Keep practicing'}</div>
              <div>• Most common error: Formula confusion</div>
              <div>• Suggested study time: 2-3 hours daily</div>
              <div>• Expected percentile: {Math.min(85, score * 17)}th</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <Link href="/test">
              <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-semibold shadow-lg !rounded-button">
                Take Another Test
              </button>
            </Link>
            <Link href="/analytics">
              <button className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-semibold border border-indigo-600 !rounded-button">
                View Detailed Analytics
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const toggleExplanation = (questionId: number) => {
  setShowExplanation(prev => ({
    ...prev,
    [questionId]: !prev[questionId]
  }));
};

const setShowExplanation = (showExplanation: {[key: number]: boolean}) => {
  // This function is not implemented in the provided code
}
