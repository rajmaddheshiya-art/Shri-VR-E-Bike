// import React, { useState } from "react";
// import b1 from "./assets/b1.png"
// import b2 from "./assets/b2.png"
// import b3 from "./assets/b3.png"

// function App(){
//   let [value, setValue] = useState("")

// const search = [
//     { naam: "Samosa", price: 5, photo: b1 },
//     { naam: "Chai", price: 5, photo: b2 },
//     { naam: "Earphone", price: 500, photo: b3},
//     { naam: "Charger", price: 500, photo: "https://picsum.photos/100?sig=4" }
//   ];

// return(
//   <div >
//     <input type="text" onChange={(e)=>{setValue(e.target.value)}} style={{position:"fixed",top:"5px"}}/>
//     {
//       search.map((item)=>{
//         let userSearch = value.toLowerCase()
//         let data = item.naam.toLowerCase()
//         if(value == "" || item.price == value || data.includes(userSearch)){
//           return(
//             <div className="div" key={item.name} style={{display:"flex"}}>
//               <img src={item.photo} alt={item.naam} style={{ width: '100px', height: '100px', borderRadius: '5px' }} />
//               <p  style={{color:"green"}}>Name :- {item.naam}</p>
//               <p style={{color:"green"}}> Price :- ${item.price}</p>
//             </div>
//           )
//         }
//       })
//     }
//   </div>
// )




// }

// export default App









import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import getCurrentUser from "../getCurrent";
import { useSelector } from "react-redux";

function App(){
  getCurrentUser()
  let {userData} = useSelector(state=>state.user)
  return(
    <Routes>
      <Route path="/" element={<Details/>}/>
      <Route path="/model" element={userData?<Home/>:<Navigate to="/login"/>}/>
      <Route path="/login" element={!userData?<Login/>:<Navigate to="/"/>}/>
      <Route path="/signup" element={!userData?<Signup/>:<Navigate to="/"/>}/>
    </Routes>
  )
}

export default App