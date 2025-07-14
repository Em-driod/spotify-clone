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
import Manage from './pages/Manage';
import ChatFeature from './pages/ChatFeature';
import Customer from './pages/Customer'; // Import the Customer component
import Custdetail from './pages/Custdetail'; // Import the Custdetail component
import LandlordDashboard from './pages/LandlordDashboard';
import LandlordChats from './pages/LandlordChat';
import MyListings from './pages/MyListing';
import EditListing from './pages/EditListing';

// Import the Edit component
import Edit from './pages/Edit'; // <--- Make sure this path is correct based on where you saved Edit.tsx


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
        <Route path="/Manage" element={<Manage />} />
        <Route path="/messages" element={<ChatFeature />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path='/LandlordDashboard' element={<LandlordDashboard />} />
        <Route path='/LandlordChats' element={<LandlordChats />} />
        <Route
          path='/MyListings'
          element={
            <MyListings
              properties={[]} // Replace with actual properties array or state
              onEdit={() => {}} // Replace with actual handler
              onDelete={() => {}} // Replace with actual handler
              onChat={() => {}} // Replace with actual handler
            />
          }
        />
        <Route
          path='/EditListing'
          element={
            <EditListing
              onSave={() => {
                // TODO: Implement save logic
              }}
              onCancel={() => {
                // TODO: Implement cancel logic
              }}
            />
          }
        />

        {/* Add the route for Customer component */}
        <Route path="/Custdetail" element={<Custdetail />} />

        {/* Add a route for the ChatList if needed */}

        {/* Add the route for the Edit component */}
        <Route path="/edit" element={<Edit />} /> {/* <--- New Route for Edit page */}

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