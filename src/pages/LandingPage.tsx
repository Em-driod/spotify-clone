import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setShow(true);

      const navTimer = setTimeout(() => {
        navigate('/skip');
      }, 10000);

      return () => clearTimeout(navTimer);
    }, 200);

    return () => clearTimeout(loadTimer);
  }, [navigate]);

  if (!show) return null;

  return (
    <motion.div
      className="relative h-screen w-full flex flex-col justify-center items-center bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Splash.png" // Replace with your background image path
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center text-white">
        {/* Top Image */}
        <div className="flex justify-center mb-8">
          <img
            src="/fan.png" // Replace with your logo/image path
            alt="Spacefinder Logo"
            className="h-32 w-32 object-contain"
          />
        </div>

        {/* Text Content */}
        <h1 className="text-4xl font-bold mb-4">Spacefinder NG</h1>
        <div className="text-lg leading-relaxed">
          <p>Verify Listings.Real Contacts.</p>
          <p>Your New Home</p>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;