import React from 'react';
import './MyCard.css'
const PersonelMenu = (props) =>{
	const {name}=props;
	

	function showMenu() {
		const menu=document.getElementsByName(name);
		
	
		if (menu[0].style.display === "none") {
			menu[0].style.display = "block";
		} else {
			menu[0].style.display = "none";
		}

		
	}

	return(

        <div id="personelMenu" className="d-inline-flex flex-column" style={{position:"absolute", top:"10px",right:"10px"}} >
          <a onClick={showMenu} style={{cursor:"pointer"}} className=" align-self-end"><i className="fas fa-ellipsis-v" style={{color:"white"}}></i></a>
          <ul name={name} id="menuSettings" className=" p-0 text-center" style={{height:"4.5rem",width:"7rem", listStyle:"none",display:"none" }}>
            <li >Profile</li>
            <li >Message</li>
            <li onClick={props.removeCard}>Delete</li>
          </ul>
        </div>

	);


}

export default PersonelMenu;