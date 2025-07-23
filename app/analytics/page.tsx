
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Analytics() {
  const [activeTab, setActiveTab] = useState('overview');

  const strengthsWeaknesses = {
    strengths: [
      { topic: 'Mechanics', score: 85, trend: 'up' },
      { topic: 'Thermodynamics', score: 78, trend: 'up' },
      { topic: 'Waves & Sound', score: 72, trend: 'stable' }
    ],
    weaknesses: [
      { topic: 'Modern Physics', score: 45, trend: 'down' },
      { topic: 'Optics', score: 52, trend: 'up' },
      { topic: 'Electromagnetism', score: 58, trend: 'stable' }
    ]
  };

  const studyPlan = [
    { topic: 'Modern Physics', timeNeeded: '15-20 hours', priority: 'High', concepts: ['Photoelectric Effect', 'Bohr Model', 'Nuclear Physics'] },
    { topic: 'Optics', timeNeeded: '10-12 hours', priority: 'Medium', concepts: ['Ray Optics', 'Wave Optics', 'Optical Instruments'] },
    { topic: 'Electromagnetism', timeNeeded: '8-10 hours', priority: 'Medium', concepts: ['Magnetic Fields', 'Electromagnetic Induction'] }
  ];

  const motivationalQuotes = [
    "Success is the sum of small efforts repeated day in and day out.",
    "The expert in anything was once a beginner.",
    "Every problem is a gift—without problems we would not grow.",
    "Physics is not a religion. If it were, we'd have a much easier time raising money."
  ];

  const studyTips = [
    { title: 'Practice Daily', description: 'Solve at least 5 problems every day', icon: 'ri-calendar-check-line' },
    { title: 'Time Management', description: 'Use Pomodoro technique for focused study', icon: 'ri-time-line' },
    { title: 'Concept Clarity', description: 'Understand concepts before memorizing formulas', icon: 'ri-lightbulb-line' },
    { title: 'Mock Tests', description: 'Take weekly full-length mock tests', icon: 'ri-file-text-line' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 pb-20">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <i className="ri-arrow-left-line text-gray-600"></i>
          </Link>
          <div className="font-semibold">Analytics & Insights</div>
          <div className="w-8 h-8"></div>
        </div>
      </nav>

      <div className="px-4 pt-8">
        <div className="max-w-md mx-auto">
          {/* Tab Navigation */}
          <div className="flex bg-white rounded-xl p-1 shadow-sm mb-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors !rounded-button ${
                activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'text-gray-600'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('improvement')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors !rounded-button ${
                activeTab === 'improvement' ? 'bg-indigo-600 text-white' : 'text-gray-600'
              }`}
            >
              Improvement
            </button>
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Performance Prediction */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="ri-trophy-line text-white text-lg"></i>
                  </div>
                  <div>
                    <div className="font-semibold">Predicted JEE Percentile</div>
                    <div className="text-indigo-200 text-sm">Based on current performance</div>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">87.5%</div>
                <div className="text-indigo-200 text-sm">
                  You're performing better than 87.5% of JEE aspirants nationwide
                </div>
              </div>

              {/* Strengths */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-thumb-up-line text-green-600 text-sm"></i>
                  </div>
                  <h2 className="font-semibold text-gray-900">Your Strengths</h2>
                </div>
                <div className="space-y-3">
                  {strengthsWeaknesses.strengths.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900">{item.topic}</span>
                        <div className={`w-4 h-4 flex items-center justify-center ${
                          item.trend === 'up' ? 'text-green-600' : 'text-gray-400'
                        }`}>
                          <i className={`ri-arrow-${item.trend === 'up' ? 'up' : 'right'}-line text-xs`}></i>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-green-600">{item.score}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weaknesses */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="ri-focus-line text-red-600 text-sm"></i>
                  </div>
                  <h2 className="font-semibold text-gray-900">Areas to Improve</h2>
                </div>
                <div className="space-y-3">
                  {strengthsWeaknesses.weaknesses.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900">{item.topic}</span>
                        <div className={`w-4 h-4 flex items-center justify-center ${
                          item.trend === 'up' ? 'text-green-600' : item.trend === 'down' ? 'text-red-600' : 'text-gray-400'
                        }`}>
                          <i className={`ri-arrow-${item.trend === 'up' ? 'up' : item.trend === 'down' ? 'down' : 'right'}-line text-xs`}></i>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-red-600">{item.score}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Analysis */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <h2 className="font-semibold text-gray-900 mb-4">Time Analysis</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">4.2min</div>
                    <div className="text-xs text-gray-600">Avg per question</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">26min</div>
                    <div className="text-xs text-gray-600">Total test time</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="text-sm text-yellow-800">
                    You're spending too much time on difficult questions. Practice time management!
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'improvement' && (
            <div className="space-y-6">
              {/* Personalized Study Plan */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-book-open-line text-blue-600 text-sm"></i>
                  </div>
                  <h2 className="font-semibold text-gray-900">Personalized Study Plan</h2>
                </div>
                <div className="space-y-4">
                  {studyPlan.map((plan, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-gray-900">{plan.topic}</div>
                        <div className={`px-2 py-1 rounded text-xs font-medium ${
                          plan.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {plan.priority} Priority
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        Estimated time: {plan.timeNeeded}
                      </div>
                      <div className="text-xs text-gray-500">
                        Focus on: {plan.concepts.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Study Tips */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-lightbulb-line text-green-600 text-sm"></i>
                  </div>
                  <h2 className="font-semibold text-gray-900">Study Tips & Habits</h2>
                </div>
                <div className="space-y-3">
                  {studyTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${tip.icon} text-indigo-600 text-sm`}></i>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{tip.title}</div>
                        <div className="text-xs text-gray-600">{tip.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Motivational Section */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="ri-heart-line text-white text-sm"></i>
                  </div>
                  <h2 className="font-semibold">Daily Motivation</h2>
                </div>
                <div className="text-sm italic mb-4">
                  "{motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]}"
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-sm font-medium mb-1">Today's Goal</div>
                  <div className="text-xs text-purple-100">
                    Complete 5 Modern Physics problems and review Photoelectric Effect concept
                  </div>
                </div>
              </div>

              {/* Resource Links */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <h2 className="font-semibold text-gray-900 mb-4">Recommended Resources</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <i className="ri-youtube-line text-red-600"></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">Khan Academy</div>
                      <div className="text-xs text-gray-600">Free physics courses</div>
                    </div>
                    <i className="ri-external-link-line text-gray-400"></i>
                  </div>
                  <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-book-line text-blue-600"></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">NCERT Physics</div>
                      <div className="text-xs text-gray-600">Official textbooks</div>
                    </div>
                    <i className="ri-external-link-line text-gray-400"></i>
                  </div>
                  <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <i className="ri-star-line text-purple-600"></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm">Physics Galaxy</div>
                      <div className="text-xs text-gray-600">Advanced concepts</div>
                    </div>
                    <i className="ri-external-link-line text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto grid grid-cols-5 px-0">
          <Link href="/" className="flex flex-col items-center justify-center py-3 text-gray-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-home-5-line text-lg"></i>
            </div>
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/test" className="flex flex-col items-center justify-center py-3 text-gray-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-file-text-line text-lg"></i>
            </div>
            <span className="text-xs mt-1">Test</span>
          </Link>
          <Link href="/smart-study" className="flex flex-col items-center justify-center py-3 text-gray-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-brain-line text-lg"></i>
            </div>
            <span className="text-xs mt-1">Study</span>
          </Link>
          <Link href="/ai-tutor" className="flex flex-col items-center justify-center py-3 text-gray-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-robot-line text-lg"></i>
            </div>
            <span className="text-xs mt-1">AI Tutor</span>
          </Link>
          <Link href="/analytics" className="flex flex-col items-center justify-center py-3 text-indigo-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-bar-chart-fill text-lg"></i>
            </div>
            <span className="text-xs font-medium mt-1">Analytics</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
