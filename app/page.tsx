
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-pacifico text-xl text-indigo-600">JEE Physics Pro</div>
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
            <i className="ri-user-line text-white text-sm"></i>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 px-4 pb-6">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6">
            <img 
              src="https://readdy.ai/api/search-image?query=3D%20illustration%20of%20physics%20symbols%20and%20formulas%20floating%20around%20a%20brain%2C%20modern%20education%20concept%2C%20vibrant%20blue%20and%20purple%20gradients%2C%20clean%20minimalist%20design%2C%20centered%20composition%2C%20soft%20lighting%2C%20futuristic%20academic%20theme&width=300&height=200&seq=hero1&orientation=landscape"
              alt="Physics Learning"
              className="w-full h-48 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Master JEE Physics with AI-Powered Insights</h1>
          <p className="text-gray-600 text-sm mb-8">Practice with previous year questions, get detailed analytics, and identify your weak areas with intelligent feedback</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-4 mb-8">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-indigo-600">500+</div>
            <div className="text-xs text-gray-600">PYQ Questions</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">95%</div>
            <div className="text-xs text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600">AI</div>
            <div className="text-xs text-gray-600">Analytics</div>
          </div>
        </div>
      </div>

      {/* Main Actions */}
      <div className="px-4 mb-8">
        <div className="max-w-md mx-auto space-y-4">
          <Link href="/test">
            <div className="bg-indigo-600 text-white rounded-2xl p-4 flex items-center justify-between shadow-lg active:scale-95 transition-transform">
              <div>
                <div className="font-semibold text-lg">Start Practice Test</div>
                <div className="text-indigo-200 text-sm">5 PYQ Questions • 30 mins</div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-play-fill text-white text-xl"></i>
              </div>
            </div>
          </Link>

          <Link href="/smart-study">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-4 flex items-center justify-between shadow-lg active:scale-95 transition-transform">
              <div>
                <div className="font-semibold text-lg">AI Smart Study</div>
                <div className="text-purple-200 text-sm">Personalized Learning Path</div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-brain-fill text-white text-xl"></i>
              </div>
            </div>
          </Link>

          <Link href="/ai-tutor">
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border">
              <div>
                <div className="font-semibold text-gray-900">AI Physics Tutor</div>
                <div className="text-gray-500 text-sm">Ask questions, get instant help</div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <i className="ri-robot-line text-white"></i>
              </div>
            </div>
          </Link>

          <Link href="/dashboard">
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border">
              <div>
                <div className="font-semibold text-gray-900">View Dashboard</div>
                <div className="text-gray-500 text-sm">Performance & Analytics</div>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <i className="ri-dashboard-line text-gray-600"></i>
              </div>
            </div>
          </Link>

          <Link href="/analytics">
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border">
              <div>
                <div className="font-semibold text-gray-900">Study Analytics</div>
                <div className="text-gray-500 text-sm">Strengths & Improvements</div>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <i className="ri-bar-chart-line text-gray-600"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-4 mb-20">
        <div className="max-w-md mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Why Choose JEE Physics Pro?</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20brain%20with%20gears%2C%20AI%20intelligence%20concept%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20blue%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20clean%20and%20modern%20look&width=100&height=100&seq=feature1&orientation=squarish"
                  alt="AI Analytics"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="font-medium text-gray-900 text-sm">AI Analytics</div>
              <div className="text-xs text-gray-500">Deep insights</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20stack%20of%20books%20and%20papers%2C%20academic%20study%20concept%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20green%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20clean%20and%20modern%20look&width=100&height=100&seq=feature2&orientation=squarish"
                  alt="PYQ Database"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="font-medium text-gray-900 text-sm">PYQ Database</div>
              <div className="text-xs text-gray-500">500+ questions</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20target%20with%20arrow%2C%20precision%20accuracy%20concept%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20purple%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20clean%20and%20modern%20look&width=100&height=100&seq=feature3&orientation=squarish"
                  alt="Performance Tracking"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="font-medium text-gray-900 text-sm">Performance</div>
              <div className="text-xs text-gray-500">Track progress</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20graduation%20cap%20with%20diploma%2C%20academic%20achievement%20concept%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20orange%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20clean%20and%20modern%20look&width=100&height=100&seq=feature4&orientation=squarish"
                  alt="JEE Focused"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="font-medium text-gray-900 text-sm">JEE Focused</div>
              <div className="text-xs text-gray-500">Exam pattern</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto grid grid-cols-5 px-0">
          <Link href="/" className="flex flex-col items-center justify-center py-3 text-indigo-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-home-5-fill text-lg"></i>
            </div>
            <span className="text-xs font-medium mt-1">Home</span>
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
