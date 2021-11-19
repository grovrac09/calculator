// import {useState} from "react";

// function App() {
//   const [calc, setCalc] = useState("");
//   const ops = ['/', '*', '+', '-', '.'];

//   const updateCalc = value => {
//     if (
//       ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))
//     ) {return}

//     setCalc(calc + value);
//   }

//   const createDigits = () => {
//     const digits = [];

//     for (let i = 1; i < 10; i++) {
//       digits.push(
//       <button onClick={() => updateCalc(i.toString())}key={i}>{i}</button>
//       );
//     }

//     return digits;
//   }

//   const calculate = () => { {/* function  */}
//     setCalc(eval(calc).toString())
//   }

//   const del = () => { {/* function to remove the last digit from the string */}
//     if (calc == '') {
//       return;
//     }
//     const value = calc.slice(0, -1);
//     setCalc(value)
//   }

//   const clear = () => { {/* function to clear the output displayed */}
//     if (calc == '') {
//       return;
//     }
//     const value = "";
//     setCalc(value)
//   }

//   return (
//     <div className="App"> {/* holds the calculator in a container */}
//       <div className="calculator"> {/* holds the buttons */}
//         <div className="display"> {/* shows the output */}
//           <p>{calc || 0}</p>
//         </div>

//         <div className="operators">
//           <button onClick={() => updateCalc('/')}>/</button>
//           <button onClick={() => updateCalc('*')}>*</button>
//           <button onClick={() => updateCalc('+')}>+</button>
//           <button onClick={() => updateCalc('-')}>-</button>
//           <button className="delBtn"onClick={del}>⇦</button>
//           <button onClick={clear}>CLEAR</button>
//         </div>

//         <div className="digits">
//           {createDigits()}
//           <button onClick={() => updateCalc('0')}>0</button>
//           <button onClick={() => updateCalc('.')}>.</button>
//           <button onClick={calculate}>=</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import { evaluate } from "mathjs";

const App = () => {
  const buttons = ["CLEAR", "🠔", "/", 7, 8, 9, "x", 4, 5, 6, "+", 1, 2, 3, "-", "%", 0, ".", "="];
  const [display, setDisplay] = useState("");

  const handler = (value) => {
    if (value === "=") {
      setDisplay(evaluate(display));
    } else if (value === "🠔") {
      const del = display.slice(0, -1);
      setDisplay(del);
    } else if (value === "CLEAR") {
      setDisplay("");
    // } else if (value === NaN && display === "") {
    //   setDisplay("");
    } else {
      setDisplay(display + value);
    }
  };

  const Button = ({button, handler}) => {
    return (
      <div>
        <button onClick={() => handler(button)}>{button}</button>
      </div>
    );
  };

  return (
    <div id="container">
      <h1>{display}</h1>
      {buttons.map((button) => {
        return <Button button={button} handler={handler} />;
      })}
    </div>
  );
};

export default App;
