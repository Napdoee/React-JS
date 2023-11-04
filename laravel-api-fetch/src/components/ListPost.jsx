const ListPost = ({post, textContent}) => {
	return (
		<div className="w-full lg:basis-1/2 lg:w-1/2">
			<div className="p-7 bg-blue-400 m-1 rounded-md">
		      <h3 className="text-xl font-bold text-slate-100">{post.title}</h3>
		      <p className="text-md text-slate-100">{textContent}</p>
		      <div className="text-sm text-slate-200 mt-5">{post.writer.username} <div className="float-right">{post.created_at}</div></div>
			</div>
		</div>
	)
}

export default ListPost;