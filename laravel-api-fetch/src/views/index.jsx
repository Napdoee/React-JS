import { useState } from "react";
import { getProjects } from "../api/projects/getProjects";
import ProjectList from "../components/ProjectList";
import ProjectDetail from "../components/ProjectDetail";

const Page = () => {
  const { data: getAllProjects, isLoading } = getProjects();
  const [project, setProject] = useState(getAllProjects?.data.projects[0]);
  
  return (
    <>
      <div className="flex justify-center h-fit">
        {isLoading ? <span className="loading loading-infinity loading-lg"></span> : (
          <>
            <div className="w-full flex-col bg-neutral rounded-s-lg overflow-hidden">
              {getAllProjects?.data.projects.map((value, index) => (
                <div key={index} className="cursor-pointer">
                  <ProjectList project={value} handleClick={() => setProject(value)} />
                </div>
              ))}
            </div>
            <div className="w-full bg-secondary rounded-e-lg text-center">
              {project && <ProjectDetail project={project} />}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Page;