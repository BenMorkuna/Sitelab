'use client';

import { useState } from 'react';

type Step = 1 | 2 | 3 | 4;

interface FormData {
  projectType: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function MultiStepContactForm() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    timeline: '',
    budget: '',
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { value: 'geo', label: 'GEO Services', icon: '💡', description: 'AI search optimization' },
    { value: 'seo', label: 'SEO Services', icon: '🔍', description: 'Traditional search optimization' },
    { value: 'webdev', label: 'Web Development', icon: '💻', description: 'Professional websites' },
    { value: 'ecommerce', label: 'E-Commerce', icon: '🛒', description: 'Online store solutions' },
  ];

  const timelines = [
    { value: 'urgent', label: 'ASAP', description: '1-2 weeks', icon: '🚀' },
    { value: 'normal', label: 'Standard', description: '3-4 weeks', icon: '📅' },
    { value: 'flexible', label: 'Flexible', description: '1-2 months', icon: '🕐' },
  ];

  const budgets = [
    { value: 'small', label: 'Starter', range: '€500 - €1,500', icon: '💼' },
    { value: 'medium', label: 'Professional', range: '€1,500 - €5,000', icon: '🏢' },
    { value: 'large', label: 'Enterprise', range: '€5,000+', icon: '🏆' },
  ];

  const handleSelection = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });

    // Auto-advance to next step
    setTimeout(() => {
      if (currentStep < 4) {
        setCurrentStep((prev) => (prev + 1) as Step);
      }
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again or email us directly at info@sitelab.lt');
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  const progress = (currentStep / 4) * 100;

  if (isSubmitted) {
    return (
      <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800 text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-[#43ffae] to-[#13aff0] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
        <p className="text-gray-400 mb-6">
          We've received your project details and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
            setFormData({
              projectType: '',
              timeline: '',
              budget: '',
              name: '',
              email: '',
              company: '',
              message: '',
            });
          }}
          className="text-[#13aff0] hover:text-[#43ffae] transition-colors font-medium"
        >
          Submit Another Project
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#1b1b1b] p-8 rounded-2xl border border-gray-800">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-gray-400">Step {currentStep} of 4</span>
          <span className="text-sm font-medium text-[#13aff0]">{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full h-2 bg-[#171717] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#13aff0] to-[#43ffae] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step 1: Project Type */}
      {currentStep === 1 && (
        <div className="animate-fadeIn">
          <h3 className="text-2xl font-bold text-white mb-2">What are we building?</h3>
          <p className="text-gray-400 mb-6">Choose the type of project you need</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => handleSelection('projectType', type.value)}
                className={`p-6 rounded-xl border-2 transition-all text-left hover:scale-105 ${
                  formData.projectType === type.value
                    ? 'border-[#13aff0] bg-[#13aff0]/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <h4 className="text-lg font-bold text-white mb-1">{type.label}</h4>
                <p className="text-sm text-gray-400">{type.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Timeline */}
      {currentStep === 2 && (
        <div className="animate-fadeIn">
          <button
            onClick={goBack}
            className="text-gray-400 hover:text-white mb-4 flex items-center text-sm transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <h3 className="text-2xl font-bold text-white mb-2">What's your timeline?</h3>
          <p className="text-gray-400 mb-6">When do you need this completed?</p>

          <div className="space-y-4">
            {timelines.map((time) => (
              <button
                key={time.value}
                onClick={() => handleSelection('timeline', time.value)}
                className={`w-full p-6 rounded-xl border-2 transition-all text-left hover:scale-[1.02] ${
                  formData.timeline === time.value
                    ? 'border-[#13aff0] bg-[#13aff0]/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{time.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold text-white">{time.label}</h4>
                      <p className="text-sm text-gray-400">{time.description}</p>
                    </div>
                  </div>
                  {formData.timeline === time.value && (
                    <svg className="w-6 h-6 text-[#43ffae]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Budget */}
      {currentStep === 3 && (
        <div className="animate-fadeIn">
          <button
            onClick={goBack}
            className="text-gray-400 hover:text-white mb-4 flex items-center text-sm transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <h3 className="text-2xl font-bold text-white mb-2">What's your budget?</h3>
          <p className="text-gray-400 mb-6">Choose the range that fits your project</p>

          <div className="space-y-4">
            {budgets.map((budget) => (
              <button
                key={budget.value}
                onClick={() => handleSelection('budget', budget.value)}
                className={`w-full p-6 rounded-xl border-2 transition-all text-left hover:scale-[1.02] ${
                  formData.budget === budget.value
                    ? 'border-[#13aff0] bg-[#13aff0]/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{budget.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold text-white">{budget.label}</h4>
                      <p className="text-sm text-gray-400">{budget.range}</p>
                    </div>
                  </div>
                  {formData.budget === budget.value && (
                    <svg className="w-6 h-6 text-[#43ffae]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Contact Details */}
      {currentStep === 4 && (
        <div className="animate-fadeIn">
          <button
            onClick={goBack}
            className="text-gray-400 hover:text-white mb-4 flex items-center text-sm transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <h3 className="text-2xl font-bold text-white mb-2">Almost there!</h3>
          <p className="text-gray-400 mb-6">Tell us how to reach you</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                Additional Details (Optional)
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[#171717] border border-gray-700 text-white focus:border-[#13aff0] focus:ring-2 focus:ring-[#13aff0]/20 transition-all outline-none resize-none"
                placeholder="Any specific requirements or questions..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-[#13aff0] to-[#43ffae] hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#13aff0]/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Get Free Quote'
              )}
            </button>

            <p className="text-sm text-gray-500 text-center">
              We typically respond within 24 hours. Your information is kept confidential.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
