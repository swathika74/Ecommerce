import React from 'react';
import './App.css';
import Login from './login';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { Header}  from './Header';
// import Admin from './admin';
// import Homepage from './homepage';
import { Student } from './components/Student';
import { Arraysample } from './components/Arraysample';
 import { OneofSample } from './components/OneofSample';
import { Firstpage} from './CarBooking/Firstpage';
//  import {Signupincarbooking} from './CarBooking/Signupincarbooking';
// import { UserCard } from './card/UserCard';
// import { MultiTypeComponent } from './components/MultiTypeComponent';

function App() {
  const items =[
    {id:1, name:"item1"},
    {id:2, name:"item2"},
    {id:3, name:"item3"},
  ]
  return (
    <Router>
      <div className="App">
        <Routes>
           <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/firstpage" element={<Firstpage />} /> 
          {/* <Route path="/header" element={<Header/>}/> 
           <Route path="/admin"  element={<Admin/>}/>
          <Route path="/homepage" element={<Homepage/>}/>  */}
           <Route path="/student" element={<Student name="Thenu" age={20} isMarried={true}/>}/> 
           <Route path="/student" element={<Student name="karthika" age={20} isMarried={false} />}/>
          <Route path="/arraysample" element={<Arraysample items={items}/>}/>
          <Route path="/oneofsample" element={<OneofSample  color="blue"/>}/>
           {/* <Route path="/signupincarbooking" element={<Signupincarbooking/>}/> */}

          {/* <Route path="/usercard" element={<UserCard/>}/> */}
          {/* <Route path="/multitypecomponent" element={<MultiTypeComponent value="Hello"/>}/> */}
        </Routes>
         {/* <Student name="Thenu" age={20} isMarried={true}/>
        <Student name="karthika" age={20} isMarried={false}/>  */}

      </div>
    </Router>
  
  );
}

export default App;




