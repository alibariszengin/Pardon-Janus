import React from 'react';
import "./SearchBox.css";

const SearchBox = ({searchfield, searchChange})=>{ 

  function toggleAdd(){
    const addMenu=document.getElementById("addCard");
    if (addMenu.style.display === "none") {
      addMenu.style.display = "block";
    } else {
      addMenu.style.display = "none";
    }
  }
  return (
    <div className='text-center' style={{ height:"2.5rem"}}>
      <input
        className='p-2 border rounded border-light bg-secondary'
        type="search"
        placeholder="search cards"
        onChange={searchChange} 
      />
      <a className="ml-3 d-inline-block" onClick={toggleAdd} style={{textDecoration:"none", color:"black", fontSize:"2rem",cursor:"pointer",transform:"translateY(0.30rem)"}}><i className="fas fa-plus-square"></i></a>
      
    </div>
  );
}

export default SearchBox;
