// import './App.css';
// import Login from './component/Login'
// import {Rigester} from './component/Rigester'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./component/LoginForm";
import Home from "./component/Home";
import Counter from "./component/Counter";
import Profile from "./component/Profile";
function App() {
  return (
    <div>
      {/* <nav>
        <Link  to={/}>task1</Link>
        <Link to={/Counter}>task2</Link>
        <Link to={/profile}>task3</Link>
      </nav> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Conter" element={<Counter />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <h1>Asad Is the best</h1> */}
      {/* <Login/> */}
      {/* <Rigester></Rigester> */}
    </div>
  );
}

export default App;
