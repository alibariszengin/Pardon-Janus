import React,{Component} from 'react';
import './App.css';
import Card from './CardList/MyCard.js';
import Navbar from './Navbar/Navbar.js';
import SearchBox from './Search&Add/SearchBox.js';
import {personelCards} from './CardList/PersonelCards.js';
import CardList from './CardList/ListOfCards.js';
import photo from './baris.jpg';
import AddCard from './CardList/AddCard.js';

class App extends Component  {

	constructor(){
		super();
		this.state={
			cards: personelCards,
			searchfield: ''
		}
	}


	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});

	}

	removeCard = (event) => {
		const parent=event.target.parentElement;
		parent.style.display="none";
		const name=parent.getAttribute("name");
		const cards = this.state.cards.filter(card => card.name !== name);
  		this.setState({ cards });
	}

	addToList = () => {
		const lenghtOfData=personelCards.length;
		const inputs=document.getElementById("addCard").getElementsByTagName('input');
	
		document.getElementById("addCard").style.display = "none";
	   
		const newObject={
			id:lenghtOfData+1,
			name:document.getElementById("addName").value,
			title:document.getElementById("addTitle").value,
			email:document.getElementById("addEmail").value,
			department:document.getElementById("addDepartment").value,
			company:document.getElementById("addCompany").value,
			url:document.getElementById("addUrl").value
		}
		Array.from(inputs).forEach(function (element) {
		        element.value='';
		});

		this.state.cards.push(newObject);
		this.setState(this.state.cards);

	}

	render(){
		let filteredCards=this.state.cards;
		filteredCards=this.state.cards.filter(persCard=>{
	
			return persCard.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
					 persCard.email.toLowerCase().includes(this.state.searchfield.toLowerCase())||
					 persCard.title.toLowerCase().includes(this.state.searchfield.toLowerCase())||
					 persCard.department.toLowerCase().includes(this.state.searchfield.toLowerCase())||
					 persCard.company.toLowerCase().includes(this.state.searchfield.toLowerCase())
			
		})
		return (
		    <div className="bg-info clearfix " style={{minHeight:"1200px" }}>

		    	<Navbar />
		    	<div className={"w-100"} style={{}}> 
			    	<div className={"w-25 float-left pl-5 border-right "} style={{ position:"fixed", marginTop:"6.5rem"}}>
			    		<Card name={"Ali Barış Zengin"} url={photo} company="YTU" department="Computer Engineer" email="alibariszengin@gmail.com" id="-1"/>
			    	</div>


			    	<div className={"w-75 float-right text-justfiy "} style={{padding:"3rem",paddingTop:"1rem"}}>

			    		<SearchBox searchChange={this.onSearchChange}/>
						<AddCard AddToList={this.addToList}/>
			    		<CardList cards={filteredCards} removeCard={this.removeCard}/>


			    	</div>
		    	</div>

		    </div>
	  );
	}

}

export default App;
