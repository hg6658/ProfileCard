import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import avatar from "./1499994.jpg";
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Skill({skill,color}){
  return <span style={{backgroundColor:color}} className="skill">{skill}</span>
}

function SkillList(){
  let skills = ["React 💪","HTML+CSS 💪","JavaScript 💪","Svelte 👶"];
  let colors = ["blue","orange","yellow","red"];
  return <div className="skill-list">{skills.map((skill,index) => {
    return <Skill skill={skill} color={colors[index]}/>
  })}</div>
}

function Intro(){
  return (<div className="intro">
    <h1>Harshit Gupta</h1>
    <p>Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.</p>
  </div>);
}

function Avatar(){
  return <img src={avatar}/>
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
