import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ShoppingList from './pages/ShoppingList';
import Counter from './pages/Counter';
import Totalcount from './pages/Totalcount';
import Game from './pages/Game';
import Board from './pages/Board';
import Shudo from './pages/Shudo';
import Search from './pages/Search';
import Profile from './components/Profile';
import Theme from './components/Theme';

function App() {
  return (
    <>
    
    <Router>
      <Navbar name={"jone"} />
      <Routes>
        {/* Add your routes here */}
        <Route path="/login" element={< Login />} />
        <Route path="/dashboard" component={ <Dashboard />} />
        <Route path="/users" component={<Users/>} />
        {/* Add a default route */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/totalcount" element={<Totalcount />} />
        <Route path="/game" element={<Game />} />
        <Route path="/board" element={<Board />} />
        <Route path="/shudo" element={<Shudo />} />
        <Route path="/search" element={<Search />} />
        </Routes>
    </Router>
    < Profile />
    < Theme />
    </>
  );
 
}

export default App;
