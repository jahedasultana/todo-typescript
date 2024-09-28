import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link className="mr-3 text-green-500" to='/'>All</Link>
            <Link className="mr-3 text-green-500" to='/?todos=active'>Active</Link>
            <Link className="mr-3 text-green-500" to='/?todos=completed'>Completed</Link>
        </div>
    );
};

export default Navbar;