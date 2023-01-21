import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import FrameList from "./components/framesList";
 
const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/" element={<FrameList />} />
       {/* <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} /> */}
     </Routes>
   </div>
 );
};
 
export default App;