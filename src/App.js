// import { useEffect, useState } from 'react';
// import './App.css';
// // import Demo from './components/Demo';



// function App() {
//   const [firstNum, setfirstNum] = useState(0)
//   useEffect(() => {
//     alert("hello ritik")
//   }, [])
//   return (
//     <>
//       <button onClick={() => setfirstNum(firstNum + 1)}>{firstNum}</button>
//       <button>hello</button>
//       <button>Hello wrold</button>
//       <button>Hello world</button>
//       {/* <Demo /> */}
//     </>
//   );
// }

// export default App;
// 1. Import *useState* and *useEffect*



// 1. Import *useState* and *useEffect*
// import React from 'react'
// import './App.css'
// import Demo from './components/Demo'

// function App() {
//   return (
//     <>
//       <Demo />

//     </>
//   )
// }

// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {

//   let [dogImage, setDogImage] = useState(null)

//   useEffect(() => {
//     fetch("https://dog.ceo/api/breeds/image/random/1")
//       .then(response => response.json())
//       .then(data => setDogImage(data.message))
//     console.log(data)
//   }, [])


//   return (
//     <div className="App">
//       {data.map((key) => {
//         return (
//           <>
//             <p>{key.name}</p>
//           </>
//         )
//       })}
//       <img src={dogImage}></img>
//       {dogImage && dogImage.map((key) => {
//         return (
//           <>
//             <img src={key} />
//           </>
//         )
//       })}
//     </div >
//   );
// }

// export default App;
// import React, { useEffect, useState } from 'react';

// function App() {
//   const [todo, setTodo] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => setTodo(json))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); // Empty dependency array to run the effect only once after the first render

//   return (
//     <div>
//       {todo ? (
//         <div>
//           <h1>{todo.title}</h1>
//           <p>ID: {todo.id}</p>
//           <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
//         </div>
//       ) : (
//         <p className='  text-black'>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default App;
import React from 'react'
import {

  Routes,
  Route, Link

} from "react-router-dom";
import Demo from './components/Demo';
import Learn from './components/Learn';

function App() {
  return (
    <div >
      <div class=" d-flex gap-4 mb-5">
        <Link to="/demo">DEMO</Link>
        <br />
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/demo" element={<Demo />} />

        <Route path="/" element={<Learn />} />


      </Routes>
    </div>
  )
}
export default App




