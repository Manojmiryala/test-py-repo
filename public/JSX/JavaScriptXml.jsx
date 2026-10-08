// Jsx
// const JavaScriptXml =()=>{
//     return <h1>Jsx</h1>
// }
// export default JavaScriptXml

//!Rules

//!1)Mulitiple Jsx Elements Must be wrapped in a single parent

//  import React from 'react'

// const JavaScriptXml = () => {
//   return (
//     <div>
//         <div>
//             <h1>Heading</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed consequuntur iure possimus voluptatibus. Dolores voluptatibus sapiente inventore possimus, nobis eveniet cum dignissimos officiis quia, illum eos, reiciendis veritatis numquam.</p>
//             <button>Click</button>
//         </div>
//     </div>
//   )
// }

// export default JavaScriptXml

//2)Unpaired Tags must be closed property
// const JavaScriptXml =()=>{
//   return <section>
//     <img src="favicon.svg"/>
//     <input type="text"></input>
//   </section>
// }
// export default JavaScriptXml

//3)Attributes like class and for should be replaced with className and htmlFor
// const JavaScriptXml =()=>{
//     return(
//         <div>
//         <h1 className ="heading"> Hello</h1>
//         <label htmlFor="name"> Name:</label>
//         <input id="name" type="text"/>
//         </div>
//     )
// }
// export default JavaScriptXml


//4) Jsx Elements must be written in lowercase
// const JavaScriptXml =()=>{
//     return<button> Click</button>
// }
//     export default JavaScriptXml

//4) Fragments
// const JavaScriptXml =()=>{
//   return<>
//   <h1>Heading</h1>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis, molestiae quo excepturi nemo assumenda, ipsa molestias quod doloremque error natus nihil repellat fugit quae! Nobis iusto praesentium reprehenderit nihil?</p>
//   <button>Click</button>
//   </>
// }
// export default JavaScriptXml



//5) Expression 
const JavaScriptXml=()=>{
  let trainerName="Arun"
  function subject(){
  return "Flirting"
}
    let isSingle=false
    let hobbies=["Cooking","Singing","Motiavtion "]
return (
  <div>
    <h1> My name is :{trainerName}</h1>
    <p> I am {27-5}years old</p>
     <p> I teach {subject()}</p>
      <p> Relationship Status :{isSingle? "Single":"Commited"}</p>
      <h1> Hobbies</h1>
      <ol>
        {
          hobbies.map((ele)=>{
            return <li>{ele}</li>
          })
        }
      </ol>
  </div>
)  
}
export default JavaScriptXml