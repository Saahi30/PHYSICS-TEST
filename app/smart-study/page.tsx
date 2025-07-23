'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SmartStudy() {
  const [activeMode, setActiveMode] = useState('adaptive');

  const adaptiveLearning = {
    currentTopic: 'Circular Motion',
    difficulty: 'Intermediate',
    confidence: 65,
    nextConcepts: ['Angular Momentum', 'Rotational Dynamics', 'Simple Harmonic Motion'],
    weakAreas: ['Vector Analysis', 'Trigonometry Applications'],
    timeEstimate: '45 minutes'
  };

  const studyModes = [
    {
      id: 'adaptive',
      name: 'Adaptive Learning',
      description: 'AI customizes content based on your performance',
      icon: 'ri-brain-line',
      color: 'bg-purple-500'
    },
    {
      id: 'concept',
      name: 'Concept Mastery',
      description: 'Deep dive into specific physics concepts',
      icon: 'ri-lightbulb-line',
      color: 'bg-blue-500'
    },
    {
      id: 'mistake',
      name: 'Mistake Analysis',
      description: 'Learn from your common error patterns',
      icon: 'ri-search-eye-line',
      color: 'bg-red-500'
    },
    {
      id: 'speed',
      name: 'Speed Training',
      description: 'Improve problem-solving speed for JEE',
      icon: 'ri-timer-line',
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 pb-20">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <i className="ri-arrow-left-line text-gray-600"></i>
          </Link>
          <div className="font-semibold">Smart Study</div>
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
            <i className="ri-graduation-cap-line text-white text-sm"></i>
          </div>
        </div>
      </nav>

      <div className="px-4 pt-8">
        <div className="max-w-md mx-auto">
          {/* AI Learning Status */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-brain-line text-white text-lg"></i>
              </div>
              <div>
                <div className="font-semibold">AI Learning Engine</div>
                <div className="text-indigo-200 text-sm">Personalized for your learning style</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">87%</div>
                <div className="text-indigo-200 text-xs">Learning Efficiency</div>
              </div>
              <div>
                <div className="text-2xl font-bold">15</div>
                <div className="text-indigo-200 text-xs">Concepts Mastered</div>
              </div>
            </div>
          </div>

          {/* Study Modes */}
          <div className="space-y-3 mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Choose Study Mode</h2>
            {studyModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`w-full p-4 rounded-2xl border-2 transition-all !rounded-button ${
                  activeMode === mode.id
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${mode.color} rounded-full flex items-center justify-center`}>
                    <i className={`${mode.icon} text-white text-lg`}></i>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-gray-900">{mode.name}</div>
                    <div className="text-sm text-gray-600">{mode.description}</div>
                  </div>
                  {activeMode === mode.id && (
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Adaptive Learning Content */}
          {activeMode === 'adaptive' && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Your Personalized Learning Path</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                    <div>
                      <div className="font-medium text-gray-900">Current Focus</div>
                      <div className="text-sm text-gray-600">{adaptiveLearning.currentTopic}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-blue-600">{adaptiveLearning.confidence}%</div>
                      <div className="text-xs text-gray-500">Confidence</div>
                    </div>
                  </div>

                  <div className="p-3 bg-yellow-50 rounded-xl">
                    <div className="font-medium text-gray-900 mb-2">Strengthen These Areas</div>
                    <div className="flex flex-wrap gap-2">
                      {adaptiveLearning.weakAreas.map((area, index) => (
                        <span key={index} className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded-full">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 rounded-xl">
                    <div className="font-medium text-gray-900 mb-2">Ready to Learn Next</div>
                    <div className="space-y-1">
                      {adaptiveLearning.nextConcepts.slice(0, 2).map((concept, index) => (
                        <div key={index} className="text-sm text-gray-700">• {concept}</div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold mt-4 !rounded-button">
                    Start Adaptive Session ({adaptiveLearning.timeEstimate})
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Concept Mastery Content */}
          {activeMode === 'concept' && (
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Concept Deep Dive</h3>

              <div className="space-y-3">
                {['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Modern Physics', 'Optics'].map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index < 2 ? 'bg-green-100 text-green-600' : index < 4 ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
                        }`}
                      >
                        <i className={`ri-${index < 2 ? 'check' : index < 4 ? 'time' : 'close'}-line text-sm`}></i>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{topic}</div>
                        <div className="text-xs text-gray-500">{index < 2 ? 'Mastered' : index < 4 ? 'In Progress' : 'Needs Work'}</div>
                      </div>
                    </div>
                    <Link href="/ai-tutor">
                      <button className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-medium !rounded-button">
                        Study
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mistake Analysis Content */}
          {activeMode === 'mistake' && (
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Your Error Patterns</h3>

              <div className="space-y-4">
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                  <div className="font-medium text-red-900 mb-2">Most Common Mistake</div>
                  <div className="text-sm text-red-800">Sign convention errors in force problems</div>
                  <div className="text-xs text-red-600 mt-1">Appears in 65% of incorrect answers</div>
                </div>

                <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl">
                  <div className="font-medium text-orange-900 mb-2">Frequent Confusion</div>
                  <div className="text-sm text-orange-800">Mixing up instantaneous vs average quantities</div>
                  <div className="text-xs text-orange-600 mt-1">Focus area for next 3 study sessions</div>
                </div>

                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="font-medium text-yellow-900 mb-2">Improving Area</div>
                  <div className="text-sm text-yellow-800">Vector addition and subtraction</div>
                  <div className="text-xs text-yellow-600 mt-1">25% improvement in last week</div>
                </div>
              </div>

              <button className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold mt-4 !rounded-button">
                Practice Problem Areas
              </button>
            </div>
          )}

          {/* Speed Training Content */}
          {activeMode === 'speed' && (
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Speed Training Dashboard</h3>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-3 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">3.2min</div>
                  <div className="text-xs text-gray-600">Avg Speed</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">2.1min</div>
                  <div className="text-xs text-gray-600">Target Speed</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 border border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Mechanics Problems</span>
                    <span className="text-sm text-green-600">Good pace</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="p-3 border border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Electromagnetism</span>
                    <span className="text-sm text-yellow-600">Needs speed up</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold mt-4 !rounded-button">
                Start Speed Challenge
              </button>
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
          <Link href="/smart-study" className="flex flex-col items-center justify-center py-3 text-indigo-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-brain-fill text-lg"></i>
            </div>
            <span className="text-xs font-medium mt-1">Study</span>
          </Link>
          <Link href="/ai-tutor" className="flex flex-col items-center justify-center py-3 text-gray-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-robot-line text-lg"></i>
            </div>
            <span className="text-xs mt-1">AI Tutor</span>
          </Link>
          <Link href="/analytics" className="flex flex-col items-center justify-center py-3 text-gray-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-bar-chart-line text-lg"></i>
            </div>
            <span className="text-xs mt-1">Analytics</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}