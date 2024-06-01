import React from "react";
import { Link,Outlet } from "react-router-dom";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Accueil from "./pages/Accueil";
import Student from "./pages/Student";
import Inscription from "./pages/Inscription";
import Formation from "./pages/Formation";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
export default function App(){
  return(
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Navbar/>}>
    <Route index element={<Accueil/>}/>
 <Route path="formation" element={<Formation/>}></Route>
 <Route path="inscription" element={<Inscription/>}></Route> 
 <Route path="student" element={<Student/>}></Route> 
 <Route path="addStudent" element={<AddStudent/>}></Route> 
 <Route path="student/:id" element={<EditStudent/>}></Route>

  </Route>


</Routes>



</BrowserRouter>


</>
  );
};
const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);