import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Welcome from './pages/veryify';
import LandingPage from './pages/LandingPage';
import Back from './pages/Back';
import Change from './pages/Change';
import Skips from './pages/Skips';
import Otp from './pages/Otp';
import First from './pages/First';
import Second from './pages/second';
import Fourth from './pages/fourth';
import Third from './pages/Third';
import Fifth from './pages/fifth';
import Signup from './pages/Signup';
import Manage


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/skip" element={<Skips />} />
       <Route path="/welcome" element={<Welcome />} />
       <Route path="/back" element={<Back />} />
       <Route path="/forget" element={<Change />} />
       <Route path="/Otp" element={<Otp />} />
       <Route path="/first" element={<First />} />
       <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes as needed */}

      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
