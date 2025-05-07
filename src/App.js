import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UsersList from './pages/UsersList';
import EditUser from './pages/EditUser';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/ajouter" element={<UserForm />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
