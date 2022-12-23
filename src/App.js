import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/favorites';
import NewMeetup from './pages/newMeetup';
import Layout from './Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<NewMeetup />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
