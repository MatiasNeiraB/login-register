import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home';
import Asignaturas from './pages/Asignaturas';
import Alumnos from './pages/Alumnos';



function App() {
  return (
    <Router>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='content' >
          <Route path='/' exact={true} component={Home} />
          <Route path='/asignaturas' exact={true} component={Asignaturas} />
          <Route path='/alumnos' exact={true} component={Alumnos} />
        </div>
      </div>
    </Router>
  );
}

export default App;
