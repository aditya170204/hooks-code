//
//====================        UseContext Hooks     ======================
//
// import React, { createContext } from "react";
// import MainComponent from "./component/MainComponent";

// export const loginContext = createContext();
// const App = () => {
//   return (
//     <loginContext.Provider value={true}>
//       <div>
//         <MainComponent />
//       </div>
//     </loginContext.Provider>
//   );
// };

// export default App;

//
//
//==================================   useRef HOOK    ==========================

//
//
//\
// import React, { useEffect, useRef, useState } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const count = useRef(0);
//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   console.log(count);

//   return (
//     <div>
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <h3>Name: {name}</h3>
//       <h3>Renders: {count.current}</h3>
//     </div>
//   );
// };

// export default App;
//
///
//
//.....................  second example of useRef  ...................
//
//
//
// import React, { useRef } from "react";

// const App = () => {
//   const inputEle = useRef();
//   function handleClick() {
//     console.log(inputEle);
//     inputEle.current.style.width = "300px";
//     inputEle.current.focus();
//   }
//   return (
//     <div>
//       <input className="input" type="text" ref={inputEle} />
//       <button onClick={handleClick}>hit</button>
//     </div>
//   );
// };

// export default App;

//
//
//........................... USEREDUCER ...................................
//
//
//
// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   function handleIncrease() {
//     setCount((prev) => prev + 1);
//   }
//   function handleDecrease() {
//     setCount((prev) => prev - 1);
//   }
//   return (
//     <div>
//       <h2>count : {count}</h2>
//       <button onClick={handleIncrease}>increase</button>
//       <br />
//       <br />
//       <button onClick={handleDecrease}>decrease</button>
//     </div>
//   );
// };

// export default App;
//
//
//.......................... USE-REDUCER exmple..........................

// import React, { useReducer } from "react";
// const ACTION = {
//   INCREASE: "increase",
//   DECREASE: "decrease",
// };
// const initialState = { count: 0 };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTION.INCREASE:
//       return { count: state.count + 1 };

//     case ACTION.DECREASE:
//       return { count: state.count - 1 };

//     default:
//       return state;
//   }
// };
// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const increaseCount = () => {
//     dispatch({ type: ACTION.INCREASE });
//   };
//   const decreaseCount = () => {
//     dispatch({ type: ACTION.DECREASE });
//   };
//   return (
//     <div>
//       <h3>count :{state.count}</h3>
//       <button onClick={increaseCount}>increase</button>
//       <button onClick={decreaseCount}>decrease</button>
//     </div>
//   );
// };

// export default App;

//
//
// .................................... useLayoutEffect ...............
//
//
//
// import React, { useEffect, useState, useLayoutEffect, useRef } from "react";

// const App = () => {
//   const [toggle, setToggle] = useState(false);
//   const textRef = useRef();
//   //
//
// useLayoutEffect(() => {
//   if (textRef.current && toggle) {
//     const dimension = textRef.current.getBoundingClientRect();
//     textRef.current.style.paddingTop = `${dimension.height}px`;
//   }
// }, [toggle]);

//

//   useEffect(() => {
//     console.log("useEffect");
//   }, [toggle]);
//   //
//   //
//   useLayoutEffect(() => {
//     console.log("useLayoutEffect");
//   }, [toggle]);

//   return (
//     <>
//       <button onClick={() => setToggle(!toggle)}>toggle</button>
//       {toggle && <h3 ref={textRef}>firey</h3>}
//     </>
//   );
// };

// export default App;
//
//
//
//
//
import React, { useState, useLayoutEffect, useRef, useEffect } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current && toggle) {
      const dimension = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimension.height}px`;
    }
  }, [toggle]);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h3 ref={textRef}>firey</h3>}
    </>
  );
};

export default App;
