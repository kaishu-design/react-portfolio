import './App';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/HomePage"  element={<HomePage />} />
          <Route path="/ProjectsPage"  element={<ProjectsPage />} />
          <Route path="/AboutPage"  element={<AboutPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
    );
  }

export default App;
