import Navigation from './Navigation';
import Payment from './Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
