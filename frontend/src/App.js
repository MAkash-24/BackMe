import "./App.css";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/main/Signup";
import EventHandling from "./components/main/EventHandling";
import ManageUsers from "./components/main/ManageUsers";
import Main from "./components/main";
import User from "./components/user";
import UserProfile from "./components/user/UserProfile";
import UserLanding from "./components/user/UserLanding";
import DatabaseConvertor from "./components/user/DatabaseConvertor";
import APIGenerator from "./components/user/APIGenerator";
import Feedback from "./components/user/Feedback";
function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/main/home" />} />
          <Route path="main" element={<Main />} >
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="event" element={<EventHandling />} />
            <Route path="manageUser" element={<ManageUsers />} />
          </Route>
          <Route path="user" element={<User />} >
            <Route path="userLanding" element={<UserLanding/>}/>
            <Route path="feedback" element={<Feedback/>}/>
            <Route path="profile" element={<UserProfile />} />
          
            <Route path="databaseConverter" element={<DatabaseConvertor/>}/>
            <Route path="apiGenerator" element={<APIGenerator/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;