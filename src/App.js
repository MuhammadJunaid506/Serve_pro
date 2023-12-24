import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './views/Home/index';
import Service from './views/Service/index';
import Contact from './views/Contact/index';
import About from './views/About/index';
import Locations from './views/Locations/index';
import Reviews from './views/Reviews/index.js';
import ReceivedMessage from './views/ReceivedMessage/index.js';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/received-message" element={<ReceivedMessage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
