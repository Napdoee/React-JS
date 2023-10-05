import { useState } from "react";
import SearchBar from '../components/SearchBar'

export const filterPosts = () => {
	const [filter, setFilter] = useState("");

	function Search() {
		return <SearchBar filter={filter} onFilterChange={setFilter}/>
	}

	return {
		filter, 
		Search
	};
}