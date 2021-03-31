import React from 'react';
import Card from './MyCard';
const CardList=({cards,removeCard})=>{
	const cardComponent=cards.map((user,i)=>{
		return <div key={i} className={" d-inline-block m-3"}>
			    			<Card key={i} id={cards[i].id} name={cards[i].name} email={cards[i].email} 
			    			url={cards[i].url} title={cards[i].title} company={cards[i].company} department={cards[i].department} removeCard={removeCard}/>
			    </div>
			
		
	})
	return(

		<div  style={{marginTop:"2rem"}}>
			{cardComponent}
		</div>

	);
}

export default CardList;