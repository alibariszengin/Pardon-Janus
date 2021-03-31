import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className={"w-100 bg-info border-bottom clearfix"} style={{ height: "5rem"}}>
    	
    	<a href="#" className="btn text-white mt-2 ml-4 " style={{  fontSize:"2rem", float:"left"}}>Janus</a>
    	<ul id="navbar-list" className={"text-white mt-4 "}  style={{ float:"right"}}>
    		<li className="">Contacs</li>
    		<li className="">News</li>
    		<li className="">Profile</li>
    	</ul>

    </div>

  );
}

export default Navbar;
