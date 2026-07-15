import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import VerifyOTP from './pages/VerifyOTP';

import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute allowedRole="TENANT ADMIN" />}>
          <Route path="/dashboard-admin" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
