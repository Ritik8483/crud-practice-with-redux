import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import User from './pages/User';
import AddUser from './pages/AddUser';

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<User/>} />
            <Route path='/adduser' element={<AddUser/>} />
            <Route path='/edituser/:id' element={<AddUser/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
