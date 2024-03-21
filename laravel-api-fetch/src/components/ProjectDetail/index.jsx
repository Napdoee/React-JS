const ProjectDetail = ({project}) => {
  const imgURL = `http://localhost:5000/public/projects/${project.image}`;

  return (
    <div className="w-full p-5">
      <img src={imgURL} alt={project.title} width="300" className="mx-auto"/>
      <h1 className="text-3xl font-bold mt-3">{project.title}</h1>
      <p className="text-md text-slate-600">{project.description}</p>
      <p className="text-sm">{project.repository}</p>
    </div>
  )
}

export default ProjectDetail;