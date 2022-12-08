import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Layout from './Components/Layout';
import Home from './MOVE/Home';
import About from './MOVE/About';
import Contact from './MOVE/Contact';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddUser from './MOVE/AddUser';
import EditUser from './MOVE/EditUser';
import User from './MOVE/User';
import NotFound from './MOVE/NotFound';

function App() {
  return (
<Router>
<div className="App">
      <Layout/>

      <Routes>

        <Route path="/" element={<Home/>}exact/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route exact path="/*" element={<NotFound />} />
        <Route exact path="/users/add" element={<AddUser/>} />
          <Route exact path="/users/edit/:id" element={<EditUser />} />
          <Route exact path="/users/:id" element={<User />} />
        
      </Routes>

      </div>
      
    </Router>


      
   
  );
}

export default App;
