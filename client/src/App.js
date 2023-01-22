import React, { useEffect, useState } from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import FrameList from "./components/framesList";
import Register from "./components/registerPanel";
 
const App = () => {
  
 const [frames, setFrames] = useState([]);


 return (
   <div>
     <Routes>
       <Route exact path="/dashboard" element={<FrameList />} />
       <Route exact path="/register" element={<Register />} />
       {/* <Route exact path="/login" /> */}
       <Route exact path="/callback" />
       <Route exact path="/" />
       {/* <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} /> */}
     </Routes>
   </div>
 );
};
 
export default App;