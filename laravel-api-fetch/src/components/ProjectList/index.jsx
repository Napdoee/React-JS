const ProjectList = ({project, handleClick}) => {
  return (
    <div className="w-full bg-neutral hover:bg-primary transition duration-150 ease-in-out p-5 border-b-2 border-slate-400" onClick={handleClick}>
      <h1 className="text-xl font-semibold">{project.title}</h1>
    </div>
  )
}

export default ProjectList;