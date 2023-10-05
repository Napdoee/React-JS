import {useRef} from "react";

const Navbar = () => {
	let linkRef = useRef(null);

	return (
		<div style={{ display: "flex", gap: '10px' }}>
          <a ref={linkRef}>Home</a>
      	</div>
	)
}

export default Navbar;