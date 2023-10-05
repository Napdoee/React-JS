import { getPosts } from '../utils/getPosts'
import { filterPosts } from '../utils/filterPosts'
import { client } from '../lib/axios'
import ListPost from '../components/ListPost';
import Spinner from '../components/Spinner';

const Home = () => {
	const { filter, Search } = filterPosts();
	const { data, isLoading } = getPosts();

	const renderPosts = () => {
		return data?.data.data.map((post) => {
			if(post.title.toLowerCase().indexOf(filter.toLowerCase()) === -1) return;
			
		    var content = post.news_content;
		    var textContent = content.length > 50 ? content.slice(0, 47) + '...' : content;

		    return ( <ListPost key={post.id} post={post} textContent={textContent}/> );
		})
	}

	return (
		<>
			<h1 className="text-3xl text-slate-100 text-border font-bold text-center mb-5 drop-shadow-lg">Welcome to Post'ers</h1>
			{Search()}
			<div className="flex flex-wrap items-stretch justify-center">
				{renderPosts()}
				{isLoading ? "Ini Loading Cuy.." : null}
				{/*{isLoading && Spinner()}*/}
			</div>
		</>
	)
}

export default Home;