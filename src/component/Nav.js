import React from "react";
import "../component/style/nav.css"
import { Link } from "react-router-dom";
function Nav(){
    return(
  <div className="nav">
  <Link to="/"><span>Home</span></Link> 
  <Link to="/score"> <span>marksheet</span></Link>
  </div>
    )
    }
    export default Nav