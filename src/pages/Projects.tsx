import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchMyProjects, fetchProjects } from "../redux/projectsActions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import MyProjectCard from "@/components/MyProjectCard";

const Projects = () => {
  const dispatch = useDispatch();

  const { projects, myProjects } = useSelector(
    (state: RootState) => state.projects
  );
  const { searchQuery } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    dispatch(fetchProjects() as any);
    dispatch(fetchMyProjects() as any);
  }, [dispatch]);

  const filteredProjects = projects.filter((project) => {
    return project.project_title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });
  const reversedProjects = [...filteredProjects].reverse();
  const reversedMyProjects = [...myProjects].reverse();

  return (
    <div className="px-4">
      <Tabs defaultValue="all-projects" className="w-full">
        <TabsList className="flex">
          <TabsTrigger
            value="all-projects"
            className="mr-4 text-lg font-medium cursor-pointer focus:outline-none"
          >
            All Projects
          </TabsTrigger>
          <TabsTrigger
            value="my-projects"
            className="text-lg font-medium cursor-pointer focus:outline-none"
          >
            My Projects
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all-projects" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {reversedProjects.map((project) => (
              <ProjectCard key={project.project_id} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="my-projects" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {reversedMyProjects.map((project) => (
              <MyProjectCard
                key={`my-${project.project_id}`}
                project={project}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
