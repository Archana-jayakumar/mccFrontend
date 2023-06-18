
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar";

import Login from './pages/Login';
import Home from './pages/home';
import About from './pages/about';
import SignUp from './pages/Signup';
import Company from './pages/Company';
import Analyser from './pages/Analyser';
import Review from './pages/Review';
import Cocubes from './pages/Cocubes';
import Amcat from "./pages/Amcat";
import Display from "./pages/Display";


function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Company" element={<Company/>}/>
       <Route path="/analyser" element={<Analyser/>}/>
        <Route path="/SignUp" element={<SignUp />} />
       <Route path="/review" element={<Review />}/>
       <Route path="/Cocubes" element={<Cocubes />}/>
       <Route path="/Amcat" element={<Amcat />}/>
       <Route path="/Display" element={<Display />}/>

      
        <Route exact path="/" component={<Home/>} />
        <Route path="/about" component={<About/>} />
        <Route path="/Company" component={<Company/>}/>
        <Route path="/Analyser" component={<Analyser/>}/>
        <Route path="/Review" component={<Review/>}/>
        <Route path="/Cocubes" component={<Cocubes/>}/>
        <Route path="/Amcat" component={<Amcat/>}/>
        <Route path="/Display" component={<Display/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;