
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const stats = {
    testsCompleted: 12,
    averageScore: 76,
    totalQuestions: 60,
    correctAnswers: 45,
    studyStreak: 7,
    rank: 1247
  };

  const recentTests = [
    { id: 1, date: '2024-01-15', score: 4, total: 5, topics: ['Circular Motion', 'Newton\'s Laws'], duration: '28 min' },
    { id: 2, date: '2024-01-13', score: 3, total: 5, topics: ['Thermodynamics', 'Waves'], duration: '30 min' },
    { id: 3, date: '2024-01-12', score: 5, total: 5, topics: ['Electromagnetism'], duration: '25 min' },
    { id: 4, date: '2024-01-10', score: 2, total: 5, topics: ['Optics', 'Modern Physics'], duration: '30 min' }
  ];

  const topicPerformance = [
    { topic: 'Mechanics', score: 85, questions: 25, color: 'bg-green-500' },
    { topic: 'Thermodynamics', score: 72, questions: 15, color: 'bg-blue-500' },
    { topic: 'Electromagnetism', score: 68, questions: 20, color: 'bg-yellow-500' },
    { topic: 'Optics', score: 45, questions: 10, color: 'bg-red-500' },
    { topic: 'Modern Physics', score: 38, questions: 8, color: 'bg-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 pb-20">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <i className="ri-arrow-left-line text-gray-600"></i>
          </Link>
          <div className="font-semibold">Dashboard</div>
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
            <i className="ri-user-line text-white text-sm"></i>
          </div>
        </div>
      </nav>

      <div className="px-4 pt-8">
        <div className="max-w-md mx-auto">
          {/* Welcome Section */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back!</h1>
            <p className="text-gray-600">Here's your learning progress</p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-indigo-600">{stats.testsCompleted}</div>
              <div className="text-xs text-gray-600">Tests Completed</div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-green-600">{stats.averageScore}%</div>
              <div className="text-xs text-gray-600">Average Score</div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-orange-600">{stats.studyStreak}</div>
              <div className="text-xs text-gray-600">Day Streak</div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-purple-600">#{stats.rank}</div>
              <div className="text-xs text-gray-600">National Rank</div>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">Performance Trend</h2>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button 
                  onClick={() => setSelectedPeriod('7d')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors !rounded-button ${
                    selectedPeriod === '7d' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
                  }`}
                >
                  7D
                </button>
                <button 
                  onClick={() => setSelectedPeriod('30d')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors !rounded-button ${
                    selectedPeriod === '30d' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
                  }`}
                >
                  30D
                </button>
              </div>
            </div>
            <div className="h-32 mb-4">
              <img 
                src="https://readdy.ai/api/search-image?query=Clean%20minimal%20line%20chart%20showing%20academic%20performance%20over%20time%2C%20upward%20trending%20graph%2C%20blue%20and%20green%20colors%2C%20simple%20data%20visualization%2C%20modern%20dashboard%20style%2C%20white%20background%2C%20professional%20appearance&width=300&height=120&seq=chart1&orientation=landscape"
                alt="Performance Chart"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center text-sm text-gray-600">
              Your scores have improved by 15% this week! 
            </div>
          </div>

          {/* Topic Performance */}
          <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
            <h2 className="font-semibold text-gray-900 mb-4">Topic-wise Performance</h2>
            <div className="space-y-3">
              {topicPerformance.map((topic, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{topic.topic}</span>
                      <span className="text-sm text-gray-600">{topic.score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${topic.color}`}
                        style={{ width: `${topic.score}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{topic.questions} questions attempted</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Tests */}
          <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">Recent Tests</h2>
              <Link href="/test" className="text-indigo-600 text-sm font-medium">
                Take New Test
              </Link>
            </div>
            <div className="space-y-3">
              {recentTests.map((test) => (
                <div key={test.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    test.score >= 4 ? 'bg-green-100 text-green-600' : 
                    test.score >= 3 ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {test.score}/{test.total}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">
                      {new Date(test.date).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-gray-600">
                      {test.topics.join(', ')} • {test.duration}
                    </div>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-arrow-right-s-line text-gray-400"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <Link href="/test">
              <div className="bg-indigo-600 text-white rounded-2xl p-4 text-center shadow-lg">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-play-fill text-white"></i>
                </div>
                <div className="font-semibold text-sm">New Test</div>
              </div>
            </Link>
            <Link href="/analytics">
              <div className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-bar-chart-line text-gray-600"></i>
                </div>
                <div className="font-semibold text-sm text-gray-900">Analytics</div>
              </div>
            </Link>
          </div>
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
          <Link href="/dashboard" className="flex flex-col items-center justify-center py-3 text-indigo-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-dashboard-fill text-lg"></i>
            </div>
            <span className="text-xs font-medium mt-1">Dashboard</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
