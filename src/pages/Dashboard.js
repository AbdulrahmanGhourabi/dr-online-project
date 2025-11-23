import {useParams, useNavigate} from "react-router-dom";
import Discussion from "./Discussion";
function Dashboard(){
     const{userType,userID} = useParams();
     const navigate = useNavigate();

     const handleLogOut = () => {
        navigate("/");
        
     }
return(
 <div className="page" style ={{padding: "20px" }}>
<div style = {{ textAlign :"right", marginBottom:"15px" }}>
<button 
  onClick= {handleLogOut}
style= {{ 
 padding: "6px 12px",
borderRadius: "6px",
border:"none",
backgroundColor:"#ff6666",
color:"#fff",
cursor:"pointer"
}}
>
 Log Out 
</button>
</div>

<div style ={{ display:"grid", gridTemplateColumns : "1fr 1fr" , gap:"20px"}}>

<div style ={{ backgroundColor: "#1e1e1e" , padding: "15px" , borderRadius: "8px", color  :"f5f5f5" }}>
 <h2>My Discussion</h2>
<Discussion userType={userType} userID= {userID} my Disscusion />
</div>

<div style={{backgroundColor: "#1e1e1e"  , padding:"15px", borderRadius : "8px" , color :"#f5f5f5" }}>
<h2>General Discussions</h2>
<Discussion userType= {userType} userID= {userID} />
</div>
</div>
</div>
)
}
export default Dashboard;