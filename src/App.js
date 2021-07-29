
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./component/Home/index";
import Login from "./component/Login/index";
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route exact path = "/home">
          <Login></Login>
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
