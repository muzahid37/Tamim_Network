
import { Link } from 'react-router-dom';
import './NavbarStyle.css'
const Navbar = () => {
    const navOption=<>
                    <li><a>Home</a></li>
                    <li><a>Provide service</a></li>
                    <Link to="/blogs" /> 
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                    </>
    return (
        <div>
            <div style={{background:"rgb(254, 144, 67,0.2)", color:"#089fac"}} className="navbar fixed z-10   max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {/* phone view */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       
                         {navOption}
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl brand-button">BISTRO INTERNET</a>
                </div>
                {/* dasktop view  */}
                <div className="navbar-center border-x-3 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    
                    </ul> 
                </div>

                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                    </button>
                </div>
            
            </div>
            
        </div>
    );
};

export default Navbar;