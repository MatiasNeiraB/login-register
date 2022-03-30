import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home';
import Materias from './pages/Materias';
import Alumnos from './pages/Alumnos';




function App() {
  return (
    <Router>
      <NavbarComp />
      <div className='flex'>
        <Sidebar />
        <div className='content components' >
          <Route path='/' exact={true} component={Home} />
          <Route path='/materias' exact={true} component={Materias} />
          <Route path='/alumnos' exact={true} component={Alumnos} />
        </div>
      </div>
    </Router>
  );
}

export default App;
