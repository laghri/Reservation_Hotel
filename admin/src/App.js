
import { useContext } from 'react'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import { AuthContext } from "./context/AuthContext ";
import { DarkModeContext } from "./context/darkModeContext";
import {  userInputs,HotelInputs,roomInputs } from "./formSource";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import NewHotel from './pages/newHotel/NewHotel';
import NewRoom from './pages/newRoom/NewRoom';
import Single from "./pages/single/Single";
import "./style/dark.scss"
function App() {
  const { user } =useContext(AuthContext);
  const ProtectRoute =({children}) =>{
   
    if(!user){
       return <Navigate  to="/login" />
    }
    return children;
  
  }
const {darkMode } =useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark":"app"}>
        <BrowserRouter>
        <Routes>
             <Route path="/" >
             <Route path="login" element={<Login />}></Route>
                <Route index element={
            
                  // <ProtectRoute >
                         <Home  />
                  // </ProtectRoute >
                
               }></Route>
                
                <Route path="users" >
                    <Route index element={   <ProtectRoute ><List /></ProtectRoute>}></Route>
                    <Route path=":userId" element={   <ProtectRoute ><Single /></ProtectRoute>}></Route>
                    <Route path="new" element={<New inputs={userInputs} title={"Add new User"} />}></Route>
                </Route>
                <Route path="hotels"  >
                   <Route index element={ <ProtectRoute ><List /></ProtectRoute>}></Route>
                   <Route path=":hotelId" element={<Single />}></Route>
                   <Route path="new" element={<ProtectRoute ><NewHotel  /></ProtectRoute>}></Route>

                </Route>
                <Route path="rooms"  >
                   <Route index element={ <ProtectRoute ><List /></ProtectRoute>}></Route>
                   <Route path=":roomId" element={<Single />}></Route>
                   <Route path="new" element={<ProtectRoute ><NewRoom  /></ProtectRoute>}></Route>

                </Route>
             </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
