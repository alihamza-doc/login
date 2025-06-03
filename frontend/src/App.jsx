import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './assets/mainpage.jsx';
import Login from './assets/login.jsx';
import Signup from './assets/signup.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
