import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/users/Users';
import Register from './pages/Register';
import Login from './pages/Login';
import UserCreate from './pages/users/UserCreate';
import UserEdit from './pages/users/UserEdit';
import Roles from './pages/roles/Roles';
import RoleCreate from './pages/roles/RoleCreate';
import RoleEdit from './pages/roles/RoleEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Dashboard />} />
          <Route path={'/users'} element={<Users />} />
          <Route path={'/users/create'} element={<UserCreate />} />
          <Route path={'/users/:id/edit'} element={<UserEdit />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/roles'} element={<Roles />} />
          <Route path={'/roles/create'} element={<RoleCreate />} />
          <Route path={'/roles/:id/edit'} element={<RoleEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
