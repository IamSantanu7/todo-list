import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListDetails from './ListDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route path = "/create" element = {<Create />} />
            <Route path = "/lists/:id" element = {<ListDetails />} />
          </Routes>    
        </div>      
      </div>
    </Router>
  );
}

export default App;
