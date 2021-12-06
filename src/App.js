import { useState } from "react";
import Project from "./components/Project";
import projectData from "./projects.json";

function App() {
    const [projects, setProjects] = useState(projectData.projects);
    console.log(projects);
    return (
        <div id="showCase">
            {projects.length > 0
                ? projects.map((project) => (
                      <Project
                          key={project.id}
                          title={project.title}
                          description={project.description}
                      />
                  ))
                : "No projects here"}
        </div>
    );
}

export default App;

//Components I'm gonna need:
//Container for all projects
//Title of project
//box containing canvas or picture
//Description of project
