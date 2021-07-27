
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./component/Home/index";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Route exact path = "/">
          <Home></Home>
        </Route>
      </BrowserRouter>S
    </>
  );
}

export default App;
