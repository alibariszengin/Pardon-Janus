import React from 'react';
import Card from './MyCard';
const CardList=({cards,removeCard})=>{
	const cardComponent=cards.map((user)=>{
		return <div key={user.id} className={" d-inline-block m-3"}>
			    			<Card key={user.id} id={user.id} name={user.name} email={user.email} 
			    			url={user.url} title={user.title} company={user.company} department={user.department} removeCard={removeCard}/>
			    </div>
			
		
	})
	return(

		<div  style={{marginTop:"2rem"}}>
			{cardComponent}
		</div>

	);
}

export default CardList;