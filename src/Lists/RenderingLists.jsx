//Example 1
// const RenderingLists = () => {
//     let resturants =["Krishnapatnam","krithunga","Pista","paradise","Sa=wagath"]
//   return (
//     <div>
//         <h1> List of resturants😊</h1>
//         <ol>
//             {
//                 resturants.map((item,index)=> <li key=
//                 {index}>{item}</li>)
//             }
//         </ol>
//     </div>
//   )
// }

//import { Fragment } from "react"

// export default RenderingLists


//Example 2
// const RenderingLists = () => {
//     let marks=[0,15,40,55,25]
//   return (
//     <div>
//         <h1> List of marks😎</h1>
//         <ul type ="square">
//             {
//                 marks.map((item,index)=> <li key={index}>
//                     {item} </li>)
//             }
//         </ul>
//     </div>
//   )
// }

// export default RenderingLists



//Example :3
//import { Fragment } from "react"
// const RenderingLists = () => {
//     let resturants=[
//         {id:1,
//             name:"Mehfil",
//             loc:"Dilsukhnagr"
//     },
//     {id:2,
//             name:"Shah Gosh",
//             loc:"LB Nagar"
//     },
//     {id:3,
//             name:"Paradise",
//             loc:"Secundradabad"
//     },
// ]
//   return (
//     <div>List of resturants and their locations
//         <hl>
//             {
//                 resturants.map((item)=>{
//                     return<Fragment key={item.id}>
//                         <h1> {item.name}
                            
//                         </h1>
//                         <h1> {item.loc}</h1>
//                     </Fragment>
//                 })
//             }
//         </hl>
//     </div>
//   )
// }

// export default RenderingLists



// //Example:4
// const RenderingLists = () => {
// let movies=[
// {id:1, name: "salar", hero: "Prabhas", herione: "shruthi hasan"},
//  {id:2, name: "Mirchi", hero: "Prabhas", herione: "Anushka shetty"}, 
//  {id:3, name: "OG", hero: "Pawan kalyan", herione: "Priyanka Mohan"}
// ]
// return (
// <div>
// <h1>List of movies and thier cast 😎</h1>
// {
// movies.map((item)=>{
// return <Fragment>
// <h1>{item.name}</h1>
// <h1>{item.hero}</h1>
// <h1>{item.herione}</h1>
// <hr />
// </Fragment>
// })
// }
// </div>
// )
// }

// export default RenderingLists




//Example 5:
// import React from 'react'
// import Places from './Places'

// const RenderingLists = () => {
// let famous Places=[
// {
// id:1,
// name: "Charminar",
// distanceInKms:6

// },
// {
// id:2,
// name: "Birla Mandir",
//  distanceInkms: 10
// },
// {

// id:3,
// $name: "Masab Tank", distanceInkms: 9

// }
// return <Places data={famousPlaces}/>
// }
// export default RenderingLists