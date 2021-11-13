import React, { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
  useEffect(() => {
      fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('../data.json');
    
    const items = await data.json();
    console.log(items);
    setItems(items);
  }

  return (
    <div>
        <h1>Shop Page</h1>
        <div>
        { items.map(item => {
          return(
          <>
            <h2 key={item.id}>
              <Link to={`/shop/${item.id}`}>{ item.title }</Link>
            </h2>
            <img src={item.image} alt={item.title}/>
            <p>{ item.content }</p>
          </>
          )
        }) }
        </div>
    </div>
    
  );
}

export default Shop;


//21:57 min