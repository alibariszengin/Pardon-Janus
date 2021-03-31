import React from 'react';
import './MyCard.css'
const AddCard = (props) =>{

	

	return(
		<div id="addCard" className={"bg-primary w-75 mt-4 mx-auto text-center rounded"} style={{height:"285px",padding:"1rem",paddingTop:"1.5rem",display:"none"}}>


			<table className="mx-auto" cellPadding="8px" cellSpacing="5px">
				<tbody>
				    <tr>
				        <td>
				        	<h5 className="d-inline-block mr-5">Name & Surname</h5>
				            			            
				        </td>
				        <td>
				        	<h5 className="d-inline-block mr-5">Title</h5>
				            		            
				        </td>
				        <td>
				        	<h5 className="d-inline-block mr-5">E-mail</h5>		            
				            
				        </td>
				    </tr>
				    <tr>
				        <td>
				        	
				            <input id="addName" type="text" className="mr-4"/>
				            
				        </td>
				        <td>
				        	
				            <input id="addTitle"  type="text" className="mr-4"/>
				            
				        </td>
				        <td>
				            <input id="addEmail" type="email" className="mr-4"/>
				            
				        </td>
				    </tr>
				    <tr>
				        <td>
				        	
				            <h5 className="d-inline-block mr-5">Department</h5>
				            
				        </td>
				        <td>
				        	
				            <h5 className="d-inline-block mr-5">Company</h5>
				            
				        </td>
				        <td>
				            <h5 className="d-inline-block mr-5">Photo Link</h5>
				            
				        </td>
				    </tr>
				    <tr>
				        <td>
				        	
				            <input id="addDepartment" type="text" className="mr-4"/>
				            
				        </td>
				        <td>
				        	
				            <input id="addCompany" type="text" className="mr-4"/>
				            
				        </td>
				        <td>
				            <input id="addUrl" type="url"className="mr-4"/>
				            
				        </td>
				    </tr>
				</tbody>
			</table>
			<button onClick={props.AddToList} style={{border:"0px",transition:"transform(scale) 2s",backgroundColor:"#103347"}} className="mt-3 rounded px-3 py-1 text-white">Add</button>

		</div>
	);


}

export default AddCard;