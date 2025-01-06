// ================================      USESTATE HOOK       ===========================
//
// import React from "react";
// import Counter from "./component/Counter";

// const App = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// };

// export default App;

//
//
//=================================      USE-EFFECT HOOK     =============================
//
//

import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [Total, setTotal] = useState(9);
  // first----> side effect function
  // second----> clean up  function
  //third-----> comma seperated dependancy list
  // ===== VARIATION-1  =====
  //runs on every render
  // useEffect(() => {
  //   alert("runs on every render");
  // });

  //===== VARIATION-2 =====
  //runs on only first render
  // useEffect(() => {
  //   alert("runs on only first render");
  // }, []);
  //
  //
  //========    VARIATION-3 =========
  // runs every time the dependency(count) is updated
  // useEffect(() => {
  //   alert("runs every time count updated");
  // }, [count]);

  //
  // =============  VARIATION-4   ==========
  //runs with multiple dependancies
  // useEffect(() => {
  //   alert("runs every time count updated");
  // }, [count, Total]);
  //
  //
  //========     VARIATION-5   ========
  //added cleanup function
  useEffect(() => {
    alert("count is updated");

    return () => {
      alert("count is unmounted from ui");
    };
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }
  function handleClickNeg() {
    setCount(count - 1);
  }
  function handleTotal() {
    setTotal(Total + 1);
  }
  function handleTotalNeg() {
    setTotal(Total - 1);
  }
  return (
    <div>
      App {count}
      <br />
      <button onClick={handleClick}>start counting {count}</button>
      <br></br>
      <button onClick={handleClickNeg}>decrease counting {count}</button>
      <br />
      App {Total}
      <br />
      <button onClick={handleTotal}>start total {Total}</button>
      <br></br>
      <button onClick={handleTotalNeg}>decrease total {Total}</button>
    </div>
  );
};

export default App;
