import React, { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function ItemDetail({ match }) {
  useEffect(() => {
      fetchItem();
      
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`../public/data.json`);
    
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
    
  }

  return (
    <div>
        <h1>{item.title}</h1>
        <div>
         <p>wala nga eh!</p>
		  <img src={item.image} alt={item.title}/>
        </div>
    </div>
	

  );
}

export default ItemDetail;


//30 min

// result: hindi gumagana yung fetch specific id or items link

// not complete