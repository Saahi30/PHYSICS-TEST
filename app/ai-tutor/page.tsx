'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AITutor() {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "Hi! I'm your AI Physics Tutor. I can help you with concepts, solve problems step-by-step, or explain where you went wrong. What would you like to learn today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "Explain circular motion basics",
    "Help with Newton's laws",
    "What is work-energy theorem?",
    "Electromagnetic force concepts",
    "Spring constant problems"
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      setMessages(prev => [...prev, {
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (question: string) => {
    const responses = {
      'circular motion': "Great question! Circular motion involves: \n\n1️⃣ **Centripetal Force**: Always points toward center\n2️⃣ **Angular Velocity**: ω = v/r\n3️⃣ **Centripetal Acceleration**: a = v²/r = ω²r\n\n🎯 **Key Insight**: The speed is constant, but velocity changes due to direction change!\n\nWould you like me to solve a specific problem or explain any part in detail?",
      
      'newton': "Newton's Laws are fundamental! Let me break them down:\n\n**1st Law (Inertia)**: Objects at rest stay at rest, objects in motion stay in motion unless acted upon by a net force.\n\n**2nd Law (F=ma)**: The acceleration of an object is directly proportional to the net force and inversely proportional to mass.\n\n**3rd Law**: For every action, there's an equal and opposite reaction.\n\n💡 **Pro Tip**: Always draw free body diagrams first!\n\nWhat specific scenario would you like help with?",
      
      'work energy': "The Work-Energy Theorem is powerful! \n\n**Statement**: The work done on an object equals the change in its kinetic energy.\n\n**Formula**: W = ΔKE = KE_final - KE_initial\n\n**Key Points**:\n• Work can be positive (speeds up) or negative (slows down)\n• Only forces in direction of motion do work\n• Conservative forces (gravity, springs) have associated potential energy\n\n🚀 **Applications**: Solving problems without knowing acceleration!\n\nWant to see a solved example?",
      
      'electromagnetic': "Electromagnetic forces are fascinating! Here's the breakdown:\n\n**Electric Force**: F = qE (force on charge in electric field)\n**Magnetic Force**: F = q(v × B) (force on moving charge in magnetic field)\n\n**Key Differences**:\n• Electric force: Acts on stationary charges\n• Magnetic force: Only acts on moving charges, always perpendicular to velocity\n\n**Lorentz Force**: F = q(E + v × B) - combined effect\n\n⚡ **Memory Trick**: Right-hand rule for magnetic force direction!\n\nNeed help with a specific electromagnetic problem?",
      
      'spring': "Spring problems use Hooke's Law! Let me explain:\n\n**Hooke's Law**: F = -kx\n• k = spring constant (stiffness)\n• x = displacement from equilibrium\n• Negative sign = restoring force\n\n**Energy**: PE = ½kx²\n\n**Common Scenarios**:\n• Springs in series: 1/k_total = 1/k₁ + 1/k₂\n• Springs in parallel: k_total = k₁ + k₂\n• Cut spring: New k = old k × (old length/new length)\n\n🔧 **Pro Tip**: Shorter springs are stiffer!\n\nWhat specific spring scenario are you working on?"
    };

    const lowerQuestion = question.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
      if (lowerQuestion.includes(key)) {
        return response;
      }
    }

    // Default response with personalized touch
    return `I understand you're asking about "${question}". Let me help you step by step:\n\n🔍 **Analysis Approach**:\n1. Identify what's given and what we need to find\n2. Choose the right physics principles\n3. Set up equations systematically\n4. Solve and check units\n\n💡 **Study Tip**: Based on your recent test performance, I recommend focusing on:\n• Drawing clear diagrams\n• Breaking complex problems into steps\n• Checking your answer makes physical sense\n\nCould you share the specific problem or concept you're struggling with? I'll provide a detailed explanation!`;
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    handleSend();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 pb-20">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <i className="ri-arrow-left-line text-gray-600"></i>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
              <i className="ri-robot-line text-white text-sm"></i>
            </div>
            <div className="font-semibold">AI Physics Tutor</div>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </nav>

      <div className="px-4 pt-4 pb-24">
        <div className="max-w-md mx-auto">
          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Questions</h3>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-full text-xs text-gray-700 hover:bg-gray-50 transition-colors !rounded-button"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="space-y-4 mb-6">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-900 shadow-sm border'
                }`}>
                  {message.type === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <i className="ri-robot-line text-white text-xs"></i>
                      </div>
                      <span className="text-xs font-medium text-gray-600">AI Tutor</span>
                    </div>
                  )}
                  <div className="text-sm leading-relaxed whitespace-pre-line">
                    {message.content}
                  </div>
                  <div className="text-xs opacity-60 mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border shadow-sm px-4 py-3 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <i className="ri-robot-line text-white text-xs"></i>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4">
        <div className="max-w-md mx-auto">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about physics..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors !rounded-button"
            >
              <i className="ri-send-plane-line text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}