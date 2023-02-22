import PersonelMenu from './PersonelMenu.js';
import bosPp from './bosPp.webp';
import { useEffect, useState } from 'react';

const Card=(props) =>{
  const {name , email ,id, title, company, department }= props;
  
  const [url, setUrl] = useState(props.url);
  if(url===""){
    setUrl(bosPp)
  }
 

  return (
    <div id="card" className={" d-inline-flex flex-column justify-content-between bg-danger rounded"} style={{ width:"300px",height: "25rem"}}>
      <div className={" rounded-top w-100 p-3 clearfix position-relative"} style={{backgroundColor:"#103347" ,height: "9.5rem" }}>
        

        <PersonelMenu name={name} removeCard={props.removeCard}/>

        <img src={url} alt="Personal " className={"mw-100 rounded-circle"} style={{height:"120px", width:"120px",objectFit:""}}/>
        <div className="float-right w-50 ">
          <h4 className=" text-capitalize text-white">{name}</h4>
          <h6 className=" text-white text-break">{title}</h6>
        </div>

      </div>
      <div className={"mr-3"} style={{height:"14rem", marginLeft:"1.5rem"}}>
       
        <div className={"mt-3"} style={{height:"10rem"}}>
          <h5>Company : {company}</h5>
          <h5>Departmant : {department}</h5>
          <h5>{email}</h5>

        </div>        
      
      </div>

      
      <div className="align-self-start" style={{marginLeft:"3rem"}}>
        <div style={{ borderTop: "2px solid #fff ", marginLeft:"-1.5rem", marginRight: "-3rem", marginBottom:10 }}></div>

        <a href="#" style={{cursor:"pointer"}}><i className="fab fa-instagram ml-2 mr-5 text-info pointer" style={{ fontSize:"1.5rem"}}></i></a>
        <a href="#" style={{cursor:"pointer"}}><i className="fab fa-twitter text-info mr-5" style={{ fontSize:"1.5rem"}}></i></a>
        <a href="#" style={{cursor:"pointer"}}><i className="fab fa-linkedin text-info" style={{ fontSize:"1.5rem"}}></i></a>
      </div>
    </div>
  );
}

export default Card;
