'use client';

import { useState, useEffect } from 'react';

export default function SpeedMeter() {
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading PageSpeed score
    // In production, this would call Google PageSpeed Insights API
    const timer = setTimeout(() => {
      // Animate to score
      let current = 0;
      const target = 98; // Your actual site score (update this with real API call)
      const increment = target / 50;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setScore(target);
          setIsLoading(false);
          clearInterval(interval);
        } else {
          setScore(Math.floor(current));
        }
      }, 20);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'from-[#43ffae] to-[#13aff0]';
    if (score >= 50) return 'from-yellow-400 to-orange-400';
    return 'from-red-500 to-red-700';
  };

  const getScoreText = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 50) return 'Good';
    return 'Needs Work';
  };

  return (
    <div className="inline-block">
      <div className="bg-[#1b1b1b] border border-gray-800 rounded-xl p-4 hover:border-[#13aff0]/30 transition-colors">
        <div className="flex items-center space-x-4">
          {/* Speed Meter Gauge */}
          <div className="relative">
            <svg className="w-20 h-20 transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="#2a2a2a"
                strokeWidth="6"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="url(#gradient)"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${(score / 100) * 201} 201`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" className="text-[#13aff0]" stopColor="currentColor" />
                  <stop offset="100%" className="text-[#43ffae]" stopColor="currentColor" />
                </linearGradient>
              </defs>
            </svg>
            {/* Score number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-2xl font-bold bg-gradient-to-r ${getScoreColor(score)} bg-clip-text text-transparent`}>
                {score}
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-2 h-2 bg-[#43ffae] rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 uppercase tracking-wide">Live Performance</span>
            </div>
            <div className="text-sm font-semibold text-white">{getScoreText(score)}</div>
            <div className="text-xs text-gray-400">PageSpeed Score</div>
          </div>
        </div>

        {/* Performance badge */}
        <div className="mt-3 pt-3 border-t border-gray-800">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Our Site Performance:</span>
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3 text-[#43ffae]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[#43ffae] font-medium">Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
