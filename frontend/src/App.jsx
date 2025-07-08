import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/shared/Navbar';
import Homepage from '@/components/pages/Homepage';
import News from '@/components/pages/News';
import Teams from '@/components/pages/Teams';
import Drivers from '@/components/pages/Drivers';
import Tracks from '@/components/pages/Tracks';




function App() {
  return (
<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<News />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/tracks" element={<Tracks />} />
       
      </Routes>
    </Router>
  );
}

export default App;
