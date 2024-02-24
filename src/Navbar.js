import { Link } from "react-router-dom";

// sfc - stateless function component
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>ToDo List</h1>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/create"> Add </Link>
                <Link to="/"> Remove </Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;