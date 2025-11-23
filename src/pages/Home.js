import { useState} from "react";
import {useNavigate} from "react-router-dom";
import"../styles/App.css";

function Home(){
 const navigate = useNavigate();

const[allowedDoctorIDs, setAllowedDoctorIDs]= useState(["DR001", "DR002","DR003","DR004","DR005","DR006"]);
const [allowedPatientIDs, setAllowedPatientIDs] = useState(["PT001", "PT002","PT003","PT004","PT005","PT006"]);

const[userType, setUserType]= useState("");
const[userID , setUserID]= useState("");
const[error, setError]= useState(false);

const [showSignUp, setShowSignUp] = useState(false);
const[signUpType, setSignUpType]= useState("");
const[signUpID,setSignUpID]= useState("");
const[signUpName, setSignUpName] = useState("");
const[signUpError, setSignUpError]= useState("");

const handleLogin =() =>{
 if (!userType || !userID){
 setError("Please select role and enter ID");
 return;
}

if (
  (userType === "doctor" && allowedDoctorIDs.includes(userID)) ||
(userType === "patient" && allowedPatientIDs.includes(userID))
) {
  navigate(`/dashboard/${userType}/${userID}`);
} else {
 setError(true);
}
};
const handleSignUpClick = () => {
 setShowSignUp(true);
 setSignUpType(userType || "patient");
setSignUpID("");
setSignUpName("");
setSignUpError("");
};

const handleSignUpSubmit= () => {
 if( !signUpType || !signUpID || !signUpName){
 setSignUpError("Please fill all fields");
return;
}



if(allowedDoctorIDs.includes(signUpID) || allowedPatientIDs.includes(signUpID)){
   setSignUpError("This ID already exists");
return;
}

if (signUpType === "doctor") {
  setAllowedDoctorIDs([...allowedDoctorIDs, signUpID]);
} else {
  setAllowedPatientIDs([...allowedPatientIDs, signUpID]);
}


setShowSignUp(false);
setUserType(signUpType);
setUserID(signUpID);
setError(false);
alert(`Account created for ${signUpName} (${signUpID})! You can now log in.`);
};

return (

 
        <div className= "page" style={{ textAlign: "center", marginTop: "50px" }}>
 <h1>Welcome to Dr.Online</h1>

<div style= {{ margin: "20px 0 "}}>
  <p>Login as : </p>
<button
 className = {userType  === "doctor" ? "btn" : "btn-outline"}
onClick= {() => setUserType("doctor")}
style={{margin: "5px"}}
>
Doctor
</button>
<button 
className={userType === "patient" ? "btn" : "btn-outline"}
onClick= {() => setUserType("patient")}
style={{margin: "5px" }}
>
Patient
</button>
</div>


 {userType && ( 
     <div style= {{ marginTop : "10px" }}>
          <input 
        type="text"   
        placeholder={userType === "doctor" ? "Enter Medical License ID " :  "Enter Patient ID"}
 value= {userID}
onChange= { e => setUserID(e.target.value)}
style= {{padding: "10px", width: "250px" , borderRadius: "6px" , border:"none" }}
/>
 <br/>
<button className="btn" onClick={handleLogin} style = {{marginTop:"10px"}}>
Submit
</button>

{error && ( 
  <p style = {{ color : " #ff5555" , marginTop : "10px" }}>
 Invalid ID! No account found. {" "}
<button 
  onClick= {handleSignUpClick}
 style={{ background: "none" , border:"none", color: "#1a73e8", cursor:"pointer", textDecoration: "underline",padding:0}}
>
SIgn up
</button>{" "}
to create an account.
</p>
)}

</div>
)}

{showSignUp && (
 <div style ={{
 position:"fixed",
top:0,left:0,
width:"100%",
height:"100%",
background:"rgba(0,0,0,0.5)",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}>
 <div style ={{ background : "#fff", padding:"20px", borderRadius:"8px", width:"300px", textAlign:"center"}}>
<h2>Sign Up</h2>
<p>Sign up as: </p>
<button
className={signUpType === "doctor" ? "btn" : "btn-outline"}
onClick= { () => setSignUpType("doctor")}
style={{margin : "5px"}}
>Doctor</button>
<button 
className={signUpType === "patient" ? "btn" : "btn-outline"}
onClick = { () => setSignUpType("patient")}
style={{ margin :"5px" }}
>Patient</button>

<div> 
  <input type="text"
 placeholder="Enter ID"
value={signUpID}
onChange={e => setSignUpID(e.target.value)}
style={{padding:"8px" , width:"100%", borderRadius : "6px", border: "1px solid #ccc", marginBottom: "10px"}}
/>

<input type= "text"
placeholder="Enter Name"
value={signUpName}
onChange={e =>setSignUpName(e.target.value)}
style={{ padding:"8px", width: "100%", borderRadius:"6px", border : "1px solid #ccc" }}
/>
</div>

{signUpError && <p style = {{color : "red", marginTop:"5px" }} > {signUpError} </p>}
<button className ="btn" onClick={handleSignUpSubmit} style={{marginTop:"10px"}} >Create Account</button>
<br />
<button onClick= {() => setShowSignUp(false)} style = {{ marginTop: "10px" , background : "none", border : "none", color :  "#555" , cursor: "pointer" }} >Cancel</button>
</div>
</div>
)}
</div>
);
}
export default Home;