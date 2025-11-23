import {useNavigate} from "react-router-dom";
import '../styles/Login.css';

function Login(){
     const navigate = useNavigate();
      const loginAs = (type) => {
        navigate(`/dashboard/${type}`);

      }
      return(
        <div className="login">
            <h2>Login</h2>
            <p>Choose how you want to login:</p>

            <div className="login-buttons">
                <button className="btn" onClick={()=> loginAs('doctor')}>
                    Login as Doctor
                </button>
                <button className="btn" onClick={()=> loginAs('patient')}>
                    Login as Patient
                </button>
            </div>
        </div>
      )
}
export default Login;
