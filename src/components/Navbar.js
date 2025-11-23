import {Link} from "react-router-dom";

import "../styles/App.css";

function Navbar(){
    return(
        <nav style={{display:"flex",justifyContent:"center",gap:"20px",padding:"10px",background:"#eee"}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
} 
export default Navbar;