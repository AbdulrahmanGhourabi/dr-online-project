import {useState} from "react";

const userName={
  PT001: "Omar",
  PT002: "Jasmine",
  PT003 : "Sara",
  PT004: "Mark",
  PT005: "Khaled",
  DR001: "Jane",
  DR002: "Gabriel",
  DR003: "Ali",
  DR004: "Fatima",
  DR005: "Jason"
}
function Discussion({userType, userID, myDiscussion}){
  const [topics, setTopics] = useState([
    {
      sickness: "Diabetes - Intermittent Fasting Study",
      author: "Dr. Sarah" ,
      text: "A new study shows intermittent fasting can help type 2 diabetes patients control blood sugar.",
      replies : [
        {role : "Patient", author : "Omar", text: "Can I skip breakfast safely?"},
        {role : "Dr", author : "Sarah", text: "IT's about controlled fasting windows."},
        {role : "Patient", author : "Omar", text: "Will it help me lose weight too?"},
        {role : "Dr", author : "Sarah", text: "Yes, if combined with healthy eating and exercise."}

        
      ]
    },
    {
      sickness : "Hypertension - DASH Diet Update",
      author: "Dr.Ahmed",
      text:"Adjusting portions in the DASH diet reduces systolic BP significantly.",
      replies : [
        {role : "Patient", author : "Lina" , text: "Do I need to follow it strictly?"},
        {role: "Dr" , author : "Ahmed", text:" Gradual changes also give benefits."}
      ]
    },
    {
      sickness:"Asthma - Smart Inhaler Study",
      author: "Dr.Ali",
      text: "Smart inhalers reduce flare-ups with reminders.",
      replies : [
        { role : "Patient", author : "Mark" , text: " Will it stop night flare-ups completely?"},
        {role : "Dr", author: "Ali", text: "It helps reduce them but cannot guarantee full prevention."}
      ]
    }
  ])
  const[newReply, setNewReply]= useState({});

  const handlePost= (index) => {
    if(!newReply[index]) return;

    const updated = [...topics];
    updated[index].replies.push({
      role: userType === "doctor" ? "Dr" : "Patient" ,
      author: userName[userID] || userID,
      text:newReply[index]
    })
    setTopics(updated);
    setNewReply({...newReply, [index]: ""});
  }
  return(
    <div>
      {topics.map((t,idx) =>(
        <div key={idx} style ={{backgroundColor : "#121212" , padding: "10px" , marginBottom: "15px" , borderRadius: "8px"}}>
           <h4>{t.sickness}</h4>
           <p><b>{t.author} (Study Update): </b> {t.text}</p>
           {t.replies.map((r, i)=> (
            <p key={i}><b>{r.role} {r.author}:</b>{r.text}</p>
            ))}
            <div style={{ marginTop: "10px" }}>
              <textarea
               placeholder="Write a reply..."
               rows={1}
               style={{ width:"100%" , padding:"5px", resize : "none" , maxHeight:"50px"}}
               value={newReply[idx] || ""}
                onChange={e => setNewReply({ ...newReply, [idx] : e.target.value})}
                />
                <button className="btn" onClick= {() => handlePost(idx)} style={{ marginTop :"5px"}}>
                  Post</button>
              
            </div>
            </div>
               ))}
               </div>

              )
            }


            
      
export default Discussion;
