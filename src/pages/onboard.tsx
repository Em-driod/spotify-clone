import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

type OnboardingStepProps = {
  image: string;
  title: string;
  description: string;
  desp: string;
  currentStep: number;
  totalSteps: number;
  onSkip: () => void;
  onNext: () => void;
};

const OnboardingStep: React.FC<OnboardingStepProps> = ({ image, title, description, desp, currentStep, totalSteps, onSkip, onNext }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full max-w-md bg-white top-10 p-6 mt-40 animate-fade-in">
      {/* Image */}
      <div className=" w-full flex justify-center">
        <img
          src={image}
          alt={title}
          className=" max-w-xs h-auto w-16 rounded-lg object-contain mb-6 shadow-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-white  text-center">{title}</h2>

      {/* Description */}
      <p className="text-lg text-black font-bold text-center leading-relaxed">{description}</p>
      <p className='text-center mb-20'>{desp}</p>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center space-x-2 mb-8">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentStep ? 'bg-blue-500' : 'bg-gray-600'
            }`}
          ></span>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col justify-between items-center w-full">
        {/* Skip Button */}
        <button
          onClick={onSkip}
          className="text-gray-400 hover:text-white transition-colors duration-200 text-lg font-medium px-4 py-2 rounded-lg"
        >
          Skip
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-32 py-3 bg-gradient-to-r from-[#0d1b2a] via-[#4b0082] to-[#8b0000] text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
        >
          {currentStep === totalSteps - 1 ? 'Finish' : 'Next'} <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default OnboardingStep;