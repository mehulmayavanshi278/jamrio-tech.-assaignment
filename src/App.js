
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import Tag from "./components/Tag";
import Post from "./components/Post";
import {Routes , Route} from 'react-router-dom'
import { createContext, useState } from "react";
export const datacontext = createContext();



function App() {



  const [posts , setPosts] = useState();
  const [userprofile , setUserprofile] = useState();
  const [taggeddata , setTeggeddata] = useState();

  return (
   <>
  <datacontext.Provider value={{ posts , setPosts , userprofile , setUserprofile , taggeddata , setTeggeddata }}>
  <Routes>
    <Route exact path="/" element = {<Home/>} />
    <Route exact path="/posts" element={<Post/>} />
    <Route exact path="/aboutus" element={<Aboutus/>} />
    <Route exact path="/tag" element={<Tag/>} />
    {/* <Route exact path="/practice" element = {<Practice/>} /> */}
    {/* <Route exact path="/main" element = {<Mainpost/>} /> */}
   </Routes>
  </datacontext.Provider>

    
   </>
  );
}

export default App;
