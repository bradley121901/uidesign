import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Post from './pages/Post';
import Find from './pages/Find';
import Login from './pages/Login';
import Register from './pages/Register';
import Complete from './pages/Complete';
import Confirm from './pages/Confirm';
import About from './pages/About';
function App() {
  return (
    <>
      <Navbar className="m-auto" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/find" element={<Find />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
