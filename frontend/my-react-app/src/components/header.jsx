
import { Link } from "react-router";

const Header = () => {

	return (
		<div 
		className="px-[2rem] py-[1rem] flex justify-between shadow-xs"
		 >
			<Link to="/home" >
				<img src="brand_logo.png" alt="" />
			</Link>

			<nav>
				<ul
					className=" flex gap-[1rem] "
				>
					<li>
						<Link to="/home">
						Home
						</Link>
					</li>
					<li>
						<Link to="/contact">
						Contact
						</Link>
					</li>
					<li>
						<Link to="/login">
						Sign In
						</Link>
					</li>
					<li>
						<Link to="/register">
						Sign Out
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
};

export default Header;