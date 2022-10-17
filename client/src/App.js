import {
  BrowserRouter ,
  
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
  <BrowserRouter>
     <Routes>
         <Route path="/" element={<Home />}  />
         <Route path="/hotels" element={ <List />}/>
         <Route  path="/hotels/find/:id" element={<Hotel />}/>
         <Route path="/login" element={ <Login />}/>
         <Route path="/register" element={ <Register />}/>
     </Routes>
     
  </BrowserRouter>
  );
}

export default App;
