import ProjectCard from "../components/ProjectCard";
import poopmap from "../assets/poopmap_img.png";
import itc from "../assets/itc.png";
import ngcpui from "../assets/ngcpui.png";

function Projects() {
    return (
        <div>
            <div className="text-center text-white my-8">
                <h1 className="text-5xl mb-5">Projects</h1>
                <p className="text-l">Our projects over the years</p>
            </div>

            <div className="flex flex-col space-y-4 justify-center">
                <ProjectCard image={poopmap} name={"PoopMap"} desc={"A marker application to track your droppings!"} link={"https://github.com/christopherjlo/CPP-Poop-Map"}></ProjectCard>
                <ProjectCard image={itc} name={"Roommate Finder"} desc={"Web application to find roommates"} link={"https://github.com/The-The-ITC-2023/Roommate-Finder-Application"}></ProjectCard>
                <ProjectCard image={ngcpui} name={"NGCP UI"} desc={"User interface of the ground control station"} link={"https://github.com/ngcp-project/gcs-user-interface"}></ProjectCard>
            </div>
        </div>
      );
    }
  
export default Projects;