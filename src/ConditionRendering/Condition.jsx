//1) Teranry Operator
// // !Example1
// const Condition = () => {
//     let isAdmin=false
//   return (
//     <div>
//         {isAdmin ? <h1>Welcome Admin</h1>: <h1>Welcome User</h1>
//         }
//     </div>
//   )
// }

//import { isDefaultClause } from "typescript"

// export default Condition

// !Example2
// import Love from './Love'
// import Money from './Money'

// const Condition = () => {
//     let isLoveImportant =true
//   return (
//     <div>
//         {isLoveImportant ? <Love/> : <Money/>}
//     </div>
//   )
// }

// export default Condition

// // !example3
// const Condition = () => {
//     let age =15

//   return (
//     <div>
//         {age>=18 ? <h1>Eligible for vote</h1>: <h1>Not Eligible to Vote</h1>
//         }
//     </div>
//   )
// }

// export default Condition




//2) SHORT CIRCUIT &&
//Example 1:

// const Condition = () => {
//     let weekend=true;
//   return (
//     <div>
//         {
//             weekend && <h1> Sleep Nicley😴 </h1>
//         }
//     </div>
//   )
// }

// export default Condition


//example 2:
// const Condition = () => {
//   let isLoveImportant=true
//   return (
//     <div>
//       {isLoveImportant && <Love/>}
//     </div>
//   )
// }

// export default Condition


//3) If Else- Statement 
//Example:1
// const Condition = () => {
//     let haveMoney=false
//     if(haveMoney){
//         return<h1> Eat Outside </h1>

//     }else{
//         return<h1> DO Upavasam</h1>
//     }
// }

// export default Condition


// //Example 2:
// const Condition = () => {
//     let marks =60
//     if(marks>=90){
//         return<h1> Grade A</h1>

//     }else if (marks>=75){
//         return <h1> Grade B</h1>

//     } else if (marks>=50){
//         return <h1> Grade c</h1>
//     } else {
//         return <h1> fail</h1>
//     }
// }
// export default Condition


//4) Element Variables 
// const Condition = () => {
//     let trainer="Pavan"
//     let result;
//     if(trainer=="Pavan"){
//         result="Core Java Trainer"
//     }else if(trainer=="yasin"){
//         result="Sql Trainer"
//     }else if(trainer=="Monty"){
//         result="Python Trainer"
//     }else {
//         result="Not A Famous One"
//     }

// return result
// }
// export default Condition


//Real Time Example
// const Condition = () => {
//     let darkMode =true
//   return (
//     <button className={darkMode && "Dark"}>
//         {darkMode ? "DarkMode":"Light Mode"}
//         </button>
//   )
// }

// export default Condition

