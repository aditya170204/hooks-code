// import { useEffect, useState } from "react";

// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   function handleCount() {
//     setCount((count) => count + 1);
//     {
//       handleCount ? console.log(`clicked ${count + 1} times`) : null;
//     }
//   }
//   function handleCountNeg() {
//     setCount((count) => count - 1);
//     {
//       handleCountNeg ? console.log(`clicked ${count - 1} times`) : null;
//     }
//   }

//   return (
//     <>
//       <h1>what's the count</h1>
//       <button onClick={handleCount}>count : {count}</button> <br />
//       <br />
//       <button onClick={handleCountNeg}>count -</button>
//     </>
//   );
// }

// export default App;
//
//

/////////////////////////////////   Use-Effect HOOK      /////////////////////////

//

//

// import { useEffect, useState } from "react";

// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   const [counter, setCounter] = useState(9);
//   useEffect(() => {
//     document.title = `${counter} new message!`;
//   }, [counter, count]);
//   function handleCount() {
//     setCount((count) => count + 1);
//     {
//       handleCount ? console.log(`clicked ${count + 1} times`) : null;
//     }
//   }
//   function handleCount9() {
//     setCounter((count) => count + 9);
//     {
//       handleCount9 ? console.log(`clicked ${count + 9} times`) : null;
//     }
//   }

//   return (
//     <>
//       <h1>what's the count</h1>
//       <button onClick={handleCount}>count : {count}</button> <br />
//       <br />
//       <button onClick={handleCount9}>count +9 :</button>
//     </>
//   );
// }

// export default App;
//
//

/////////////////// CLEAN-UP FUNCTION IN USE-EFFECT HOOK ///////////////
//
//
//

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(time + 1);
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   });
//   return (
//     <div>
//       <h3>{time} seconds passed after reload</h3>
//     </div>
//   );
// };

// export default App;
//
//

////////// the example of cleanup function in useEffect///
//
//
import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("run useEffect", count);
    return () => {
      console.log("clean up", { count });
    };
  }, [count]);

  return (
    <>
      <h3>{count} Count </h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};

export default App;
