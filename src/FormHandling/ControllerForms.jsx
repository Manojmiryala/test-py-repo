// import { useState } from "react";

// const ControllerForms = () => {
//   let [details, setDetails] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     gender: "",
//     skills: [],
//     photo: "",
//     country: "India",
//     color: "#000000",
//     range: "50",
//     feedback: "",
//   });

//   let {
//     name,
//     email,
//     password,
//     phone,
//     gender,
//     skills,
//     country,
//     color,
//     range,
//     feedback,
//   } = details;

//   let handleChange = (e) => {
//     let { name, value, type, checked, files } = e.target;

//     if (type === "checkbox") {
//       if (checked) {
//         setDetails({
//           ...details,
//           skills: [...skills, value],
//         });
//       } else {
//         setDetails({
//           ...details,
//           skills: skills.filter((skill) => skill !== value),
//         });
//       }
//     } else if (type === "file") {
//       setDetails({
//         ...details,
//         [name]: files[0]?.name || "",
//       });
//     } else {
//       setDetails({
//         ...details,
//         [name]: value,
//       });
//     }
//   };

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(details);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <legend>Registration Form ⌛</legend>

//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={handleChange}
//           />

//           <br />
//           <br />

//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />

//           <br />
//           <br />

//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//           />

//           <br />
//           <br />

//           <label htmlFor="phone">Phone:</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={phone}
//             onChange={handleChange}
//           />

//           <br />
//           <br />
//           <label>Gender:</label>
//           <input
//             type="radio"
//             id="male"
//             name="gender"
//             value="Male"
//             checked={gender === "Male"}
//             onChange={handleChange}
//           />
//           <label htmlFor="male">Male</label>

//           <input
//             type="radio"
//             id="female"
//             name="gender"
//             value="Female"
//             checked={gender === "Female"}
//             onChange={handleChange}
//           />
//           <label htmlFor="female">Female</label>

//           <br />
//           <br />

//           <label>Skills:</label>

//           <input
//             type="checkbox"
//             id="html"
//             name="skills"
//             value="HTML"
//             checked={skills.includes("HTML")}
//             onChange={handleChange}
//           />
//           <label htmlFor="html">HTML</label>

//           <input
//             type="checkbox"
//             id="css"
//             name="skills"
//             value="CSS"
//             checked={skills.includes("CSS")}
//             onChange={handleChange}
//           />
//           <label htmlFor="css">CSS</label>

//           <input
//             type="checkbox"
//             id="js"
//             name="skills"
//             value="JS"
//             checked={skills.includes("JS")}
//             onChange={handleChange}
//           />
//           <label htmlFor="js">JS</label>

//           <input
//             type="checkbox"
//             id="react"
//             name="skills"
//             value="React"
//             checked={skills.includes("React")}
//             onChange={handleChange}
//           />
//           <label htmlFor="react">REACT.JS</label>

//           <br />
//           <br />

//           <label htmlFor="photo">Upload ID:</label>
//           <input
//             type="file"
//             id="photo"
//             name="photo"
//             onChange={handleChange}
//           />

//           <br />
//           <br />

//           <label htmlFor="country">Country:</label>
//           <select
//             id="country"
//             name="country"
//             value={country}
//             onChange={handleChange}
//           >
//             <option value="India">India</option>
//             <option value="Australia">Australia</option>
//             <option value="Russia">Russia</option>
//           </select>

//           <br />
//           <br />

//           <label htmlFor="feedback">Feedback:</label>
//           <textarea
//             id="feedback"
//             name="feedback"
//             value={feedback}
//             onChange={handleChange}
//           ></textarea>

//           <br />
//           <br />

//           <label htmlFor="color">Color:</label>
//           <input
//             type="color"
//             id="color"
//             name="color"
//             value={color}
//             onChange={handleChange}
//           />

//           <br />
//           <br />

//           <label htmlFor="range">Range:</label>
//           <input
//             type="range"
//             id="range"
//             name="range"
//             value={range}
//             onChange={handleChange}
//           />

//           <br />
//           <br />

//           <input type="submit" value="Register 😎" />
//           <input type="reset" />
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default ControllerForms;






