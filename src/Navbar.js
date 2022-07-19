import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>BuiltByCanucks</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/prebuilt">Prebuilt Computers</Link>
                <Link to="/custom">Custom Computers</Link>
            </div>
        </nav>
    );
}

export default Navbar;