import {useState} from "react";
import {useParams ,Link} from "react-router-dom";
function MedicalStudies(){
  const {userType}=useParams();
  const[studies, setStudies]= useState([
    {sickness: "Diabetes" ,study: "New insulin therapy shows positive results in elderly patients."},
    {sickness: "Hypertension" , study: "DASH diet reduces blood pressure effectively."},
    {sickness : "COVID-19" , study: "Booster shots reduce hospitalization in high-risk groups."},
    {sickness: "Asthma", study: "Inhaled corticosteroids reduce flare-ups during cold season."},
    {sickness: "Flu" , study: "Annual flu vaccination reduces infection rates by 60%."},

  ])
  const[newStudy, setNewStudy]= useState({ sickness : "", study: "" });
const[search , setSearch]= useState("");



const postStudy =() =>{
  if (!newStudy.sickness.trim()|| !newStudy.study.trim()) return;
  setStudies([{sickness : newStudy.sickness, study: newStudy.study}, ...studies])
  setNewStudy({sickness : "", study: ""})
}
const filteredStudies = studies.filter(
   s =>
      s.sickness.toLowerCase().includes(search.toLowerCase())||
      s.study.toLowerCase().includes(search.toLowerCase())
)
 return( 
  <div className="page">
     <Link to="/">Home</Link>
     <h2>Medical Studies</h2>
     <div>
      <input placeholder="Search studies..."
      value={search}
      onChange={ e => setSearch(e.target.value)}
      />
      
     </div>
     {userType=== "doctor" && (
      <div>
        <input placeholder="Sickness Name"
        value={newStudy.sickness}
        onChange={e => setNewStudy({ ...newStudy , sickness : e.target.value})}
        />
        <textarea placeholder="Recent Study Details"
        value={newStudy.study}
        onChange={e => setNewStudy({ ...newStudy, study: e.target.value})}
         />
         <button className="btn" onClick={postStudy}>Post Study</button>
      </div>
     )}
     <div>
      {filteredStudies.map((s,idx) => (
        <div key={idx}>
          <h3>{s.sickness}</h3> 
          <p>{s.study}</p>
          </div>
      ))}
     {filteredStudies.length ===0 && <p style={{ textAlign: "center"}}>No studies found.</p>}
  
  </div>
  </div>
 )
}
export default MedicalStudies;
     


