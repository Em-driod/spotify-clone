import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import OnboardingStep from './onboard';

const Skips = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const onboardingData = [
    {
      image: '/Frame 1.png',
      title: 'Welcome to Our App!',
      description: 'Welcome to Spacefinder NG..',
      desp:'Your trusted property marketplace for verified listings and real contacts.',
  
    },
    {
      image: 'https://via.placeholder.com/400x300/1E90FF/FFFFFF?text=Step+2+Image',
      title: 'Intuitive Interface',
      description: 'Navigate with ease through our user-friendly and modern design.',
      desp:'fqtghjKJKLM,'
    },
    {
      image: 'https://via.placeholder.com/400x300/32CD32/FFFFFF?text=Step+3+Image',
      title: 'Get Started Instantly',
      description: 'It\'s simple to begin your journey. Just a few clicks away!',
    },
  ];

  const totalSteps = onboardingData.length;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate('/welcome'); // Or wherever you want
    }
  };

  const handleSkip = () => {
    navigate('/welcome');
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center top-7 min-h-screen bg-white text-gray-900 p-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <OnboardingStep
        image={onboardingData[currentStep].image}
        title={onboardingData[currentStep].title}
        description={onboardingData[currentStep].description}
        desp={onboardingData[currentStep].desp || ''}
        currentStep={currentStep}
        totalSteps={totalSteps}
        onNext={handleNext}
        onSkip={handleSkip}
      />
    </motion.div>
  );
};

export default Skips;
