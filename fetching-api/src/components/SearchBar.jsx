const SearchBar = ({ filter, onFilterChange }) => {
	return (
	  <form>
	    <input type="search" placeholder="Search Post.."  className="input my-5 bg-blue-100"
	      value={filter} onChange={(e) => onFilterChange(e.target.value)} autoFocus />
	  </form>
	)
}

export default SearchBar;