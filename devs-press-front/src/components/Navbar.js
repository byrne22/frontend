import React from "react"
import { Link} from "react-router-dom"

function Navbar(){
    return(
        <div style={{padding: 40+"px", marginLeft:50+ "px"}}>

            <ul className="nav nav-pills" style={{marginTop:5 +"px", marginLeft:1.6 + "em"}}>
            <li className="nav-item">
                <Link to="/" exact class="nav-link " aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
                <Link  to="/publish" exact class="nav-link">Publish</Link>
            </li>
            <li className="nav-item">
                <Link  to="/login" class="nav-link" >Login</Link>
            </li>
            
            </ul>

            <div className="navName">
                <p> </p>
            
                <h1 style={{paddingTop:60 + "px"}}>DevsPress</h1>
                <p style={{paddingTop: 10+"px"}}> - Follow current and useful Dev trends  <br></br> contributed by fellow devs</p>
            </div>

            
          


            
            

        </div>
       
    )
}
export default Navbar;