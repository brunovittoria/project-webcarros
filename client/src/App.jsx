
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import New from './pages/dashboard/new/New';
import Car from './pages/car/Car';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'                   element={  <Home/> }  />
        <Route path='/login'              element={  <Login/> }  />
        <Route path='/register'           element={  <Register/> }  />
        <Route path='/dashboard'          element={  <Dashboard/>}  />
        <Route path='/dashboard/new'      element={  <New/>  }  />
        <Route path='/car:id'             element={  <Car/> }  />
      </Routes>
    </BrowserRouter>
  );
}
