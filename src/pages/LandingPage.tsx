import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false); // ⏳ simulate loading

  useEffect(() => {
    // Simulate page fully loaded before countdown begins
    const loadTimer = setTimeout(() => {
      setShow(true);

      const navTimer = setTimeout(() => {
        navigate('/skip');
      }, 2000); // Navigate after 5 sec

      return () => clearTimeout(navTimer);
    }, 200); // Show landing content after initial render

    return () => clearTimeout(loadTimer);
  }, [navigate]);

  if (!show) return null; // Don't render until "loaded"

  return (
    <motion.div
      className="bg-gradient-to-b from-[#0d1b2a] via-[#4b0082] to-[#8b0000] h-screen w-full flex flex-col justify-center items-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className='flex justify-center items-center mb-6 mt-16'>
        <img
          src="/fan.png"
          alt="AI Concept"
          className='h-64 w-64 object-contain'
        />
      </div>

      <div className='text-center space-y-3'>
        <p className='text-white text-4xl font-extrabold tracking-wide'>Spacefinder NG</p>
        <p className='text-white text-lg font-light italic px-4'>Verify Listings. Real Contacts. Your New Home.</p>
      </div>

      <motion.div
        className='mt-10 text-white text-2xl'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 10.5, repeat: Infinity }}
      >
        <FaArrowDown />
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
