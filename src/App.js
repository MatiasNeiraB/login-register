import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Register from './pages/Register';




function App() {
  return (
    <Router>
      <div className='flex'>
        <div className='components' >
          <Route path='/login' exact={true} component={Login} />
          <Route path='/register' exact={true} component={Register} />
        </div>
      </div>
    </Router>
  );
}

export default App;
