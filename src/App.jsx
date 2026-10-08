// functional Components
// import { Route, Routes } from "react-router-dom"
// import About from "./Routes/About"
// import Contact from "./Routes/Contact"
// import Home from "./Routes/Home"
// import NotFound from "./Routes/NotFound"
// import Navbar from "./Routes/Navbar"
// import Student from "./Routes/Student"

import { lazy } from "react"
import About from "./Routes/About"
import Applications from "./Routes/Applications"
import Contact from "./Routes/Contact"
import Home from "./Routes/Home"
import JobPortal from "./Routes/JobPortal"
import Login from "./Routes/Login"
import NotFound from "./Routes/NotFound"
import ProtectedRoute from "./Routes/ProtectedRoute"
import RejectedOffers from "./Routes/RejedOffersect"
import Student from "./Routes/Student"

//import Portal from "./Portals/Portal"
//import Sample from "./Portals/Sample"

//import Pure from "./PureComponents/Pure"
//import Regular from "./PureComponents/Regular"

//import ControllerForms from "./FormHandling/ControllerForms"

//import Tailwand from "./AddingStyle/Tailwand"

// import Global from "./AddingStyle/Global"
// import Header from "./AddingStyle/Header"
// import Inline from "./AddingStyle/Inline"
// import Navbar from "./AddingStyle/Navbar"
//import "./Global.css"
//import Button from "./UseCallback/Button"
//import { Count } from "./UseCallback/Count"
//import Title from "./UseCallback/Title"
//import AgeSalary from "./UseMemo/AgeSalary"
//import Reference from "./UseRef/Reference"

//import FallbackUi from "./Lifecycle/FallbackUi"
//import Counter from "./useState/Counter"

//import Events from "./ConditionRendering/Events/Events
//import Counter from "./State/Counter"
// import Theme from "./State/Theme"
// import User from "./State/User"



// import Message from "./Components/Message"

// const App = () =>{
//     return(<h1>I Am Function Based Component 🎭</h1>)
// }
// export default App

// Class Component
//  import { Component } from "react";
//  class App extends Component{
  //     render(){
//         return <h1>I Am Class Based Component 🥳</h1>
//     }
// }

// export default App

// Reusability

// const App = () =>{
//     return <div>
//         <Message/>
//         <Message/>
//         <Message/>
//     </div>
// }
// export default App

// import JavaScriptXml from "../public/JSX/JavaScriptXml"
// const App = () => {
//   return <JavaScriptXml/>
// }

// export default App

// import RenderingLists from './Lists/RenderingLists'

// const App = () => {
  //   return (
    //     <div>
    //       <RenderingLists/>
//     </div>
//   )
// }

// export default App


// import Condition from './ConditionRendering/Condition'

// const App = () => {
  //   return (
//     <div>
//       <Condition/>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }

// export default App


// const App = () => {
  //   return (
    //     <div>
    //       <User/>
    //     </div>
//   )
// }

// export default App



//Lifecycle
// import Phases from "./Lifecycle/Phases"
// const App = () => {
//   return (
//     <div>
//     <Phases/>
//     </div>
//   )
// }

// export default App
// import
// import Unmount from "./Lifecycle/Unmount"
// const App = () => {
  //   return (
    //     <div>App</div>
    //   )
    // }
    
// export default App

// //import React from 'react'
// import Welcome from './Lifecycle/Welcome'

// const App = () => {
  //   return <> 
  //   {/* <phases/> */}
  //   <Welcome trainer={"yasin"} />
  //   <Welcome trainer={"Monty"}/>
//   <Welcome trainer={"Pavan"}/>
//   </>
// }

// export default App


//26/08/2026
//!Lifecycle
//import FallbackUI from "./Lifecycle/FallbackUi"
// import Phases from "./Lifecycle/Phases"
// import Welcome from "./Lifecycle/Welcome"
// const App = () => {
//   return (
//     <div>
//       {/* <Phases/> */}
//       <FallbackUI>
//         <Welcome trainer="yasin"/>
//       </FallbackUI>
//       <FallbackUI>
//         <Welcome trainer="monty"/>
//       </FallbackUI>
//       <FallbackUI>
//          <Welcome trainer="pavan"/>
//       </FallbackUI>
//     </div>
//   )
// }

// export default App



//import React from 'react'

// const App = () => {
//   return (
  //     <div>
  // <Counter/>
  //     </div>
//   )
// }

// export default App

//import React from 'react'
// import Rakhi from "./useState/Rakhi"
// import Theme from "./useState/Theme"
// import User from "./useState/User"

// const App = () => {
  //   return (
//     <div>
//       <Theme/>
//     </div>
//   )
// }

// export default App

// const App = () => {
  //   return (
//     <div>
//       <Rakhi/>
//       <User/>
//     </div>
//   )
// }

// export default App
//Eaxmple:1
// import Reference from "./UseRef/Reference"
// const App = () => {
//   return (
  //     <div>
  //       <Reference/>
  //     </div>
  //   )
// }

// export default App



//Example :2

// const App = () => {
  //   return (
//     <div>
//       <Reference/>
//     </div>
//   )
// }

// export default App


//UseMemo
//Example 1;

// const App = () => {
  //   return (
    //     <div>
    //       <AgeSalary/>
    //     </div>
//   )
// }

// export default App



//UseCallback
// import  { useState } from 'react'

// const App = () => {
//   let [age,setAge]=useState(22)
//   let [salary,setSalary]=useState(10000)
//     let handleAge=()=>{
//     setAge(age+1)
//   }
//   let handleSalary =()=> {
  //     setSalary(salary+5000)
  //   }
  //   return (
    //     <div>
    //       <Title/>
    //       <Count text="Age" data ={age}/>
    
//       <Button/>
//       <Count/>
//     </div>
//   )
//   }

// export default App




//4) Adding styles
// const App = () => {
//   return (
//     <div>
//       <Inline/>
//       <hr/>
//       <Global/>
//       <Header/>
//       <Navbar/>
//     </div>
//   )
// }

// export default App



// import Tailwand from "./AddingStyle/Tailwand"
// const App = () => {
//     return (
//         <div>
//       <Tailwand/>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   return (
//     <div>
//       <ControllerForms/>
//     </div>
//   )
// }

// export default App



//pure components
// const App = () => {
//   return (
//     <div>
//       <Regular/>
//       <Pure/>
//     </div>
//   )
// }

// export default App



//Memo
// import NormalComp from './Memo/NormalComp'
// import MemoComp from './Memo/MemoComp'
// import { useState } from 'react'
// import Regular from './PureComponents/Regular'
// import Pure from './PureComponents/Pure'

// const App = () => {
//   let[name,setName]= useState({
//     person:"Yasin"
//   })
//   return (
//     <div>
//       <NormalComp tname={name.person}/>
//       <MemoComp tname={name.person}/>
//       <button onClick={()=>setName({person:"Pavan"})}>Change Name</button>
//     </div>
//   )
// }

// export default App





// const App = () => {
//   return (
//     <div>
//       <Portal/>
//       <Sample/>
//     </div>
//   )
// }

// export default App




// const App = () => {
//   return (
//   <>
//   <Navbar/>
//       <Routes>
//     <Route path="/" element ={<Home/>}/>
//   <Route path="/About/"element={<About/>}/>
//   <Route path="/Contact/" element={<Contact/>}/>
//   <Route path="/Student/:id/:name/:mail" element={<Student/>}/>
//   <Route path="*" element={<NotFound/>}/>
  
//     </Routes>
//   </>
//   )
// }

// export default App;






 //const Dashboard = lazy(() => import('./Router/Dashboard'))
 //const JobPortal = lazy(() => import('./Router/JobPortal'))
 //const Applications = lazy(() => import('./Router/Applications'))
//const RejectedOffers = lazy(() => import('./Router/RejectedOffers'))
const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback=<h1>Loading....</h1>>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/student/:id/:name/:mail' element={<Student />} />
          <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
            <Route path='/dashboard/jobportal' element={<JobPortal />} />
            <Route path='/dashboard/applications' element={<Applications />} />
            <Route path='/dashboard/rejectedoffers' element={<RejectedOffers />} />
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Suspense>
    </>
  )
}
export default App