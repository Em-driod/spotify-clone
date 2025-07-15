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
      image: '/frame 2.png',
      title: 'Intuitive Interface',
      description: 'Verified listing only agents.Every property is verified for authentication',
      desp:'Say goodbye to fake listings and disconnected.'
    },
    {
      image: '/frame 3.png',
      title: 'Get Started Instantly',
      description: 'Direct Communication',
      desp: 'Connect directly with agents and landlords through secure in-app messaging, Whatsapp, or phone calls!',
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
