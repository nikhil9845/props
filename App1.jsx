import React from "react";
import Nav1 from"./Nav1.jsx";
import Nav2 from './Nav2.jsx';
import Nav3 from "./Nav3.jsx";
import photo from "./picture.jpeg";
 const App1 =()=>
 {
    return(<>
        <Nav1 data="React hello" number={9845792467} Boolean={true} data1={null}/>
      <Nav2 data2={{username:"Nikhil", password:9845}}/>
      <Nav3 data3="photo"/>
      <img src={photo} alt="test"/>
      <img src="https://cdn4.sharechat.com/cv-2700e172_1614361031012_sc_new_compressed_thumb.jpeg"  alt=""/>
        </>
    )
 }
 export default App1;