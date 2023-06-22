import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Contact from './Pages/Contact';
import Error from './Pages/Error'
import Protected from './Components/Protected';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard' element={<Protected Component={Dashboard}/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
