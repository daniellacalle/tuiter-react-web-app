import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Assignment7 from "./labs/a7";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index
                         element={<Labs/>}/>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
                  <Route path="/tuiter"
                         element={<Tuiter/>}/>
                  {/* had to add this in here, now it works, hope that this is correct*/}
                  <Route path="a7" element={<Assignment7/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;

// export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
