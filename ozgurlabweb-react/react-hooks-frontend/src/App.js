import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListLaborantComponent from './components/ListLaborantComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddLaborantComponent from './components/AddLaborantComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
      <div className="container">
      <Routes>
              <Route path = "/" element = {<ListLaborantComponent/>}></Route>
              <Route path = "/laborants" element = {<ListLaborantComponent/>}></Route>
              <Route path = "/add-laborants" element = {<AddLaborantComponent/>}></Route>
              <Route path = "/edit-laborant/:id" element = {<AddLaborantComponent/>}></Route>
       </Routes>
      </div>
      <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
