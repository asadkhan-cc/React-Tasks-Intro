// import './App.css';
// import Login from './component/Login'
// import {Rigester} from './component/Rigester'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./component/LoginForm";
import Home from "./component/Home";
import Counter from "./component/Counter";
import Profile from "./component/Profile";
import ArrayTask from "./component/ArrayTask";
import Parent from './Prop Drilling/Parent'
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="flex flex-row align-middle justify-evenly bg-blue-300 rounded  text-xl text-slate-200">
          <Link to="/">Task 1</Link>
          <Link to="/Counter">Task 2</Link>
          <Link to="/profile">Task 3</Link>
          <Link to="/arraytask">Task 4 - 5</Link>
          <Link to="/propdrilling">Task 6</Link>
          <input
            className="max-w-[10rem] max-h-[1rem] my-auto text-xs text-black justify-self-end rounded pl-2  
        "
            type="text"
            placeholder="SEARCH"
          ></input>
        </nav>
        <Routes>
          <Route path="/" element={<LoginForm />}>
            <Route path="/home" element={<Home />}></Route>
          </Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/arraytask" element={<ArrayTask />}></Route>
          <Route path="/propdrilling" element={<Parent />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <h1>Asad Is the best</h1> */}
      {/* <Login/> */}
      {/* <Rigester></Rigester> */}
    </div>
  );
}

export default App;
