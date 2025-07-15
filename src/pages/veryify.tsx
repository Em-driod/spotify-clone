
import { HiOutlineHome, HiOutlineUser, HiOutlineOfficeBuilding, HiOutlineKey } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Welcome = () => {
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowGoogleModal(false);
      navigate('/Customer');
    }, 1800); // Simulate loading
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative">
      {/* Logo */}
      <div className="bg-gradient-to-tr from-purple-900 to-black rounded-full p-4 mb-6">
        <HiOutlineHome className="text-white text-3xl" />
      </div>

      {/* Welcome Text */}
      <h1 className="text-lg font-medium">Welcome to Spacefinder NG</h1>
      <p className="text-sm text-gray-500 mb-8">How would you like to use our platform?</p>

      {/* Options */}
      <div className="w-full max-w-xs space-y-4">
        <button
          className="w-full border border-blue-400 rounded-xl p-4 flex items-center gap-3 hover:bg-blue-50 transition"
          onClick={() => setShowGoogleModal(true)}
        >
          <HiOutlineUser className="text-blue-500 text-xl" />
          <div className="text-left">
            <p className="text-sm font-semibold text-black">I'm looking for a property</p>
            <p className="text-xs text-gray-500">Find your next home</p>
          </div>
        </button>
      {/* Google Signup Modal */}
      <AnimatePresence>
        {showGoogleModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xs flex flex-col items-center relative"
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: 'spring', bounce: 0.35, duration: 0.5 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
                onClick={() => setShowGoogleModal(false)}
                disabled={loading}
              >
                ×
              </button>
              <motion.img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Logo"
                className="w-12 h-12 mb-4"
                initial={{ scale: 0.7, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              />
              <h2 className="text-lg font-bold mb-2 text-gray-800">Sign up with Google</h2>
              <p className="text-sm text-gray-500 mb-6">Continue to find your next home</p>
              <motion.button
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-all text-base mb-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleGoogleSignup}
                disabled={loading}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google icon" className="w-5 h-5" />
                {loading ? 'Signing you in...' : 'Sign up with Google'}
              </motion.button>
              {loading && (
                <motion.div
                  className="mt-4 flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-2"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  />
                  <span className="text-xs text-gray-500">Loading...</span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

<Link to="/back" >
        <button className="w-full border mt-5 border-green-400 rounded-xl p-4 flex items-center gap-3 hover:bg-green-50 transition">
          <HiOutlineOfficeBuilding className="text-green-500 text-xl" />
          <div className="text-left">
            
              <p className="text-sm font-semibold text-black">I'm a Real Estate Agent</p>
              <p className="text-xs text-gray-500">List and manage properties</p>
           
          </div>
           
        </button>
         </Link>
 <Link to="/landsignin" >
        <button className="w-full border mt-5 border-orange-400 rounded-xl p-4 flex items-center gap-3 hover:bg-orange-50 transition">
          <HiOutlineKey className="text-orange-500 text-xl" />
          <div className="text-left">
           
              <p className="text-sm font-semibold text-black">I'm a Landlord</p>
              <p className="text-xs text-gray-500">Rent out my properties</p>
          
          </div>
        </button>
          </Link>
      </div>

      {/* Sign in */}
      <p className="text-xs text-gray-500 mt-2 ml-56">
        <Link to="/back">
          <span className="text-blue-600 cursor-pointer hover:underline">Sign in</span>
        </Link>
      </p>
    </div>
  );
};

export default Welcome;
